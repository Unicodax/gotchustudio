import { useMemo, useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import SEO from "../components/layout/SEO";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import ProjectFilter from "../components/portfolio/ProjectFilter";
import ProjectGrid from "../components/portfolio/ProjectGrid";
import CTASection from "../components/home/CTASection";
import { projects, categories } from "../data/projects";

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <PageLayout>
      <SEO
        path="/work"
        title="Work"
        description="Concept projects across websites, e-commerce, web applications, and UI/UX — demonstrating the range of what Gotchu builds."
      />

      <section className="pt-16 pb-10 md:pt-20 md:pb-12">
        <Container>
          <SectionHeading
            level="h1"
            kicker="Work"
            title="A look at what we build"
            description="These concept projects show our range across websites, stores, and applications. Real client work will replace these as it ships."
          />
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <ProjectFilter categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />
          <ProjectGrid projects={filteredProjects} className="mt-10" />
        </Container>
      </section>

      <CTASection
        title="Want a project like these?"
        description="Every project starts with a conversation about what you're trying to achieve."
      />
    </PageLayout>
  );
}
