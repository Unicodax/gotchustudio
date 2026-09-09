export const routes = {
  home: "/",
  services: "/services",
  serviceDetail: (slug = ":slug") => `/services/${slug}`,
  work: "/work",
  caseStudy: (slug = ":slug") => `/work/${slug}`,
  about: "/about",
  process: "/process",
  contact: "/contact",
};
