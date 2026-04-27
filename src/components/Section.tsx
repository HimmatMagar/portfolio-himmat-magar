import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  command,
  title,
  children,
}: {
  id: string;
  command: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 px-6 relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mono text-sm text-primary mb-2">
            <span className="opacity-60">$</span> {command}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
