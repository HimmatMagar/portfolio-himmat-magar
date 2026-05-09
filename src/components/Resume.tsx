import { motion } from "framer-motion";
import { Section } from "./Section";

const RESUME_URL = "/himmat-magar-resume.pdf";

const highlights = [
  { k: "role", v: "ML Engineer · open to work" },
  { k: "base", v: "Pokhara, Nepal · remote-friendly" },
  { k: "stack", v: "Python · PyTorch · FastAPI · Docker · MLflow · DVC" },
  { k: "focus", v: "Production ML pipelines & model serving" },
];

export function Resume() {
  return (
    <Section id="resume" command="cat resume.pdf" title="Resume">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-border bg-card/70 backdrop-blur p-6 sm:p-8"
        >
          <div className="mono text-xs text-primary mb-3"># for_recruiters</div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">
            One page. Zero fluff.
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            A concise PDF covering experience, stack, and selected projects.
            Open it in a new tab or download a copy — whichever your workflow
            prefers.
          </p>

          <dl className="mt-6 space-y-2">
            {highlights.map((h) => (
              <div key={h.k} className="flex gap-3 text-sm">
                <dt className="mono text-primary shrink-0 w-14">{h.k}</dt>
                <dd className="text-muted-foreground">{h.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-xs sm:text-sm px-4 py-2.5 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              ↗ open resume
            </a>
            <a
              href={RESUME_URL}
              download="himmat-magar-resume.pdf"
              className="mono text-xs sm:text-sm px-4 py-2.5 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition"
            >
              ↓ download .pdf
            </a>
            <a
              href="mailto:himmatmagar007@gmail.com?subject=Opportunity%20for%20Himmat"
              className="mono text-xs sm:text-sm px-4 py-2.5 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition"
            >
              ✉ email me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-border bg-card/40 backdrop-blur overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
            <span className="w-3 h-3 rounded-full bg-destructive/70" />
            <span className="w-3 h-3 rounded-full bg-accent/70" />
            <span className="w-3 h-3 rounded-full bg-primary/70" />
            <span className="ml-3 mono text-xs text-muted-foreground truncate">
              ~/himmat-magar-resume.pdf
            </span>
          </div>
          <object
            data={`${RESUME_URL}#view=FitH&toolbar=0`}
            type="application/pdf"
            className="w-full h-[420px] sm:h-[520px] lg:h-[620px] bg-background"
            aria-label="Himmat Magar resume preview"
          >
            <div className="p-6 text-sm text-muted-foreground">
              Inline preview isn't supported on this device.{" "}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Open the PDF in a new tab →
              </a>
            </div>
          </object>
        </motion.div>
      </div>
    </Section>
  );
}
