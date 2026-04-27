import { motion } from "framer-motion";
import { Section } from "./Section";

const links = [
  { label: "Email", value: "himmatmagar007@gmail.com", href: "mailto:himmatmagar007@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/himmat-magar", href: "https://www.linkedin.com/in/himmat-magar" },
  { label: "GitHub", value: "github.com/HimmatMagar", href: "https://github.com/HimmatMagar" },
];

export function Contact() {
  return (
    <Section id="contact" command="./connect.sh" title="Let's Build Something">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-primary/30 bg-card/70 backdrop-blur p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed relative">
          Open to <span className="text-primary">internships</span> and{" "}
          <span className="text-primary">entry-level ML engineering</span> roles.
          Nepal-based, remote-friendly. If your team ships intelligent products
          and needs someone hungry to contribute — let's talk.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 relative">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="block p-5 rounded-lg border border-border bg-background/60 hover:border-primary hover:glow transition-all group"
            >
              <div className="mono text-xs text-primary mb-1">{l.label.toLowerCase()}</div>
              <div className="text-sm font-medium break-all group-hover:text-primary transition-colors">
                {l.value}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div className="mt-16 text-center mono text-xs text-muted-foreground">
        <span className="text-primary">$</span> echo "built with conviction · {new Date().getFullYear()}"
      </div>
    </Section>
  );
}
