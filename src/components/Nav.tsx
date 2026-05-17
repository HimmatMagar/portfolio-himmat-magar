import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", id: "about", label: "about" },
  { href: "#projects", id: "projects", label: "work" },
  { href: "#contact", id: "contact", label: "contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
        <a href="#top" onClick={() => setOpen(false)} className="mono text-xs sm:text-sm font-bold text-gradient truncate">
          ~/himmat.magar
        </a>
        <nav className="hidden md:flex items-center gap-7 mono text-sm">
          {links.map((l) => {
            const isActive = activeId === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                <span className="text-primary">$</span> {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-primary to-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="mailto:himmatmagar007@gmail.com"
            className="hidden sm:inline-block mono text-xs px-3 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            hire_me()
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden mono text-xs w-10 h-10 rounded-md border border-border text-primary hover:border-primary/60 transition flex items-center justify-center"
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </div>

      <motion.div
        style={{ scaleX: progress, transformOrigin: "0% 50%" }}
        className="h-0.5 w-full bg-gradient-to-r from-primary via-accent to-primary"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur"
          >
            <nav className="px-4 py-4 flex flex-col gap-1 mono text-sm">
              {links.map((l) => {
                const isActive = activeId === l.id;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-3 rounded-md transition-colors ${
                      isActive
                        ? "text-primary bg-card/60"
                        : "text-muted-foreground hover:text-primary hover:bg-card/60"
                    }`}
                  >
                    <span className="text-primary">$</span> {l.label}
                  </a>
                );
              })}
              <a
                href="mailto:himmatmagar007@gmail.com"
                onClick={() => setOpen(false)}
                className="mt-2 mono text-xs px-3 py-3 rounded-md bg-primary text-primary-foreground text-center hover:opacity-90 transition"
              >
                hire_me()
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
