import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stack } from "@/components/Stack";
import { Projects } from "@/components/Projects";
import { Focus } from "@/components/Focus";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mono text-sm text-primary mb-2">
            <span className="opacity-60">$</span> cat about.txt
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-8">
            ML Engineering sits at the <span className="text-gradient">crossroads</span> of data science and software engineering.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            There's a big difference between training a model and deploying one.
            Most students learn the first part — I'm committed to mastering both.
            That means understanding how to wrap ML models into production-grade
            APIs, containerize applications so they behave the same on every
            machine, and think about software architecture when machine learning
            is at the core of the product. That's where the most impactful work
            happens.
          </p>
        </div>
      </section>
      <Stack />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
