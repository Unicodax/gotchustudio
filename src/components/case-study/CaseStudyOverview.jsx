import Container from "../common/Container";

export default function CaseStudyOverview({ project }) {
  return (
    <section className="pb-16 md:pb-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-10 border-y border-hairline">
          <div>
            <h2 className="text-sm font-medium text-muted">Overview</h2>
            <p className="mt-3 text-ink leading-relaxed">{project.overview}</p>
          </div>
          <div>
            <h2 className="text-sm font-medium text-muted">Services</h2>
            <ul className="mt-3 flex flex-col gap-1.5">
              {project.services.map((service) => (
                <li key={service} className="text-ink">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-medium text-muted">Technologies</h2>
            <ul className="mt-3 flex flex-col gap-1.5">
              {project.technologies.map((tech) => (
                <li key={tech} className="text-ink">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
