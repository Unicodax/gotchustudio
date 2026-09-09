import Container from "../common/Container";
import Reveal from "../common/Reveal";

export default function CaseStudyResults({ project }) {
  return (
    <section className="pb-16 md:pb-20">
      <Container>
        <Reveal className="rounded-lg bg-ink text-paper p-8 md:p-12">
          <h2 className="text-sm font-medium text-paper/50">Results</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {project.results.map((result) => (
              <div key={result.label}>
                <span className="text-4xl font-display font-semibold text-paper">{result.value}</span>
                <p className="mt-2 text-paper/60">{result.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
