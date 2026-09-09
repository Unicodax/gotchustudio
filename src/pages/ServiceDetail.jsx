import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import SEO from "../components/layout/SEO";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";
import Reveal from "../components/common/Reveal";
import ServiceFeature from "../components/services/ServiceFeature";
import CTASection from "../components/home/CTASection";
import { services, getServiceBySlug } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <PageLayout>
      <SEO path={`/services/${service.slug}`} title={service.name} description={service.summary} />

      <section className="pt-16 pb-14 md:pt-20 md:pb-16">
        <Container>
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors">
            <ArrowLeft size={15} aria-hidden="true" />
            All services
          </Link>

          <div className="mt-8 flex items-start gap-5">
            <div className="hidden sm:inline-flex items-center justify-center w-14 h-14 rounded bg-signal/10 text-signal shrink-0">
              <Icon name={service.icon} size={26} />
            </div>
            <div>
              <h1 className="text-display-md font-display font-semibold text-ink text-balance">{service.name}</h1>
              <p className="mt-4 text-lg text-muted max-w-2xl leading-relaxed">{service.description}</p>
            </div>
          </div>

          <div className="mt-9">
            <Button to="/contact" variant="primary" size="lg">
              {service.cta}
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 pt-12 border-t border-hairline">
            <Reveal>
              <ServiceFeature title="Why it matters" items={service.benefits} />
            </Reveal>
            <Reveal delay={0.06}>
              <ServiceFeature title="What's included" items={service.included} />
            </Reveal>
            <Reveal delay={0.12}>
              <ServiceFeature title="Typical use cases" items={service.useCases} variant="dot" />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <h2 className="text-2xl font-display font-semibold text-ink">Other services</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="group p-6 rounded-lg border border-hairline hover:border-ink/20 transition-colors"
              >
                <Icon name={item.icon} className="text-signal" />
                <h3 className="mt-4 font-display font-semibold text-ink">{item.shortName}</h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted group-hover:text-signal transition-colors">
                  Learn more
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </PageLayout>
  );
}
