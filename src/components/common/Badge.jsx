export function Badge({ children, tone = "default" }) {
  const tones = {
    default: "bg-ink/5 text-ink",
    signal: "bg-signal/10 text-signal-dark",
    confirm: "bg-confirm/10 text-confirm",
  };

  return (
    <span className={`inline-flex items-center rounded-sm px-2.5 py-1 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-hairline px-2.5 py-1 text-xs text-muted">
      {children}
    </span>
  );
}
