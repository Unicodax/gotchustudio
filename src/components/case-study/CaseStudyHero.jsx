import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Container from "../common/Container";
import { Tag } from "../common/Badge";

export default function CaseStudyHero({ project }) {
  return (
    <section className="pt-16 pb-10 md:pt-20 md:pb-14">
      <Container>
        <Link to="/work" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors">
          <ArrowLeft size={15} aria-hidden="true" />
          All work
        </Link>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-end">
          <div>
            <span className="text-sm font-medium text-signal">{project.category}</span>
            <h1 className="mt-3 text-display-lg font-display font-semibold text-ink text-balance">{project.name}</h1>
            <p className="mt-4 text-lg text-muted max-w-xl leading-relaxed">{project.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {project.technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>

        <div
          className="mt-10 aspect-[16/8] rounded-lg"
          style={{ backgroundColor: project.color }}
          role="img"
          aria-label={`${project.name} project cover`}
        />
      </Container>
    </section>
  );
}
