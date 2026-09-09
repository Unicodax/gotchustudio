import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import { process } from "../../data/process";

export default function ProcessPreview() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="How we work"
            title="A process built like software, not guesswork"
            description="Seven stages, from first conversation to ongoing support — the same structure whether the project takes three weeks or three months."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline rounded-lg overflow-hidden">
          {process.map((step, index) => (
            <Reveal key={step.number} delay={Math.min(index * 0.04, 0.24)} className="bg-paper p-7">
              <span className="text-sm font-medium text-signal">{step.number}</span>
              <h3 className="mt-3 text-lg font-display font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-muted leading-relaxed">{step.short}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Button to="/process" variant="ghost">
            See the full process
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
