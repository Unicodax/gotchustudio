import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../common/Button";
import { navLinks } from "../../data/nav";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function MobileMenu({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] bg-ink lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? {} : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between h-20 px-6">
            <span className="font-display text-xl font-semibold text-paper">Gotchu</span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center w-11 h-11 -mr-2 text-paper"
              aria-label="Close menu"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-6 mt-6" aria-label="Mobile primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  `py-4 text-3xl font-display font-medium border-b border-paper/10 ${
                    isActive ? "text-paper" : "text-paper/60"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="px-6 mt-8">
            <Button to="/contact" variant="primary" size="lg" onClick={onClose} className="w-full">
              Start a Project
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
