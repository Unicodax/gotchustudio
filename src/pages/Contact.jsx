import { useState } from "react";
import { Mail } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import SEO from "../components/layout/SEO";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import FormField from "../components/forms/FormField";
import Select from "../components/forms/Select";
import FormStatus from "../components/forms/FormStatus";
import { validateContactForm } from "../utils/validation";
import { services } from "../data/services";
import { company } from "../data/company";

const PROJECT_TYPES = [...services.map((s) => s.shortName), "Something else"];
const BUDGET_RANGES = ["Under £3,000", "£3,000 – £8,000", "£8,000 – £20,000", "£20,000+", "Not sure yet"];
const TIMELINES = ["Within a month", "1–3 months", "3–6 months", "No fixed deadline"];

const initialValues = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  description: "",
};

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(event) {
    const { name } = event.target;
    const fieldErrors = validateContactForm(values);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Frontend-only for now. When a backend is connected, this is the
    // single place to send `values` to an API endpoint, e.g.:
    // await fetch("/api/enquiries", { method: "POST", body: JSON.stringify(values) });
    setIsSubmitted(true);
  }

  function handleReset() {
    setValues(initialValues);
    setErrors({});
    setIsSubmitted(false);
  }

  return (
    <PageLayout>
      <SEO
        path="/contact"
        title="Contact"
        description="Tell Gotchu about your project — website, e-commerce store, or web application — and we'll get back to you within one business day."
      />

      <section className="pt-16 pb-14 md:pt-20 md:pb-16">
        <Container>
          <SectionHeading
            level="h1"
            kicker="Contact"
            title="Let's Build Something"
            description="Tell us a bit about what you're working on. The more detail you give us, the faster we can put together a useful response."
          />
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">
          <div>
            <h2 className="text-lg font-display font-semibold text-ink">Prefer email?</h2>
            <a
              href={`mailto:${company.email}`}
              className="mt-3 inline-flex items-center gap-2 text-signal hover:text-signal-dark transition-colors"
            >
              <Mail size={17} aria-hidden="true" />
              {company.email}
            </a>
            <p className="mt-6 text-muted leading-relaxed max-w-sm">
              We reply to every enquiry within one business day. If your project has a hard
              deadline, mention it in the form and we'll prioritise accordingly.
            </p>
          </div>

          <div>
            {isSubmitted ? (
              <FormStatus onReset={handleReset} />
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    label="Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name}
                    required
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    required
                  />
                </div>

                <FormField
                  label="Company"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.company}
                  placeholder="Optional"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Select
                    label="Project type"
                    name="projectType"
                    value={values.projectType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    options={PROJECT_TYPES}
                    error={errors.projectType}
                    placeholder="Select a project type"
                    required
                  />
                  <Select
                    label="Budget range"
                    name="budget"
                    value={values.budget}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    options={BUDGET_RANGES}
                    error={errors.budget}
                    placeholder="Select a budget range"
                    required
                  />
                </div>

                <Select
                  label="Project timeline"
                  name="timeline"
                  value={values.timeline}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  options={TIMELINES}
                  error={errors.timeline}
                  placeholder="Select a timeline"
                  required
                />

                <FormField
                  label="Project description"
                  name="description"
                  as="textarea"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.description}
                  placeholder="What are you trying to build? Include any relevant links or context."
                  required
                />

                <Button type="submit" variant="primary" size="lg" className="self-start">
                  Let's Build Something
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
