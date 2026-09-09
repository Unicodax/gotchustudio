const SITE_NAME = "Gotchu";
const BASE_URL = "https://gotchu.dev";

export const defaultSEO = {
  title: "Gotchu — Web & Software Development",
  description:
    "Gotchu designs and builds high-performing websites, e-commerce stores, and web applications. Whatever your digital project needs, Gotchu.",
  image: `${BASE_URL}/og-default.jpg`,
};

export function buildSEO({ title, description, path = "/", image }) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : defaultSEO.title;
  return {
    title: fullTitle,
    description: description || defaultSEO.description,
    url: `${BASE_URL}${path}`,
    image: image || defaultSEO.image,
    siteName: SITE_NAME,
  };
}
