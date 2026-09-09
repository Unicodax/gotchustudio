import PageLayout from "../components/layout/PageLayout";
import SEO from "../components/layout/SEO";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import CTASection from "../components/home/CTASection";
import { process } from "../data/process";

export default function Process() {
  return (
    <PageLayout>
      <SEO
        path="/process"
        title="Process"
        description="Gotchu's seven-stage development process, from discovery and strategy through design, development, testing, launch, and ongoing support."
      />

      <section className="pt-16 pb-16 md:pt-20 md:pb-24">
        <Container>
          <SectionHeading
            level="h1"
            kicker="Process"
            title="A process built like software, from the first call to launch and beyond"
            description="Every Gotchu project runs through the same seven stages. It keeps timelines honest, decisions documented, and nothing left to guesswork."
          />
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="flex flex-col">
            {process.map((step, index) => (
              <Reveal key={step.number} delay={Math.min(index * 0.04, 0.2)}>
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-12 py-10 border-t border-hairline last:border-b">
                  <span className="text-2xl font-display font-semibold text-signal">{step.number}</span>
                  <div className="max-w-2xl">
                    <h2 className="text-2xl font-display font-semibold text-ink">{step.title}</h2>
                    <p className="mt-3 text-muted leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to start at stage one?"
        description="Discovery starts with a short conversation about your business and what you're trying to build."
      />
    </PageLayout>
  );
}
