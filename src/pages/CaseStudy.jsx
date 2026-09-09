import { useParams, Navigate } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import SEO from "../components/layout/SEO";
import CaseStudyHero from "../components/case-study/CaseStudyHero";
import CaseStudyOverview from "../components/case-study/CaseStudyOverview";
import CaseStudySection from "../components/case-study/CaseStudySection";
import CaseStudyResults from "../components/case-study/CaseStudyResults";
import CaseStudyGallery from "../components/case-study/CaseStudyGallery";
import CTASection from "../components/home/CTASection";
import { getProjectBySlug } from "../data/projects";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <PageLayout>
      <SEO path={`/work/${project.slug}`} title={project.name} description={project.description} />

      <CaseStudyHero project={project} />
      <CaseStudyOverview project={project} />
      <CaseStudySection number="01" title="The challenge">
        {project.challenge}
      </CaseStudySection>
      <CaseStudySection number="02" title="Our approach">
        {project.approach}
      </CaseStudySection>
      <CaseStudySection number="03" title="The solution">
        {project.solution}
      </CaseStudySection>
      <CaseStudyResults project={project} />
      <CaseStudyGallery project={project} />
      <CTASection
        title="Want to see what we'd build for you?"
        description="Every project starts with understanding what you actually need — let's talk about yours."
      />
    </PageLayout>
  );
}
