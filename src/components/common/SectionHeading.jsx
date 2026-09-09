export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  light = false,
  level = "h2",
  className = "",
}) {
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const Heading = level;

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClasses} ${className}`}>
      {kicker && (
        <span className={`text-sm font-medium ${light ? "text-signal-light" : "text-signal"}`}>
          {kicker}
        </span>
      )}
      <Heading className={`text-display-lg font-display font-semibold text-balance ${light ? "text-paper" : "text-ink"}`}>
        {title}
      </Heading>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? "text-paper/70" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
