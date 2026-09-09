const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values) {
  const errors = {};

  if (!values.name?.trim()) {
    errors.name = "Enter your name.";
  }

  if (!values.email?.trim()) {
    errors.email = "Enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.projectType) {
    errors.projectType = "Select a project type.";
  }

  if (!values.budget) {
    errors.budget = "Select a budget range.";
  }

  if (!values.timeline) {
    errors.timeline = "Select a timeline.";
  }

  if (!values.description?.trim()) {
    errors.description = "Tell us a little about the project.";
  } else if (values.description.trim().length < 20) {
    errors.description = "Add a few more details (at least 20 characters).";
  }

  return errors;
}
