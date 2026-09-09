import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Icon from "../common/Icon";

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex flex-col justify-between p-7 rounded-lg border border-hairline bg-white hover:border-ink/20 transition-colors duration-200 h-full"
    >
      <div>
        <div className="inline-flex items-center justify-center w-11 h-11 rounded bg-signal/10 text-signal">
          <Icon name={service.icon} />
        </div>
        <h3 className="mt-5 text-xl font-display font-semibold text-ink">{service.shortName}</h3>
        <p className="mt-2.5 text-muted leading-relaxed">{service.summary}</p>
      </div>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-signal transition-colors">
        Learn more
        <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
