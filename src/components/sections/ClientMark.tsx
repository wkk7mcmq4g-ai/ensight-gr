type Props = {
  client: string;
  logo?: string;
  /** Height in rem for a logo image. */
  height: number;
};

/** A client's logo, or its name set in type when there is no logo file. */
const ClientMark = ({ client, logo, height }: Props) =>
  logo ? (
    <div className="flex items-center" style={{ height: `${height}rem` }}>
      <img src={logo} alt={client} className="h-full w-auto object-contain opacity-70" loading="lazy" />
    </div>
  ) : (
    <div className="flex items-center text-sm font-semibold tracking-wide text-foreground/70" style={{ minHeight: `${height}rem` }}>
      {client}
    </div>
  );

export default ClientMark;
