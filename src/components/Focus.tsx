import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  {
    k: "01",
    title: "Production ML APIs",
    body: "Wrapping PyTorch models into clean, well-typed REST APIs with FastAPI — auth, validation, and observability included.",
  },
  {
    k: "02",
    title: "Containerized Deployments",
    body: "Docker-first workflow so models behave identically on my laptop, a teammate's machine, and a production server.",
  },
  {
    k: "03",
    title: "Fundamentals First",
    body: "I don't treat libraries as black boxes. When something breaks at 2am, I want to know exactly where to look.",
  },
  {
    k: "04",
    title: "Shipping > Theorizing",
    body: "Most students learn to train models. I'm committed to mastering the full path from notebook to production.",
  },
];

export function Focus() {
  return (
    <Section id="focus" command="cat focus.md" title="What I'm Building">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.k}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="p-7 rounded-xl border border-border bg-card/60 backdrop-blur hover:bg-card/90 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="mono text-3xl font-bold text-gradient shrink-0">{it.k}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{it.body}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
