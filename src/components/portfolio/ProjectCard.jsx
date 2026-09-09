import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "../common/Badge";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/work/${project.slug}`} className="group flex flex-col h-full">
      <div
        className="relative aspect-[4/3] rounded-lg overflow-hidden flex items-end p-6"
        style={{ backgroundColor: project.color }}
      >
        <span className="text-paper/90 font-display text-2xl font-semibold">{project.name}</span>
        <span
          className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-paper/15 text-paper opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-hidden="true"
        >
          <ArrowUpRight size={16} />
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-ink font-medium">{project.tagline}</p>
          <p className="mt-1 text-sm text-muted">{project.category}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </Link>
  );
}
