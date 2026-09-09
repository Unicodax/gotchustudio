import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import Reveal from "../common/Reveal";

export default function CTASection({
  title = "Have a project in mind? We've Gotchu.",
  description = "Tell us what you're building and we'll get back to you within one business day.",
  buttonLabel = "Start Your Project",
  buttonTo = "/contact",
}) {
  return (
    <section className="py-20 md:py-28 bg-ink text-paper">
      <Container className="flex flex-col items-start gap-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-display-lg font-display font-semibold text-balance">{title}</h2>
          <p className="mt-4 text-lg text-paper/70 leading-relaxed">{description}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <Button to={buttonTo} variant="primary" size="lg">
            {buttonLabel}
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
