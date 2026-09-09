import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ServiceGrid from "../services/ServiceGrid";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import { services } from "../../data/services";

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="What we do"
            title="One team for the whole build"
            description="From the first line of copy to the last pixel of the checkout flow — we cover the parts of a digital project that usually take three different agencies."
          />
        </Reveal>

        <ServiceGrid services={services} className="mt-12" />

        <Reveal className="mt-10">
          <Button to="/services" variant="ghost">
            View all services
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
