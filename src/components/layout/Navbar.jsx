import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../../data/nav";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-paper/90 backdrop-blur-md border-b border-hairline" : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between h-20">
        <NavLink to="/" className="font-display text-xl font-semibold text-ink tracking-tight" aria-label="Gotchu — home">
          Gotchu
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-[15px] font-medium transition-colors duration-200 ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" variant="primary" size="md">
            Start a Project
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-ink"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          <Menu size={24} aria-hidden="true" />
        </button>
      </Container>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
