import { Compass, Layers, Cpu, Smartphone, Gauge, LifeBuoy } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

const reasons = [
  {
    icon: Compass,
    title: "Strategy-first approach",
    description: "We start with your goals and your users, not a template — every decision traces back to a reason.",
  },
  {
    icon: Layers,
    title: "Custom-built solutions",
    description: "No page builders or drag-and-drop themes. Every project is coded around what your business actually needs.",
  },
  {
    icon: Cpu,
    title: "Modern technology",
    description: "React, TypeScript, and a component-driven front end that stays maintainable as your project grows.",
  },
  {
    icon: Smartphone,
    title: "Responsive by default",
    description: "Every layout is designed for mobile, tablet, and desktop from day one — not shrunk down after the fact.",
  },
  {
    icon: Gauge,
    title: "Performance focused",
    description: "Fast load times and clean code, checked with real performance tools before launch, not left to chance.",
  },
  {
    icon: LifeBuoy,
    title: "Long-term support",
    description: "We're still here after launch — for updates, fixes, and the next phase of your project.",
  },
];

export default function WhyGotchu() {
  return (
    <section className="py-20 md:py-28 bg-ink text-paper">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Why Gotchu"
            title="A team that treats your project like software, not a template"
            description="We've built this company around the parts most agencies skip: strategy, structure, and what happens after launch."
            light
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={Math.min(index * 0.04, 0.2)}>
              <reason.icon size={22} className="text-signal-light" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-display font-semibold">{reason.title}</h3>
              <p className="mt-2 text-paper/60 leading-relaxed">{reason.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
