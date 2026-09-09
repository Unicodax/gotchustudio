import PageLayout from "../components/layout/PageLayout";
import SEO from "../components/layout/SEO";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyGotchu from "../components/home/WhyGotchu";
import ProcessPreview from "../components/home/ProcessPreview";
import FeaturedWork from "../components/home/FeaturedWork";
import TechStack from "../components/home/TechStack";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <PageLayout>
      <SEO
        path="/"
        title="Web & Software Development"
        description="Gotchu designs and builds high-performing websites, online stores, and web applications. Whatever your digital project needs, Gotchu."
      />
      <Hero />
      <ServicesPreview />
      <WhyGotchu />
      <ProcessPreview />
      <FeaturedWork />
      <TechStack />
      <CTASection />
    </PageLayout>
  );
}
