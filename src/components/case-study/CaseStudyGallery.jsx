import Container from "../common/Container";
import Reveal from "../common/Reveal";

export default function CaseStudyGallery({ project }) {
  return (
    <section className="pb-20 md:pb-28">
      <Container>
        <h2 className="text-sm font-medium text-muted mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.gallery.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div
                className="aspect-[3/4] rounded-lg"
                style={{ backgroundColor: `${project.color}1A`, border: `1px solid ${project.color}33` }}
                role="img"
                aria-label={`${project.name} interface preview ${index + 1}`}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
