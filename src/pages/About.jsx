import PageLayout from "../components/layout/PageLayout";
import SEO from "../components/layout/SEO";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import CTASection from "../components/home/CTASection";
import { company } from "../data/company";

export default function About() {
  return (
    <PageLayout>
      <SEO
        path="/about"
        title="About"
        description="Gotchu is a web and software development company built around strategy-first, custom-built digital work."
      />

      <section className="pt-16 pb-16 md:pt-20 md:pb-24">
        <Container>
          <h1 className="text-display-lg font-display font-semibold text-ink text-balance max-w-3xl">
            We started Gotchu because most agency websites look the same, and most agency work isn't built to last.
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
            Gotchu is a web and software development company. We design and build websites, online
            stores, and web applications for businesses that want something built properly the
            first time — not something that needs replacing in eighteen months.
          </p>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <Reveal>
              <h2 className="text-2xl font-display font-semibold text-ink">What we believe</h2>
              <p className="mt-4 text-muted leading-relaxed">
                A website is software, not decoration. It should be fast, easy to use, and built on
                a foundation that can grow with the business behind it. We don't think "good enough
                for now" is good enough — because "for now" always turns into three years.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-2xl font-display font-semibold text-ink">How we work</h2>
              <p className="mt-4 text-muted leading-relaxed">
                Every project starts with understanding the business behind it, not the visual
                trend of the year. We plan before we design, and design before we build — so
                nothing gets rebuilt three times before launch.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-ink text-paper">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Our values"
              title="What guides the work"
              light
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {company.values.map((value, index) => (
              <Reveal key={value.title} delay={Math.min(index * 0.05, 0.2)}>
                <h3 className="text-lg font-display font-semibold text-paper">{value.title}</h3>
                <p className="mt-2 text-paper/60 leading-relaxed">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Why clients choose us"
              title="Small enough to care, structured enough to deliver"
              description="You get direct access to the people building your project, backed by a process that keeps things on schedule — the best of both a freelancer and an agency, without the drawbacks of either."
            />
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </PageLayout>
  );
}
