import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  ArrowRight,
  ExternalLink,
  Code2,
  Palette,
  Zap,
  Quote,
} from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    title: "Lumina Dashboard",
    description:
      "A real-time analytics dashboard with interactive data visualizations and responsive design.",
    tags: ["React", "TypeScript", "D3.js"],
    color: "bg-accent/10",
    href: "/projects",
  },
  {
    id: 2,
    title: "Verdant Marketplace",
    description:
      "An e-commerce platform for sustainable goods with seamless checkout and inventory management.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    color: "bg-emerald-500/10",
    href: "/projects",
  },
  {
    id: 3,
    title: "Resonance Social",
    description:
      "A social media app focused on meaningful connections with real-time messaging and content feeds.",
    tags: ["React Native", "Convex", "WebSocket"],
    color: "bg-violet-500/10",
    href: "/projects",
  },
];

const testimonials = [
  {
    quote:
      "Alex transformed our vision into a stunning, performant web application. Their attention to detail and accessibility-first approach is unmatched.",
    author: "Sarah Chen",
    role: "CTO, Lumina Labs",
  },
  {
    quote:
      "Working with Alex was a pleasure. They delivered a beautiful product that our users love, and the codebase is a joy to maintain.",
    author: "Marcus Rivera",
    role: "Founder, Verdant Co.",
  },
  {
    quote:
      "Exceptional at bridging design and engineering. Alex builds things that are not just functional, but genuinely delightful to use.",
    author: "Priya Patel",
    role: "Product Lead, Resonance",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Development",
    description:
      "Full-stack applications with React, TypeScript, and modern tooling. Clean, maintainable, and performant code.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Thoughtful interfaces built on design systems, with attention to typography, spacing, and visual hierarchy.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimized experiences that load fast and run smoothly, with a focus on Core Web Vitals and accessibility.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

export default function Landing() {
  return (
    <>
      {/* Hero Section */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden px-6 pb-24 pt-20 sm:pt-28 lg:pt-36"
      >
        {/* Subtle background gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--accent)/8%,transparent)]"
        />

        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Creative Developer & Designer
            </p>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            I craft digital experiences
            <br />
            that are{" "}
            <span className="text-accent">beautiful</span> and{" "}
            <span className="text-accent">accessible</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Full-stack developer and designer with a passion for creating
            inclusive, performant, and visually refined web applications. Every
            pixel and every line of code matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:brightness-110"
            >
              View My Work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-secondary"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section
        aria-labelledby="capabilities-heading"
        className="border-t border-border/60 bg-secondary/30 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            id="capabilities-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            What I Do
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={1}
            className="mx-auto mt-4 max-w-xl text-center text-muted-foreground"
          >
            Specialized in building modern web applications with a focus on user
            experience, accessibility, and clean architecture.
          </motion.p>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {capabilities.map((cap, i) => (
              <motion.article
                key={cap.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i + 2}
                className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5"
              >
                <div
                  aria-hidden="true"
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground"
                >
                  <cap.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        aria-labelledby="projects-heading"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <motion.h2
                id="projects-heading"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={0}
                className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                Featured Work
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={1}
                className="mt-3 text-muted-foreground"
              >
                A selection of recent projects I'm proud of.
              </motion.p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={2}
            >
              <Link
                to="/projects"
                className="hidden items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/80 sm:inline-flex"
              >
                View all projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <motion.article
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i + 3}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <Link
                  to={project.href}
                  className="block p-6"
                  aria-label={`View ${project.title} project details`}
                >
                  <div
                    aria-hidden="true"
                    className={`mb-4 flex h-32 items-center justify-center rounded-xl ${project.color}`}
                  >
                    <Code2 className="h-10 w-10 text-accent/60" />
                  </div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                    {project.title}
                    <ExternalLink
                      className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              View all projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        aria-labelledby="testimonials-heading"
        className="border-t border-border/60 bg-secondary/30 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            id="testimonials-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Kind Words
          </motion.h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.author}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i + 1}
                className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm"
              >
                <Quote
                  aria-hidden="true"
                  className="mb-4 h-8 w-8 text-accent/40"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "{t.quote}"
                </p>
                <footer className="mt-6">
                  <p className="text-sm font-semibold text-foreground">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        aria-labelledby="cta-heading"
        className="px-6 py-20"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
          className="mx-auto max-w-3xl rounded-3xl bg-accent px-8 py-16 text-center shadow-xl shadow-accent/20 sm:px-16"
        >
          <h2
            id="cta-heading"
            className="text-2xl font-bold tracking-tight text-accent-foreground sm:text-3xl"
          >
            Let's Build Something Great Together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-accent-foreground/80">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-lg transition-all duration-200 hover:shadow-xl hover:brightness-105"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
