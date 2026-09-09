import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import { technologies } from "../../data/technologies";

export default function TechStack() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Under the hood"
            title="Built with tools made for the long term"
            description="We use technology chosen for reliability and longevity, not novelty — so what we build keeps working."
          />
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <Reveal key={tech.name} delay={Math.min(index * 0.03, 0.2)}>
              <div className="px-5 py-3 rounded border border-hairline bg-white text-ink font-medium">
                {tech.name}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
