import { motion } from "framer-motion";
import { Section } from "./Section";

const projects = [
  {
    name: "Email Spam Classifier",
    desc: "End-to-end email spam classifier using classic ML, with full experiment tracking via MLflow and data versioning via DVC.",
    tags: ["Python", "MLflow", "DVC", "scikit-learn"],
    url: "https://github.com/HimmatMagar/Email_Spam_Classifier",
  },
  {
    name: "Question Answering System (GPT)",
    desc: "End-to-end question answering system built on a decoder-only GPT-style model. Covers data prep, fine-tuning, and inference.",
    tags: ["Python", "Transformers", "LLM", "NLP"],
    url: "https://github.com/HimmatMagar/Question-Answering-System-GPT",
  },
  {
    name: "Next Word Predictor (LSTM)",
    desc: "End-to-end deep learning next-word prediction system using an LSTM model, served through a lightweight web interface.",
    tags: ["Python", "TensorFlow", "LSTM", "Deep Learning"],
    url: "https://github.com/HimmatMagar/Next_Word_Predictior",
  },
  {
    name: "Visa Eligibility Predictor — AU",
    desc: "Production-style ML pipeline predicting Australian visa eligibility, structured with modular components for training and serving.",
    tags: ["Python", "ML Pipeline", "FastAPI"],
    url: "https://github.com/HimmatMagar/VisaEligibilityPredictor-AU",
  },
  {
    name: "Wine Quality Prediction",
    desc: "End-to-end ML implementation predicting wine quality from chemical features, with reproducible training workflow.",
    tags: ["Python", "scikit-learn", "MLOps"],
    url: "https://github.com/HimmatMagar/Wine-Quality-Prediction",
  },
  {
    name: "Text Summarization",
    desc: "Abstractive text summarization pipeline experimenting with transformer-based models for compressing long-form content.",
    tags: ["Python", "NLP", "Transformers"],
    url: "https://github.com/HimmatMagar/Text_Summarization",
  },
];

export function Projects() {
  return (
    <Section id="projects" command="ls ./projects" title="Selected Work">
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="group relative block p-6 rounded-lg border border-border bg-card/60 backdrop-blur hover:border-primary/60 transition-all overflow-hidden"
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
                  ↗
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
            </div>
          </motion.a>
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
    </Section>
  );
}
