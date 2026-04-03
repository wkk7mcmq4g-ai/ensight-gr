import jsPDF from 'jspdf';

interface CategoryResult {
  category: string;
  weight: number;
  items: { label: string; score: number }[];
  avgScore: number;
  recommendation: string;
}

interface DataClarityPDFData {
  pct: number;
  verdictLabel: string;
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
  cyan: [6, 182, 212] as [number, number, number],
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
  if (score === 0) return 'Strong';
  if (score >= 3) return 'Critical';
  return 'Gaps';
}

function getCategoryLabel(avg: number): string {
  if (avg <= 0.15) return 'Strong';
  if (avg >= 0.7) return 'Critical';
  return 'Gaps';
}

function getVerdictColor(label: string): [number, number, number] {
  if (label.includes('Build')) return COLORS.green;
  if (label.includes('Not')) return COLORS.pink;
  return COLORS.amber;
}

export function generateDataClarityPDF(data: DataClarityPDFData) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const W = 210;
  const margin = 18;
  const contentW = W - margin * 2;
  const cx = W / 2;
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

  // Header bar - gradient approximation with cyan to green
  doc.setFillColor(...COLORS.cyan);
  doc.rect(0, 0, W / 2, 3, 'F');
  doc.setFillColor(...COLORS.green);
  doc.rect(W / 2, 0, W / 2, 3, 'F');

  // Title
  y = 28;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...COLORS.text);
  doc.text('Data Readiness Report', margin, y);

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

  const verdictColor = getVerdictColor(data.verdictLabel);
  doc.setFillColor(...verdictColor);
  doc.rect(margin, y, contentW, 2, 'F');

  // Verdict label
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...verdictColor);
  doc.text(data.verdictLabel.toUpperCase(), cx, y + 14, { align: 'center' });

  // Score circle
  const cy = y + 34;
  const r = 14;
  doc.setDrawColor(...COLORS.border);
  doc.setLineWidth(1.5);
  doc.circle(cx, cy, r);
  doc.setDrawColor(...verdictColor);
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
  doc.setTextColor(...verdictColor);
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
  doc.text('ESTIMATED COST OF DATA & REPORTING INEFFICIENCY', cx, y + 10, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(...COLORS.pink);
  doc.text(data.costFormatted, cx, y + 22, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(...COLORS.dim);
  doc.text(`Based on ${data.teamSize} people and a Data Readiness Score of ${data.pct}%`, cx, y + 29, { align: 'center' });

  y += costCardH + 10;

  // Category breakdown
  checkSpace(14);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...COLORS.text);
  doc.text('Breakdown by Dimension', margin, y);
  y += 8;

  data.categories.forEach((cat) => {
    const estH = 10 + cat.items.length * 6 + (cat.avgScore > 0.15 ? 14 : 0) + 6;
    checkSpace(estH);

    const catColor = getCategoryColor(cat.avgScore);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.text);
    doc.text(`${cat.category.toUpperCase()}`, margin, y);

    // Weight label
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(...COLORS.dim);
    const weightText = `(${cat.weight}% weight)`;
    const catNameW = doc.getTextWidth(cat.category.toUpperCase());
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    const catNameWActual = doc.getTextWidth(cat.category.toUpperCase());
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.text(weightText, margin + catNameWActual + 3, y);

    const statusLabel = getCategoryLabel(cat.avgScore);
    doc.setFontSize(7);
    doc.setTextColor(...catColor);
    doc.text(statusLabel.toUpperCase(), margin + contentW, y, { align: 'right' });
    y += 2;

    doc.setDrawColor(...COLORS.border);
    doc.setLineWidth(0.2);
    doc.line(margin, y, margin + contentW, y);
    y += 4;

    cat.items.forEach((item) => {
      checkSpace(7);
      const itemColor = getScoreColor(item.score);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(...COLORS.dim);
      const truncated = item.label.length > 70 ? item.label.substring(0, 67) + '...' : item.label;
      doc.text(truncated, margin + 2, y);

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

    if (cat.avgScore > 0.15) {
      checkSpace(14);
      doc.setFillColor(COLORS.cyan[0], COLORS.cyan[1], COLORS.cyan[2]);
      doc.setGState(doc.GState({ opacity: 0.08 }));
      const recLines = doc.splitTextToSize(cat.recommendation, contentW - 12);
      const recH = recLines.length * 3.5 + 5;
      doc.roundedRect(margin + 2, y - 1, contentW - 4, recH, 1.5, 1.5, 'F');
      doc.setGState(doc.GState({ opacity: 1 }));

      doc.setDrawColor(...COLORS.cyan);
      doc.setLineWidth(0.5);
      doc.line(margin + 2, y - 1, margin + 2, y - 1 + recH);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(...COLORS.cyan);
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
  doc.text('Ready for the Full Assessment?', cx, y + 10, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...COLORS.dim);
  doc.text('Contact hello@ensight.co to book your Data Clarity Assessment.', cx, y + 16, { align: 'center' });

  doc.save(`Data-Readiness-Report-${data.pct}pct.pdf`);
}
