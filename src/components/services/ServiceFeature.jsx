import { Check } from "lucide-react";

export default function ServiceFeature({ title, items, variant = "check" }) {
  return (
    <div>
      <h2 className="text-lg font-display font-semibold text-ink">{title}</h2>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-ink/75 leading-relaxed">
            {variant === "check" ? (
              <Check size={18} className="text-signal shrink-0 mt-0.5" aria-hidden="true" />
            ) : (
              <span className="w-1.5 h-1.5 rounded-full bg-signal shrink-0 mt-2.5" aria-hidden="true" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
