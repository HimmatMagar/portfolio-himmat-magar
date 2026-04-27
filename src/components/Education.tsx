import { motion } from "framer-motion";
import { Section } from "./Section";

const edu = [
  {
    school: "Pokhara University",
    degree: "Bachelor of Computer System and Information Technology",
  },
  {
    school: "Pokhara College Of Management",
    degree: "Bachelor in Computer System and Information Technology, IT",
  },
];

export function Education() {
  return (
    <Section id="education" command="git log --education" title="Where I Studied">
      <div className="relative pl-8 border-l-2 border-border space-y-10">
        {edu.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-primary glow" />
            <div className="mono text-xs text-primary mb-1">commit #{i + 1}</div>
            <h3 className="text-xl font-semibold">{e.school}</h3>
            <p className="text-muted-foreground mt-1">{e.degree}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
