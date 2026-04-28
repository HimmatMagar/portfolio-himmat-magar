import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "about" },
  { href: "#stack", label: "stack" },
  { href: "#projects", label: "projects" },
  { href: "#focus", label: "focus" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="mono text-sm font-bold text-gradient">
          ~/himmat.magar
        </a>
        <nav className="hidden md:flex items-center gap-7 mono text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary">$</span> {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:himmatmagar007@gmail.com"
          className="mono text-xs px-3 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
        >
          hire_me()
        </a>
      </div>
    </motion.header>
  );
}
