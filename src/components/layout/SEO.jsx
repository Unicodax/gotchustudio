import { useEffect } from "react";
import { buildSEO } from "../../config/seo";

function setMetaTag(attr, key, content) {
  let element = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function SEO({ title, description, path, image }) {
  useEffect(() => {
    const seo = buildSEO({ title, description, path, image });

    document.title = seo.title;
    setMetaTag("name", "description", seo.description);
    setMetaTag("property", "og:title", seo.title);
    setMetaTag("property", "og:description", seo.description);
    setMetaTag("property", "og:url", seo.url);
    setMetaTag("property", "og:image", seo.image);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", seo.siteName);
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", seo.title);
    setMetaTag("name", "twitter:description", seo.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", seo.url);
  }, [title, description, path, image]);

  return null;
}
