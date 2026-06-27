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

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 18,
      mass: 0.6,
    },
  },
};

const promptSkills = [
  "Chain-of-thought design",
  "Few-shot prompting",
  "Structured outputs (JSON schema)",
  "RAG context shaping",
  "Eval-driven iteration",
  "Agentic workflows",
];

export function Stack() {
  return (
    <Section id="stack" command="ls ./stack" title="The Toolbox">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mb-10 p-6 rounded-lg border border-border bg-card/60 backdrop-blur"
      >
        <div className="mono text-xs text-primary mb-2">// prompt engineering</div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
          Beyond training models, I design the prompts and workflows that get the
          most out of LLMs — turning fuzzy requirements into reliable, structured
          behavior through careful context engineering and evaluation loops.
        </p>
        <div className="flex flex-wrap gap-2">
          {promptSkills.map((skill) => (
            <span
              key={skill}
              className="mono text-xs px-3 py-1 rounded-full border border-border bg-background/60 text-foreground/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {stack.map((item, i) => (
          <motion.div
            key={item.name}
            variants={cardVariants}
            whileHover={{
              y: -6,
              scale: 1.02,
              transition: { type: "spring" as const, stiffness: 300, damping: 20 },
            }}
            className="group relative p-5 rounded-lg border border-border bg-card/60 backdrop-blur hover:border-primary/60 transition-colors overflow-hidden cursor-default"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />
            <div className="relative">
              <div className="mono text-xs text-primary mb-2">{String(i + 1).padStart(2, "0")}</div>
              <div className="text-lg font-semibold">{item.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
