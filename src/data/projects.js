// NOTE: These are concept projects created to demonstrate Gotchu's process
// and range. They are not real client work. Replace each entry's content
// and images with real case studies as they become available — the shape
// of this data is what pages/components consume, so no component changes
// should be needed.

export const categories = ["All", "Websites", "E-Commerce", "Web Apps", "UI/UX"];

export const projects = [
  {
    slug: "aldergate-partners",
    name: "Aldergate Partners",
    category: "Websites",
    tagline: "A corporate site for a private investment firm",
    description:
      "A restrained, credibility-first website for a fictional investment partnership — built around long-form content and a partner directory.",
    services: ["Website Design & Development", "SEO & Performance"],
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    color: "#1E2029",
    overview:
      "Aldergate Partners needed a site that read as established and trustworthy without leaning on financial-industry clichés — no stock photos of handshakes, no stormy stock skylines.",
    challenge:
      "The existing concept site looked like every other advisory firm online: generic, templated, and forgettable. The brief called for something that felt considered and specific, with a heavy amount of regulatory and biographical content to organise clearly.",
    approach:
      "We built an editorial layout with a strong type hierarchy, letting long-form text breathe with generous line-length and spacing rather than compressing it into cards. Partner bios got a dedicated, consistent template.",
    solution:
      "A componentised React front end with a document-style reading experience for insights content, and a searchable partner directory built for a future CMS connection.",
    results: [
      { label: "Concept load time", value: "0.9s" },
      { label: "Lighthouse performance", value: "98" },
      { label: "Pages templated", value: "6" },
    ],
    gallery: [1, 2, 3],
  },
  {
    slug: "field-and-form",
    name: "Field & Form",
    category: "E-Commerce",
    tagline: "An online store for a home goods brand",
    description:
      "A concept storefront for an independent home goods brand, designed to make a small catalogue feel considered rather than sparse.",
    services: ["E-Commerce Development", "UI/UX Design"],
    technologies: ["React", "Tailwind CSS", "Figma"],
    color: "#3546F0",
    overview:
      "Field & Form is a concept brand with a small, seasonal product catalogue. The challenge was making twenty products feel intentional rather than like an empty store.",
    challenge:
      "Small catalogues often look unfinished on typical e-commerce templates built for thousands of SKUs. The store needed a layout that felt full and editorial at a small scale.",
    approach:
      "We designed a magazine-style product grid with generous product photography, and a streamlined three-step checkout flow with clear progress indication throughout.",
    solution:
      "A React storefront front end with a modular product page template, a cart drawer for uninterrupted browsing, and a checkout UI built ready for payment gateway integration.",
    results: [
      { label: "Checkout steps", value: "3" },
      { label: "Concept load time", value: "1.1s" },
      { label: "Mobile conversion focus", value: "First" },
    ],
    gallery: [1, 2, 3],
  },
  {
    slug: "orbital-dashboard",
    name: "Orbital",
    category: "Web Apps",
    tagline: "An operations dashboard for logistics teams",
    description:
      "A concept internal dashboard for tracking shipments and fleet status, designed for teams staring at it for hours a day.",
    services: ["Web Applications", "UI/UX Design"],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    color: "#14161C",
    overview:
      "Orbital is a concept logistics dashboard built to explore what a genuinely usable, all-day operations tool looks like — calm, legible, and fast to scan.",
    challenge:
      "Dashboards are frequently overloaded with data and colour. The goal was an interface that surfaced exceptions and priorities first, and let operators drill in only when needed.",
    approach:
      "We prioritised a strict visual hierarchy — one accent colour reserved for alerts only — and designed dense data tables with careful spacing so they stayed legible at a glance.",
    solution:
      "A component-driven React dashboard with a reusable table system, status badges, and a layout structure ready for role-based access when authentication is added.",
    results: [
      { label: "Core components built", value: "24" },
      { label: "Table density options", value: "3" },
      { label: "Built for daily use", value: "Yes" },
    ],
    gallery: [1, 2, 3],
  },
  {
    slug: "harborline-studio",
    name: "Harborline Studio",
    category: "UI/UX",
    tagline: "A design system for a creative studio's product suite",
    description:
      "A concept design system and component library built for a small studio managing three related products.",
    services: ["UI/UX Design"],
    technologies: ["Figma", "React", "Tailwind CSS"],
    color: "#17B26A",
    overview:
      "Harborline runs three small tools with three inconsistent interfaces. This concept explores unifying them under one design system without erasing their individual character.",
    challenge:
      "Each product had grown its own visual language over time. Unifying them needed to reduce inconsistency without making every tool feel identical and generic.",
    approach:
      "We built a shared foundation — type scale, spacing, colour, and core components — with room for each product to express itself through accent colour and imagery.",
    solution:
      "A documented Figma design system paired with a matching React component library, so design and code stay in sync as the product suite grows.",
    results: [
      { label: "Shared components", value: "32" },
      { label: "Products unified", value: "3" },
      { label: "Design tokens defined", value: "40+" },
    ],
    gallery: [1, 2, 3],
  },
  {
    slug: "keystone-clinic",
    name: "Keystone Clinic",
    category: "Websites",
    tagline: "A booking-first website for a healthcare practice",
    description:
      "A concept clinic website built around one job: getting a visitor to book an appointment with as little friction as possible.",
    services: ["Website Design & Development", "SEO & Performance"],
    technologies: ["React", "Tailwind CSS"],
    color: "#3546F0",
    overview:
      "Keystone Clinic is a concept multi-practitioner healthcare site where the primary goal was appointment bookings, not brand storytelling.",
    challenge:
      "Healthcare sites often bury the booking action under service descriptions and staff bios. The concept needed booking accessible from every page without feeling pushy.",
    approach:
      "We kept a persistent, calm booking CTA in the navigation, and restructured service pages so the practical information (what to expect, how to book) came before marketing copy.",
    solution:
      "A fast, accessible React front end with a service-detail template ready to connect to a real booking API, and clear, jargon-free content throughout.",
    results: [
      { label: "Accessibility target", value: "WCAG AA" },
      { label: "Booking CTA visibility", value: "Every page" },
      { label: "Concept load time", value: "0.8s" },
    ],
    gallery: [1, 2, 3],
  },
  {
    slug: "portside-market",
    name: "Portside Market",
    category: "E-Commerce",
    tagline: "A multi-vendor marketplace concept",
    description:
      "A concept marketplace front end exploring how to present many vendors' products under one consistent shopping experience.",
    services: ["E-Commerce Development", "Web Applications"],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    color: "#1E2029",
    overview:
      "Portside Market is a concept marketplace bringing together independent food vendors. The interface needed to feel unified while still letting each vendor stand out.",
    challenge:
      "Marketplaces risk feeling chaotic when every vendor's products look different. The concept needed a consistent shopping shell around varied product content.",
    approach:
      "We standardised the product card, filter, and vendor-page templates, while giving each vendor a header banner and short story section for identity.",
    solution:
      "A scalable catalogue and vendor-page structure built in React, with filtering and sorting handled entirely on the front end, ready for a real product API later.",
    results: [
      { label: "Vendor pages templated", value: "1 reusable" },
      { label: "Filter categories", value: "6" },
      { label: "Concept load time", value: "1.0s" },
    ],
    gallery: [1, 2, 3],
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
export const getFeaturedProjects = (count = 3) => projects.slice(0, count);
