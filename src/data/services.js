export const services = [
  {
    slug: "web-development",
    name: "Website Design & Development",
    shortName: "Web Development",
    icon: "Layout",
    summary:
      "Business, corporate, and portfolio websites built to load fast, read clearly, and hold up as your company grows.",
    description:
      "We design and build custom websites from the ground up — no page builders, no bloated templates. Every site is coded by hand around your content and your goals, so it stays fast, flexible, and genuinely yours.",
    benefits: [
      "A site built around your content, not a template's limitations",
      "Fast load times that hold up as pages and traffic grow",
      "A responsive foundation that works from a 320px phone to a 4K monitor",
      "Clean, documented code your next developer can actually work with",
    ],
    included: [
      "Custom design in Figma before a line of code is written",
      "Hand-coded React front end, componentised for future pages",
      "Responsive layouts for mobile, tablet, and desktop",
      "On-page SEO structure and semantic HTML",
      "Cross-browser and device testing",
      "Launch support and a short handover walkthrough",
    ],
    useCases: [
      "A company outgrowing its current website",
      "A new business that needs a credible first impression",
      "A landing page for a specific product or campaign",
      "A portfolio for a studio, consultancy, or freelancer",
    ],
    cta: "Start your website project",
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    shortName: "UI/UX Design",
    icon: "PenTool",
    summary:
      "Interfaces built around how people actually use software — researched, wireframed, and tested before a single pixel is final.",
    description:
      "Good design is invisible when it works and expensive when it doesn't. We research how your users think, map their journey, and design interfaces that get out of their way — backed by wireframes and prototypes you can test before development starts.",
    benefits: [
      "Fewer expensive changes late in development",
      "Interfaces designed around real user behaviour, not guesses",
      "A design system that keeps every screen consistent",
      "Prototypes you can put in front of real users before we build",
    ],
    included: [
      "User research and competitor review",
      "Information architecture and user flows",
      "Low-fidelity wireframes",
      "High-fidelity UI design in Figma",
      "Interactive prototypes for testing",
      "A reusable design system (components, type, colour, spacing)",
    ],
    useCases: [
      "A product that needs a usability overhaul",
      "A new app or platform being designed from scratch",
      "A design system to standardise a growing product",
      "Validating a concept before committing to development",
    ],
    cta: "Start your design project",
  },
  {
    slug: "ecommerce",
    name: "E-Commerce Development",
    shortName: "E-Commerce",
    icon: "ShoppingBag",
    summary:
      "Online stores, product catalogues, and checkout flows designed to convert browsers into buyers.",
    description:
      "We build the front end of stores that make buying easy — clear product pages, a checkout with no unnecessary friction, and a catalogue structure that scales past ten products or ten thousand. The interface is built ready for your payment and inventory systems to plug in.",
    benefits: [
      "Checkout flows designed to reduce drop-off",
      "Product and catalogue pages that scale with your inventory",
      "A front end built ready for payment gateway integration",
      "Fast, mobile-first shopping experiences",
    ],
    included: [
      "Store and catalogue UX design",
      "Product listing and product detail page templates",
      "Cart and multi-step checkout interface",
      "Payment-integration-ready front-end structure",
      "Mobile-first responsive shopping experience",
      "Performance optimisation for image-heavy catalogues",
    ],
    useCases: [
      "A brand launching its first online store",
      "A store migrating off a restrictive platform",
      "A product catalogue that needs a redesign",
      "A checkout flow that's losing customers",
    ],
    cta: "Start your store project",
  },
  {
    slug: "web-applications",
    name: "Web Applications",
    shortName: "Web Applications",
    icon: "LayoutDashboard",
    summary:
      "Customer portals, dashboards, booking systems, and admin tools — built as real software, not a marketing site.",
    description:
      "Applications are different from websites: they need state, structure, and interfaces people will use every day. We architect the front end properly from day one — reusable components, clear data flow, and a UI built to stay usable as features get added.",
    benefits: [
      "An architecture that scales as features are added",
      "Interfaces designed for repeat, daily use",
      "Components built to connect cleanly to your API later",
      "Dashboards that surface what matters, not everything at once",
    ],
    included: [
      "Application UX design and information architecture",
      "Component-driven React front end",
      "Dashboard, table, and form interface design",
      "Role-aware layout structure, ready for authentication later",
      "State management appropriate to the application's complexity",
      "Documentation for handover to a backend team",
    ],
    useCases: [
      "A customer portal for account or order management",
      "An internal dashboard for operations or reporting",
      "A booking or scheduling system",
      "An admin panel for managing content or users",
    ],
    cta: "Start your application project",
  },
  {
    slug: "seo-performance",
    name: "SEO & Performance",
    shortName: "SEO & Performance",
    icon: "Gauge",
    summary:
      "Technical SEO and speed work that makes your site easier to find and faster to use.",
    description:
      "A beautiful site that loads slowly or can't be found isn't doing its job. We audit and rebuild the technical foundation — markup, load performance, mobile behaviour, and site structure — so search engines and visitors both have an easier time.",
    benefits: [
      "Faster load times, especially on mobile connections",
      "Cleaner markup that's easier for search engines to index",
      "A site structure built for organic discovery",
      "Higher-converting pages through targeted UX fixes",
    ],
    included: [
      "Technical SEO audit",
      "Core Web Vitals and page-speed optimisation",
      "Semantic HTML and heading-structure review",
      "Mobile usability optimisation",
      "Image and asset optimisation",
      "Conversion-focused UX recommendations",
    ],
    useCases: [
      "A site with strong content but poor search visibility",
      "A slow site losing visitors before it loads",
      "A mobile experience that needs attention",
      "A redesign that needs to protect existing rankings",
    ],
    cta: "Start your SEO project",
  },
  {
    slug: "maintenance",
    name: "Website Maintenance & Support",
    shortName: "Maintenance & Support",
    icon: "Wrench",
    summary:
      "Ongoing updates, fixes, and improvements so your site keeps working as well as the day it launched.",
    description:
      "Launch is the beginning, not the end. We keep sites updated, fast, and working properly — fixing issues before they become visible, and making small improvements as your business changes.",
    benefits: [
      "One team that already knows your codebase",
      "Issues fixed before customers notice them",
      "A site that keeps pace with your business, not just its launch date",
      "Predictable, ongoing support instead of one-off emergencies",
    ],
    included: [
      "Regular website health checks",
      "Bug fixes and browser-compatibility updates",
      "Performance monitoring and improvements",
      "Frontend security-related updates",
      "Content and layout updates",
      "Priority support for urgent issues",
    ],
    useCases: [
      "A site with no current developer to maintain it",
      "A business that needs regular small updates",
      "A site showing its age after a few years",
      "Ongoing partnership after a Gotchu launch",
    ],
    cta: "Talk to us about support",
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
