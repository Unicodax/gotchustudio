import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const fadeUp = (delay) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section className="pt-16 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-8 items-center">
        <div>
          <motion.h1 {...fadeUp(0)} className="text-display-xl font-display font-semibold text-ink text-balance">
            Digital solutions.
            <br />
            <span className="text-signal">Gotchu.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.1)} className="mt-7 text-lg md:text-xl text-muted max-w-prose leading-relaxed">
            We design and build high-performing websites and digital experiences that help
            businesses look better, work smarter, and grow online.
          </motion.p>

          <motion.div {...fadeUp(0.2)} className="mt-9 flex flex-wrap items-center gap-4">
            <Button to="/contact" variant="primary" size="lg">
              Start a Project
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button to="/work" variant="outline" size="lg">
              View Our Work
            </Button>
          </motion.div>

          <motion.p {...fadeUp(0.3)} className="mt-10 text-sm text-muted-light">
            Websites, online stores, and web applications — built by a small team that cares
            about the details.
          </motion.p>
        </div>

        <motion.div
          {...fadeUp(0.15)}
          className="relative rounded-lg border border-hairline bg-white shadow-card aspect-[4/3.4] overflow-hidden"
          aria-hidden="true"
        >
          <div className="flex items-center gap-1.5 px-4 h-9 border-b border-hairline">
            <span className="w-2.5 h-2.5 rounded-full bg-hairline" />
            <span className="w-2.5 h-2.5 rounded-full bg-hairline" />
            <span className="w-2.5 h-2.5 rounded-full bg-hairline" />
          </div>
          <div className="p-6 flex flex-col gap-3">
            <div className="h-4 w-2/3 rounded bg-ink/10" />
            <div className="h-4 w-1/2 rounded bg-ink/10" />
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div className="h-20 rounded bg-signal/10" />
              <div className="h-20 rounded bg-ink/5" />
              <div className="h-20 rounded bg-ink/5" />
            </div>
            <div className="h-3 w-full rounded bg-ink/5 mt-3" />
            <div className="h-3 w-5/6 rounded bg-ink/5" />
            <div className="h-3 w-4/6 rounded bg-ink/5" />
            <div className="flex gap-2 mt-4">
              <div className="h-9 w-28 rounded bg-signal" />
              <div className="h-9 w-24 rounded border border-ink/15" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
