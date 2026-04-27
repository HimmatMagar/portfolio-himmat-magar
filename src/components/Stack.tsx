import { motion } from "framer-motion";
import { Section } from "./Section";

const stack = [
  { name: "Python", desc: "Primary language" },
  { name: "PyTorch", desc: "Deep learning framework" },
  { name: "FastAPI", desc: "Production ML APIs" },
  { name: "Docker", desc: "Containerized deployments" },
  { name: "NumPy", desc: "Numerical computing" },
  { name: "Pandas", desc: "Data wrangling" },
  { name: "MLflow", desc: "Experiment tracking" },
  { name: "DVC", desc: "Data version control" },
  { name: "GitHub", desc: "Version control & CI" },
];

export function Stack() {
  return (
    <Section id="stack" command="ls ./stack" title="The Toolbox">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stack.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative p-5 rounded-lg border border-border bg-card/60 backdrop-blur hover:border-primary/60 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all" />
            <div className="relative">
              <div className="mono text-xs text-primary mb-2">{String(i + 1).padStart(2, "0")}</div>
              <div className="text-lg font-semibold">{item.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
