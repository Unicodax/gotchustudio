import { Link } from "react-router-dom";

const VARIANTS = {
  primary: "bg-signal text-paper hover:bg-signal-dark",
  dark: "bg-ink text-paper hover:bg-ink-soft",
  outline: "bg-transparent text-ink border border-ink/20 hover:border-ink",
  "outline-light": "bg-transparent text-paper border border-paper/30 hover:border-paper",
  ghost: "bg-transparent text-ink hover:text-signal",
};

const SIZES = {
  md: "px-5 py-3 text-[15px]",
  lg: "px-7 py-4 text-base",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded font-medium transition-colors duration-200 ease-gotchu ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses} {...rest}>
      {children}
    </button>
  );
}
