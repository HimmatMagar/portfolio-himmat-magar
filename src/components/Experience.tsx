import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  {
    status: "now",
    title: "Deep Learning with PyTorch",
    org: "Self-directed",
    desc: "Building CNNs and training pipelines from scratch — currently shipping a Cat vs Dog image classifier and exploring transfer learning with pretrained backbones.",
    tags: ["PyTorch", "CNN", "Computer Vision"],
  },
  {
    status: "now",
    title: "Productionizing ML Models",
    org: "Personal projects",
    desc: "Wrapping trained models into FastAPI endpoints, containerizing with Docker, and learning deployment patterns so models actually leave the notebook.",
    tags: ["FastAPI", "Docker", "REST"],
  },
  {
    status: "next",
    title: "MLOps & Model Serving",
    org: "Up next",
    desc: "Diving into experiment tracking, model registries, and CI/CD for ML — MLflow, GitHub Actions, and lightweight serving on cloud runtimes.",
    tags: ["MLflow", "CI/CD", "Cloud"],
  },
  {
    status: "next",
    title: "LLMs & Retrieval",
    org: "Exploring",
    desc: "Studying transformer internals and building small RAG demos with vector stores to understand how modern LLM apps are wired end-to-end.",
    tags: ["Transformers", "RAG", "Embeddings"],
  },
];

const statusStyles: Record<string, string> = {
  now: "bg-primary/15 text-primary border-primary/30",
  next: "bg-accent/15 text-accent border-accent/30",
};

export function Experience() {
  return (
    <Section id="experience" command="tail -f ~/learning.log" title="Currently Learning">
      <div className="grid sm:grid-cols-2 gap-5">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-lg border border-border bg-card/60 backdrop-blur p-5 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <span
                className={`mono text-[10px] uppercase tracking-wider px-2 py-1 rounded border ${statusStyles[item.status]}`}
              >
                {item.status === "now" ? "in_progress" : "queued"}
              </span>
              <span className="mono text-xs text-muted-foreground">{item.org}</span>
            </div>
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="mono text-[10px] px-2 py-1 rounded bg-secondary/60 text-muted-foreground border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
