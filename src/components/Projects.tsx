import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Section } from "./Section";

type Project = {
  name: string;
  desc: string;
  tags: string[];
  url: string;
  overview: string;
  highlights: string[];
  readme: string;
  demo?: string;
};

const projects: Project[] = [
  {
    name: "Email Spam Classifier",
    desc: "End-to-end email spam classifier using classic ML, with full experiment tracking via MLflow and data versioning via DVC.",
    tags: ["Python", "MLflow", "DVC", "scikit-learn"],
    url: "https://github.com/HimmatMagar/Email_Spam_Classifier",
    overview:
      "Production-style spam detection pipeline covering ingestion, validation, transformation, training, and evaluation — wired with MLflow for experiment tracking and DVC for data/model versioning.",
    highlights: [
      "Modular components: data ingestion → validation → transformation → trainer → evaluator",
      "MLflow tracking for params, metrics, and model artifacts",
      "DVC pipelines for reproducible data and model lineage",
      "Config-driven (YAML) with Pydantic-style schemas",
    ],
    readme: "https://github.com/HimmatMagar/Email_Spam_Classifier#readme",
  },
  {
    name: "Question Answering System (GPT)",
    desc: "End-to-end question answering system built on a decoder-only GPT-style model. Covers data prep, fine-tuning, and inference.",
    tags: ["Python", "Transformers", "LLM", "NLP"],
    url: "https://github.com/HimmatMagar/Question-Answering-System-GPT",
    overview:
      "QA system built around a decoder-only GPT-style architecture — from tokenization and dataset prep through fine-tuning and inference for context-grounded answers.",
    highlights: [
      "Custom data pipeline for QA pairs",
      "Fine-tuning loop with checkpointing",
      "Inference utilities for prompt-based QA",
      "Clean separation of training vs serving code",
    ],
    readme: "https://github.com/HimmatMagar/Question-Answering-System-GPT#readme",
  },
  {
    name: "Next Word Predictor (LSTM)",
    desc: "End-to-end deep learning next-word prediction system using an LSTM model, served through a lightweight web interface.",
    tags: ["Python", "TensorFlow", "LSTM", "Deep Learning"],
    url: "https://github.com/HimmatMagar/Next_Word_Predictior",
    overview:
      "LSTM-based language model that predicts the next likely word from input text, packaged with a small web UI for live demo.",
    highlights: [
      "Tokenization + sequence modeling pipeline",
      "LSTM trained on a curated text corpus",
      "Flask-style web UI for interactive predictions",
      "End-to-end: data → model → app",
    ],
    readme: "https://github.com/HimmatMagar/Next_Word_Predictior#readme",
  },
  {
    name: "Visa Eligibility Predictor — AU",
    desc: "Production-style ML pipeline predicting Australian visa eligibility, structured with modular components for training and serving.",
    tags: ["Python", "ML Pipeline", "FastAPI"],
    url: "https://github.com/HimmatMagar/VisaEligibilityPredictor-AU",
    overview:
      "Industrial-grade ML project predicting Australian visa eligibility — built with reusable components, configs, and a serving layer ready for deployment.",
    highlights: [
      "Modular pipeline: ingestion, validation, transformation, training",
      "Hyperparameter tuning + model evaluation",
      "API-ready serving layer",
      "Logging, exception handling, and config management",
    ],
    readme: "https://github.com/HimmatMagar/VisaEligibilityPredictor-AU#readme",
  },
  {
    name: "Wine Quality Prediction",
    desc: "End-to-end ML implementation predicting wine quality from chemical features, with reproducible training workflow.",
    tags: ["Python", "scikit-learn", "MLOps"],
    url: "https://github.com/HimmatMagar/Wine-Quality-Prediction",
    overview:
      "Regression pipeline predicting wine quality scores from physicochemical features, structured for reproducibility and easy retraining.",
    highlights: [
      "Clean train/eval split with cross-validation",
      "Config-driven training with YAML",
      "Artifact tracking for models and metrics",
      "Reusable component design",
    ],
    readme: "https://github.com/HimmatMagar/Wine-Quality-Prediction#readme",
  },
  {
    name: "Text Summarization",
    desc: "Abstractive text summarization pipeline experimenting with transformer-based models for compressing long-form content.",
    tags: ["Python", "NLP", "Transformers"],
    url: "https://github.com/HimmatMagar/Text_Summarization",
    overview:
      "Transformer-based abstractive summarization pipeline — from data preparation to fine-tuning and evaluation on summarization metrics.",
    highlights: [
      "HuggingFace Transformers integration",
      "Tokenization and batching for long-form text",
      "Fine-tuning with evaluation (ROUGE-style metrics)",
      "Modular training + inference scripts",
    ],
    readme: "https://github.com/HimmatMagar/Text_Summarization#readme",
  },
];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <Section id="projects" command="ls ./projects" title="Selected Work">
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.button
            key={p.name}
            type="button"
            onClick={() => setActive(p)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="group relative block text-left p-6 rounded-lg border border-border bg-card/60 backdrop-blur hover:border-primary/60 transition-all overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 to-accent/5 transition-opacity" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="mono text-xs text-primary mb-1">
                    project_{String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                </div>
                <span className="mono text-xs text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                  ⤢
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="mono text-[11px] px-2 py-1 rounded border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mono text-[11px] text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                $ click to inspect →
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-center"
      >
        <a
          href="https://github.com/HimmatMagar"
          target="_blank"
          rel="noopener noreferrer"
          className="mono text-sm text-primary hover:underline"
        >
          $ git clone --all → see all repos on GitHub
        </a>
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-lg border border-border bg-card shadow-2xl"
            >
              <div className="sticky top-0 flex items-center justify-between gap-4 px-6 py-4 border-b border-border bg-card/95 backdrop-blur">
                <div className="min-w-0">
                  <div className="mono text-xs text-primary mb-1">~/projects/{active.name.toLowerCase().replace(/[^a-z0-9]+/g, "_")}</div>
                  <h3 className="text-lg sm:text-xl font-semibold truncate">{active.name}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="mono text-sm px-2 py-1 rounded border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors shrink-0"
                >
                  esc ✕
                </button>
              </div>

              <div className="px-6 py-5 space-y-6">
                <div>
                  <div className="mono text-[11px] text-primary mb-2"># overview</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{active.overview}</p>
                </div>

                <div>
                  <div className="mono text-[11px] text-primary mb-2"># highlights</div>
                  <ul className="space-y-2">
                    {active.highlights.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground flex gap-3">
                        <span className="mono text-primary shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mono text-[11px] text-primary mb-2"># stack</div>
                  <div className="flex flex-wrap gap-2">
                    {active.tags.map((t) => (
                      <span
                        key={t}
                        className="mono text-[11px] px-2 py-1 rounded border border-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono text-xs px-3 py-2 rounded border border-primary/60 text-primary hover:bg-primary/10 transition-colors"
                  >
                    ↗ source
                  </a>
                  <a
                    href={active.readme}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono text-xs px-3 py-2 rounded border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"
                  >
                    ↗ README
                  </a>
                  {active.demo && (
                    <a
                      href={active.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono text-xs px-3 py-2 rounded border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"
                    >
                      ↗ demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
