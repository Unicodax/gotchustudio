import ServiceCard from "./ServiceCard";
import Reveal from "../common/Reveal";

export default function ServiceGrid({ services, className = "" }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ${className}`}>
      {services.map((service, index) => (
        <Reveal key={service.slug} delay={Math.min(index * 0.05, 0.2)}>
          <ServiceCard service={service} />
        </Reveal>
      ))}
    </div>
  );
}
