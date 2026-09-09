import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "../common/Container";
import { footerLinks } from "../../data/nav";
import { company } from "../../data/company";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-12 lg:gap-8 pb-16 border-b border-paper/10">
          <div className="max-w-sm">
            <Link to="/" className="font-display text-2xl font-semibold text-paper">
              Gotchu
            </Link>
            <p className="mt-4 text-paper/60 leading-relaxed">
              {company.tagline} We design and build websites, stores, and applications for businesses that need something built properly.
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-6 inline-flex items-center gap-1.5 text-paper hover:text-signal-light transition-colors"
            >
              {company.email}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <nav aria-label="Company">
            <h3 className="text-sm font-medium text-paper/50 mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-paper/80 hover:text-paper transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="text-sm font-medium text-paper/50 mb-4">Services</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-paper/80 hover:text-paper transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8">
          <p className="text-sm text-paper/40">
            © {new Date().getFullYear()} Gotchu. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {company.social.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-paper/40 hover:text-paper transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
