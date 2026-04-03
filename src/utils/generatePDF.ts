import jsPDF from 'jspdf';

interface CategoryResult {
  category: string;
  items: { label: string; score: number }[];
  avgScore: number;
  recommendation: string;
}

interface PDFData {
  pct: number;
  levelLabel: string;
  headline: string;
  desc: string;
  costFormatted: string;
  teamSize: number;
  categories: CategoryResult[];
}

const COLORS = {
  bg: [15, 14, 26] as [number, number, number],
  card: [22, 20, 38] as [number, number, number],
  text: [230, 228, 240] as [number, number, number],
  dim: [140, 136, 160] as [number, number, number],
  border: [50, 46, 70] as [number, number, number],
  green: [16, 185, 129] as [number, number, number],
  amber: [245, 158, 11] as [number, number, number],
  pink: [236, 72, 153] as [number, number, number],
  purple: [128, 0, 255] as [number, number, number],
};

function getScoreColor(score: number): [number, number, number] {
  if (score === 0) return COLORS.green;
  if (score >= 3) return COLORS.pink;
  return COLORS.amber;
}

function getCategoryColor(avg: number): [number, number, number] {
  if (avg <= 0.15) return COLORS.green;
  if (avg >= 0.7) return COLORS.pink;
  return COLORS.amber;
}

function getScoreLabel(score: number): string {
  if (score === 0) return 'Good';
  if (score >= 3) return 'Critical';
  return 'At Risk';
}

function getCategoryLabel(avg: number): string {
  if (avg <= 0.15) return 'Good';
  if (avg >= 0.7) return 'Critical';
  return 'At Risk';
}

function getLevelColor(label: string): [number, number, number] {
  if (label.includes('Low')) return COLORS.green;
  if (label.includes('High')) return COLORS.pink;
  return COLORS.amber;
}

export function generatePDF(data: PDFData) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const W = 210;
  const margin = 18;
  const contentW = W - margin * 2;
  let y = 0;

  const fillPage = () => {
    doc.setFillColor(...COLORS.bg);
    doc.rect(0, 0, 210, 297, 'F');
  };

  const addNewPage = () => {
    doc.addPage();
    fillPage();
    y = margin;
  };

  const checkSpace = (needed: number) => {
    if (y + needed > 280) addNewPage();
  };

  // Page 1
  fillPage();

  // Header bar
  doc.setFillColor(...COLORS.purple);
  doc.rect(0, 0, W, 3, 'F');

  // Title
  y = 28;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...COLORS.text);
  doc.text('Process Debt Report', margin, y);

  y += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.dim);
  doc.text('Generated ' + new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }), margin, y);

  // Score card
  y += 14;
  const cardH = 72;
  doc.setFillColor(...COLORS.card);
  doc.roundedRect(margin, y, contentW, cardH, 3, 3, 'F');

  const levelColor = getLevelColor(data.levelLabel);
  doc.setFillColor(...levelColor);
  doc.rect(margin, y, contentW, 2, 'F');

  // Level label
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...levelColor);
  doc.text(data.levelLabel.toUpperCase(), W / 2, y + 14, { align: 'center' });

  // Score circle
  const cx = W / 2;
  const cy = y + 34;
  const r = 14;
  doc.setDrawColor(...COLORS.border);
  doc.setLineWidth(1.5);
  doc.circle(cx, cy, r);
  doc.setDrawColor(...levelColor);
  // Draw arc approximation
  const arcEnd = (data.pct / 100) * 360;
  for (let angle = 0; angle < arcEnd; angle += 2) {
    const rad1 = ((angle - 90) * Math.PI) / 180;
    const rad2 = ((angle - 88) * Math.PI) / 180;
    doc.line(
      cx + r * Math.cos(rad1), cy + r * Math.sin(rad1),
      cx + r * Math.cos(rad2), cy + r * Math.sin(rad2)
    );
  }
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(...levelColor);
  doc.text(String(data.pct), cx, cy + 3, { align: 'center' });

  // Headline
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...COLORS.text);
  doc.text(data.headline, cx, y + 56, { align: 'center' });

  // Description
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...COLORS.dim);
  const descLines = doc.splitTextToSize(data.desc, contentW - 20);
  doc.text(descLines, cx, y + 63, { align: 'center' });

  y += cardH + 8;

  // Cost card
  const costCardH = 32;
  checkSpace(costCardH + 8);
  doc.setFillColor(17, 17, 24);
  doc.roundedRect(margin, y, contentW, costCardH, 3, 3, 'F');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...COLORS.dim);
  doc.text('ESTIMATED ANNUAL COST OF INEFFICIENCY', cx, y + 10, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(...COLORS.pink);
  doc.text(data.costFormatted, cx, y + 22, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(...COLORS.dim);
  doc.text(`Based on ${data.teamSize} people and a Process Debt Score of ${data.pct}`, cx, y + 29, { align: 'center' });

  y += costCardH + 10;

  // Category breakdown
  checkSpace(14);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...COLORS.text);
  doc.text('Breakdown by Category', margin, y);
  y += 8;

  data.categories.forEach((cat) => {
    // Estimate height needed: header(8) + items(6 each) + recommendation(12) + spacing(6)
    const estH = 10 + cat.items.length * 6 + (cat.avgScore > 0.15 ? 14 : 0) + 6;
    checkSpace(estH);

    // Category header
    const catColor = getCategoryColor(cat.avgScore);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.text);
    doc.text(cat.category.toUpperCase(), margin, y);

    const statusLabel = getCategoryLabel(cat.avgScore);
    doc.setFontSize(7);
    doc.setTextColor(...catColor);
    doc.text(statusLabel.toUpperCase(), margin + contentW, y, { align: 'right' });
    y += 2;

    // Thin separator
    doc.setDrawColor(...COLORS.border);
    doc.setLineWidth(0.2);
    doc.line(margin, y, margin + contentW, y);
    y += 4;

    // Items
    cat.items.forEach((item) => {
      checkSpace(7);
      const itemColor = getScoreColor(item.score);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(...COLORS.dim);
      const truncated = item.label.length > 70 ? item.label.substring(0, 67) + '...' : item.label;
      doc.text(truncated, margin + 2, y);

      // Badge
      const badge = getScoreLabel(item.score);
      const badgeW = doc.getTextWidth(badge) + 6;
      doc.setFillColor(itemColor[0], itemColor[1], itemColor[2]);
      doc.setGState(doc.GState({ opacity: 0.15 }));
      doc.roundedRect(margin + contentW - badgeW - 1, y - 3, badgeW, 4.5, 1, 1, 'F');
      doc.setGState(doc.GState({ opacity: 1 }));
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.5);
      doc.setTextColor(...itemColor);
      doc.text(badge, margin + contentW - badgeW / 2 - 1, y, { align: 'center' });

      y += 6;
    });

    // Recommendation
    if (cat.avgScore > 0.15) {
      checkSpace(14);
      doc.setFillColor(COLORS.amber[0], COLORS.amber[1], COLORS.amber[2]);
      doc.setGState(doc.GState({ opacity: 0.08 }));
      const recLines = doc.splitTextToSize(cat.recommendation, contentW - 12);
      const recH = recLines.length * 3.5 + 5;
      doc.roundedRect(margin + 2, y - 1, contentW - 4, recH, 1.5, 1.5, 'F');
      doc.setGState(doc.GState({ opacity: 1 }));

      doc.setDrawColor(...COLORS.amber);
      doc.setLineWidth(0.5);
      doc.line(margin + 2, y - 1, margin + 2, y - 1 + recH);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(...COLORS.amber);
      doc.text(recLines, margin + 6, y + 3);
      y += recH + 4;
    }

    y += 4;
  });

  // Footer CTA
  checkSpace(28);
  y += 4;
  doc.setFillColor(...COLORS.card);
  doc.roundedRect(margin, y, contentW, 22, 3, 3, 'F');
  doc.setFillColor(...COLORS.green);
  doc.rect(margin, y, contentW, 2, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...COLORS.text);
  doc.text('Want to See the Real Numbers?', cx, y + 10, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...COLORS.dim);
  doc.text('Contact hello@ordinal.co to book your Operational X-Ray briefing.', cx, y + 16, { align: 'center' });

  // Save
  doc.save(`Process-Debt-Report-${data.pct}pct.pdf`);
}
