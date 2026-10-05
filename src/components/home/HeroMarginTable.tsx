const rows = [
  { label: 'List price', a: '€10.00', b: '€10.00' },
  { label: 'Gross margin as reported', a: '€3.80', b: '€3.80' },
];

const HeroMarginTable = () => (
  <figure className="relative bg-card border border-border rounded-lg shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] overflow-hidden m-0">
    <div className="h-[2px] bg-gradient-to-r from-primary to-accent-blue" />
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-border">
          <th className="text-left font-medium text-muted-foreground px-5 py-3.5" scope="col">
            <span className="sr-only">Line</span>
          </th>
          <th className="text-right font-semibold text-foreground px-3 sm:px-4 py-3.5 whitespace-nowrap" scope="col">Customer A</th>
          <th className="text-right font-semibold text-foreground px-4 sm:px-5 py-3.5 whitespace-nowrap" scope="col">Customer B</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.label} className="border-b border-border/60">
            <th className="text-left font-normal text-muted-foreground px-4 sm:px-5 py-3.5" scope="row">{r.label}</th>
            <td className="text-right tabular-nums text-foreground px-3 sm:px-4 py-3.5">{r.a}</td>
            <td className="text-right tabular-nums text-foreground px-4 sm:px-5 py-3.5">{r.b}</td>
          </tr>
        ))}
        <tr className="bg-primary/5">
          <th className="text-left font-semibold text-foreground px-4 sm:px-5 py-4" scope="row">Margin after cost to serve</th>
          <td className="text-right tabular-nums font-bold text-lg text-foreground px-3 sm:px-4 py-4">€3.10</td>
          <td className="text-right tabular-nums font-bold text-lg text-primary px-4 sm:px-5 py-4">€0.60</td>
        </tr>
      </tbody>
    </table>
    <figcaption className="px-5 py-3 text-xs text-muted-foreground border-t border-border">
      Same product, same price. Illustrative figures.
    </figcaption>
  </figure>
);

export default HeroMarginTable;
