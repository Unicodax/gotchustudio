import ProjectCard from "./ProjectCard";
import Reveal from "../common/Reveal";

export default function ProjectGrid({ projects, className = "" }) {
  if (projects.length === 0) {
    return (
      <div className="py-16 text-center border border-dashed border-hairline rounded-lg">
        <p className="text-muted">No projects in this category yet.</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 ${className}`}>
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={Math.min(index * 0.04, 0.2)}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
