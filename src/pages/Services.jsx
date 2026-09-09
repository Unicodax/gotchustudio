import { ArrowRight } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import SEO from "../components/layout/SEO";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";
import Reveal from "../components/common/Reveal";
import CTASection from "../components/home/CTASection";
import { services } from "../data/services";

export default function Services() {
  return (
    <PageLayout>
      <SEO
        path="/services"
        title="Services"
        description="Website design, UI/UX design, e-commerce development, web applications, SEO & performance, and ongoing support — everything a digital project needs."
      />

      <section className="pt-16 pb-14 md:pt-20 md:pb-16">
        <Container>
          <SectionHeading
            level="h1"
            kicker="Services"
            title="Everything your digital project needs"
            description="Six services, one team. We scope projects around what they actually require, and bring in exactly the disciplines needed — no more, no less."
          />
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="flex flex-col divide-y divide-hairline border-t border-hairline">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={Math.min(index * 0.04, 0.16)}>
                <article className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-12 items-start py-12">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-signal/10 text-signal shrink-0">
                    <Icon name={service.icon} size={24} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-semibold text-ink">{service.name}</h2>
                    <p className="mt-3 text-muted leading-relaxed max-w-2xl">{service.description}</p>

                    <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
                      {service.benefits.slice(0, 3).map((benefit) => (
                        <li key={benefit} className="text-sm text-ink/70 before:content-['—'] before:mr-2 before:text-signal">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:pt-1">
                    <Button to={`/services/${service.slug}`} variant="ghost" className="whitespace-nowrap">
                      Learn more
                      <ArrowRight size={16} aria-hidden="true" />
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Not sure which service you need?"
        description="Tell us what you're trying to build and we'll help you figure out the right scope."
        buttonLabel="Talk to Us"
      />
    </PageLayout>
  );
}
