import { motion, type Variants } from "framer-motion";
import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Clock } from "lucide-react";

type Status = "now" | "next";

type Item = {
  title: string;
  status: Status;
  blurb: string;
  tags: string[];
};

const ITEMS: Item[] = [
  {
    title: "Deep Learning with PyTorch",
    status: "now",
    blurb: "Building CNNs from scratch and fine-tuning pretrained vision models.",
    tags: ["PyTorch", "CNN", "Computer Vision"],
  },
  {
    title: "Productionizing ML Models",
    status: "now",
    blurb: "Wrapping models into clean, containerized REST services.",
    tags: ["FastAPI", "Docker", "REST"],
  },
  {
    title: "MLOps & Model Serving",
    status: "next",
    blurb: "Experiment tracking, CI/CD pipelines, and cloud deployment.",
    tags: ["MLflow", "CI/CD", "Cloud"],
  },
  {
    title: "LLMs & Retrieval",
    status: "next",
    blurb: "Transformers, embeddings, and retrieval-augmented generation.",
    tags: ["Transformers", "RAG", "Embeddings"],
  },
];

const statusStyles: Record<Status, { label: string; chip: string; icon: typeof Sparkles }> = {
  now: {
    label: "now",
    chip: "bg-primary/15 text-primary border-primary/30",
    icon: Sparkles,
  },
  next: {
    label: "next",
    chip: "bg-accent/15 text-accent border-accent/30",
    icon: Clock,
  },
};

const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18, mass: 0.6 },
  },
};

const tagsVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const tagVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

export function Experience() {
  return (
    <Section id="experience" command="ls ~/learning" title="Currently Learning">
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 sm:grid-cols-2"
      >
        {ITEMS.map((item) => {
          const s = statusStyles[item.status];
          const Icon = s.icon;
          return (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="group"
            >
              <Card className="relative h-full overflow-hidden border-border/60 bg-card/60 backdrop-blur transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_10px_40px_-15px_var(--glow)]">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <CardHeader className="flex flex-row items-start justify-between gap-3 space-y-0">
                  <CardTitle className="text-lg leading-snug">{item.title}</CardTitle>
                  <span
                    className={`mono inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] uppercase tracking-wider ${s.chip}`}
                  >
                    <Icon className="h-3 w-3" />
                    {s.label}
                  </span>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.blurb}</p>
                  <motion.ul
                    variants={tagsVariants}
                    className="flex flex-wrap gap-2"
                  >
                    {item.tags.map((tag) => (
                      <motion.li
                        key={tag}
                        variants={tagVariants}
                        whileHover={{ scale: 1.06, y: -2 }}
                        className="mono rounded-md border border-border/60 bg-muted/40 px-2 py-1 text-[11px] text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {tag}
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
