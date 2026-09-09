import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import ProjectGrid from "../portfolio/ProjectGrid";
import { getFeaturedProjects } from "../../data/projects";

export default function FeaturedWork() {
  const projects = getFeaturedProjects(3);

  return (
    <section className="py-20 md:py-28 bg-paper-dim">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <SectionHeading
              kicker="Selected work"
              title="A few projects worth showing"
              description="Concept projects built to demonstrate range, from corporate sites to internal dashboards — replace these with real work as it ships."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button to="/work" variant="outline" className="shrink-0">
              View all work
            </Button>
          </Reveal>
        </div>

        <ProjectGrid projects={projects} className="mt-12" />
      </Container>
    </section>
  );
}
