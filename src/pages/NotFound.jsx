import PageLayout from "../components/layout/PageLayout";
import SEO from "../components/layout/SEO";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <PageLayout>
      <SEO path="/404" title="Page not found" description="The page you're looking for doesn't exist." />
      <Container className="py-32 flex flex-col items-start">
        <span className="text-signal font-display text-2xl font-semibold">404</span>
        <h1 className="mt-4 text-display-md font-display font-semibold text-ink text-balance">
          This page went missing.
        </h1>
        <p className="mt-4 text-lg text-muted max-w-md leading-relaxed">
          The page you're looking for doesn't exist, or it's moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button to="/" variant="primary" size="lg">
            Back to home
          </Button>
          <Button to="/contact" variant="outline" size="lg">
            Contact us
          </Button>
        </div>
      </Container>
    </PageLayout>
  );
}
