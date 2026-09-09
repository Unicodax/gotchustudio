import Container from "../common/Container";
import Reveal from "../common/Reveal";

export default function CaseStudySection({ number, title, children }) {
  return (
    <section className="pb-16 md:pb-20">
      <Container>
        <Reveal className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 md:gap-12">
          <span className="text-sm font-medium text-signal">{number}</span>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-display font-semibold text-ink">{title}</h2>
            <p className="mt-4 text-muted leading-relaxed text-lg">{children}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
