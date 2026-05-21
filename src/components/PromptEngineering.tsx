import { motion } from "framer-motion";
import { Section } from "./Section";

const skills = [
  "Chain-of-Thought & ReAct Design",
  "Few-Shot & Zero-Shot Prompting",
  "System & Role Prompting",
  "Prompt Chaining & Pipelines",
  "Output Parsing & Structured Generation",
  "LLM Evaluation & A/B Testing",
  "Context Window Optimization",
  "Tool-Use & Function Calling",
];

const skillVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
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

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.06,
    },
  },
};

export function PromptEngineering() {
  return (
    <Section id="prompt-engineering" command="cat prompt_engineering.md" title="Prompt Engineering">
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Beyond training models, I design prompts that make LLMs reliable and useful in production. I treat prompt engineering as a systems problem — combining reasoning patterns, structured outputs, and evaluation loops to build AI features that actually work.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From crafting few-shot examples that generalize to chaining multi-step reasoning pipelines, I focus on consistency and measurability. Every prompt is versioned, tested, and optimized against real user tasks.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={skillVariants}
              whileHover={{
                y: -4,
                scale: 1.03,
                transition: { type: "spring" as const, stiffness: 300, damping: 20 },
              }}
              className="group relative flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-card/60 backdrop-blur hover:border-primary/60 transition-colors overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />
              <span className="relative mono text-xs text-primary shrink-0">▸</span>
              <span className="relative text-sm font-medium">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
