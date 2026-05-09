import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ROLES = ["ML Engineer", "PyTorch Dev", "FastAPI Builder", "Docker Native"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[idx];
    const speed = deleting ? 50 : 90;
    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => (i + 1) % ROLES.length);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, idx]);

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl w-full grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mono text-sm text-primary mb-6"
          >
            <span className="opacity-60">$</span> whoami
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Himmat <span className="text-gradient">Magar</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl mono break-words"
          >
            <span className="text-muted-foreground">→ </span>
            <span className="text-foreground blink-caret">{text}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-8 max-w-xl text-muted-foreground leading-relaxed"
          >
            CS undergraduate from Nepal building machine learning systems that don't
            just work in theory — they ship to production. PyTorch models served as
            clean REST APIs, containerized with Docker, deployed reliably.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#contact" className="mono text-sm px-6 py-3 rounded-md bg-primary text-primary-foreground hover:glow transition-all">
              → let's connect
            </a>
            <a href="https://github.com/HimmatMagar" target="_blank" rel="noreferrer" className="mono text-sm px-6 py-3 rounded-md border border-border hover:border-primary hover:text-primary transition-colors">
              github ↗
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="rounded-lg border border-border bg-card/80 backdrop-blur shadow-[var(--shadow-card)] overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
            <span className="w-3 h-3 rounded-full bg-destructive/70" />
            <span className="w-3 h-3 rounded-full bg-accent/70" />
            <span className="w-3 h-3 rounded-full bg-primary/70" />
            <span className="ml-3 mono text-xs text-muted-foreground">~/profile.py</span>
          </div>
          <pre className="mono text-[11px] sm:text-[13px] p-4 sm:p-5 leading-relaxed overflow-x-auto">
<span className="text-muted-foreground">{`# meet the engineer`}</span>{`\n`}
<span className="text-accent">class</span> <span className="text-primary">Engineer</span>:{`\n`}
{`    `}name = <span className="text-foreground">"Himmat Magar"</span>{`\n`}
{`    `}role = <span className="text-foreground">"ML Engineer"</span>{`\n`}
{`    `}base = <span className="text-foreground">"Pokhara, Nepal 🇳🇵"</span>{`\n`}
{`    `}stack = [<span className="text-foreground">"PyTorch"</span>,{`\n`}
{`             `}<span className="text-foreground">"FastAPI"</span>,{`\n`}
{`             `}<span className="text-foreground">"Docker"</span>]{`\n`}
{`    `}status = <span className="text-primary">"open_to_work"</span>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
