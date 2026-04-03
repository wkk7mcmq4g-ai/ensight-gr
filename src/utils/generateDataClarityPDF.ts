import jsPDF from 'jspdf';
import { DIMS, type VerdictStep } from '@/data/dataClarityQuestions';

interface FlagItem {
  d: { id: string; name: string };
  s: number;
}

interface DataClarityPDFData {
  pct: number;
  verdictKey: string;
  verdictName: string;
  verdictDesc: string;
  verdictColor: string;
  scores: number[];
  steps: VerdictStep[];
  critFlags: FlagItem[];
  warnFlags: FlagItem[];
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
  purple: [124, 58, 237] as [number, number, number],
};

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

function barColor(s: number): [number, number, number] {
  if (s <= 1.5) return COLORS.pink;
  if (s <= 2.5) return COLORS.amber;
  return COLORS.green;
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
  const addNewPage = () => { doc.addPage(); fillPage(); y = margin; };
  const checkSpace = (needed: number) => { if (y + needed > 280) addNewPage(); };

  // Page 1
  fillPage();

  // Header bar
  doc.setFillColor(...COLORS.cyan);
  doc.rect(0, 0, W / 3, 3, 'F');
  doc.setFillColor(...COLORS.green);
  doc.rect(W / 3, 0, W / 3, 3, 'F');
  doc.setFillColor(...COLORS.purple);
  doc.rect((W * 2) / 3, 0, W / 3, 3, 'F');

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

  // Score + Verdict card
  y += 14;
  const verdictRgb = hexToRgb(data.verdictColor);
  const cardH = 56;
  doc.setFillColor(...COLORS.card);
  doc.roundedRect(margin, y, contentW, cardH, 3, 3, 'F');
  doc.setFillColor(...verdictRgb);
  doc.rect(margin, y, contentW, 2, 'F');

  // Score circle
  const ringCy = y + 28;
  const r = 14;
  doc.setDrawColor(...COLORS.border);
  doc.setLineWidth(1.5);
  doc.circle(margin + 28, ringCy, r);
  doc.setDrawColor(...verdictRgb);
  const arcEnd = (data.pct / 100) * 360;
  for (let angle = 0; angle < arcEnd; angle += 2) {
    const rad1 = ((angle - 90) * Math.PI) / 180;
    const rad2 = ((angle - 88) * Math.PI) / 180;
    doc.line(
      margin + 28 + r * Math.cos(rad1), ringCy + r * Math.sin(rad1),
      margin + 28 + r * Math.cos(rad2), ringCy + r * Math.sin(rad2),
    );
  }
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(...verdictRgb);
  doc.text(`${data.pct}%`, margin + 28, ringCy + 3, { align: 'center' });

  // Verdict text (right side)
  const vx = margin + 60;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(...verdictRgb);
  doc.text('VERDICT', vx, y + 14);
  doc.setFontSize(14);
  doc.text(data.verdictName, vx, y + 22);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...COLORS.dim);
  const descLines = doc.splitTextToSize(data.verdictDesc, contentW - 65);
  doc.text(descLines, vx, y + 29);

  y += cardH + 10;

  // Dimension bar chart
  checkSpace(60);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...COLORS.text);
  doc.text('Score by dimension', margin, y);
  y += 7;

  DIMS.forEach((d, i) => {
    checkSpace(8);
    const s = data.scores[i];
    const bp = Math.round((s / 4) * 100);
    const bc = barColor(s);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...COLORS.dim);
    doc.text(d.name, margin, y);

    // Bar
    const barX = margin + 40;
    const barW = contentW - 55;
    doc.setFillColor(...COLORS.border);
    doc.roundedRect(barX, y - 2.5, barW, 4, 1, 1, 'F');
    doc.setFillColor(...bc);
    doc.roundedRect(barX, y - 2.5, barW * (bp / 100), 4, 1, 1, 'F');

    // Score label
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(...bc);
    doc.text(`${s.toFixed(1)}/4`, margin + contentW, y, { align: 'right' });

    y += 7;
  });

  y += 4;

  // Flags
  if (data.critFlags.length > 0 || data.warnFlags.length > 0) {
    checkSpace(20);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...COLORS.text);
    doc.text('Flags requiring attention', margin, y);
    y += 7;

    const renderFlag = (f: FlagItem, critical: boolean) => {
      const color = critical ? COLORS.pink : COLORS.amber;
      const label = critical ? 'Critical' : 'Warning';
      const detail = critical
        ? 'Critical threshold not met. This dimension requires remediation before any build can proceed.'
        : 'Improvement required. Specific gaps should be addressed as part of the remediation plan.';
      const text = `${f.d.name} — scored ${f.s.toFixed(1)}/4. ${detail}`;
      const lines = doc.splitTextToSize(text, contentW - 12);
      const h = lines.length * 3.5 + 6;
      checkSpace(h + 4);

      doc.setFillColor(color[0], color[1], color[2]);
      doc.setGState(doc.GState({ opacity: 0.08 }));
      doc.roundedRect(margin, y - 1, contentW, h, 2, 2, 'F');
      doc.setGState(doc.GState({ opacity: 1 }));

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7);
      doc.setTextColor(...color);
      doc.text(label.toUpperCase(), margin + 4, y + 3);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(...COLORS.dim);
      doc.text(lines, margin + 4, y + 7);

      y += h + 3;
    };

    data.critFlags.forEach((f) => renderFlag(f, true));
    data.warnFlags.forEach((f) => renderFlag(f, false));
    y += 2;
  }

  // Next steps
  checkSpace(30);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...COLORS.text);
  doc.text('Recommended next steps', margin, y);
  y += 8;

  data.steps.forEach((s, i) => {
    const titleLines = doc.splitTextToSize(s.title, contentW - 14);
    const descLines2 = doc.splitTextToSize(s.desc, contentW - 14);
    const h = (titleLines.length + descLines2.length) * 3.5 + 8;
    checkSpace(h + 4);

    doc.setFillColor(...COLORS.card);
    doc.roundedRect(margin, y - 1, contentW, h, 2, 2, 'F');

    // Number
    doc.setFillColor(...verdictRgb);
    doc.setGState(doc.GState({ opacity: 0.15 }));
    doc.circle(margin + 6, y + 4, 3.5, 'F');
    doc.setGState(doc.GState({ opacity: 1 }));
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(...verdictRgb);
    doc.text(String(i + 1), margin + 6, y + 5.5, { align: 'center' });

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...COLORS.text);
    doc.text(titleLines, margin + 14, y + 4);

    // Desc
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...COLORS.dim);
    doc.text(descLines2, margin + 14, y + 4 + titleLines.length * 3.5 + 2);

    y += h + 3;
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
  doc.text('Ready to discuss your results?', cx, y + 10, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...COLORS.dim);
  doc.text('Contact hello@ensight.co to book your Data Clarity Assessment.', cx, y + 16, { align: 'center' });

  doc.save(`Data-Readiness-Report-${data.pct}pct.pdf`);
}
