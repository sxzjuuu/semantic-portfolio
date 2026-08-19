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
    gradient: "linear-gradient(135deg, color-mix(in oklch, var(--accent) 15%, transparent), color-mix(in oklch, var(--accent) 3%, transparent))",
    href: "/projects",
  },
  {
    id: 2,
    title: "Verdant Marketplace",
    description:
      "An e-commerce platform for sustainable goods with seamless checkout and inventory management.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    gradient: "linear-gradient(135deg, color-mix(in oklch, oklch(0.60 0.14 170) 15%, transparent), color-mix(in oklch, oklch(0.60 0.14 170) 3%, transparent))",
    href: "/projects",
  },
  {
    id: 3,
    title: "Resonance Social",
    description:
      "A social media app focused on meaningful connections with real-time messaging and content feeds.",
    tags: ["React Native", "Convex", "WebSocket"],
    gradient: "linear-gradient(135deg, color-mix(in oklch, oklch(0.55 0.10 290) 15%, transparent), color-mix(in oklch, oklch(0.55 0.10 290) 3%, transparent))",
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
      {/* Hero Section — CSS Grid + radial-gradient backdrop */}
      <section
        aria-labelledby="hero-heading"
        className="hero-section"
      >
        <div aria-hidden="true" className="hero-bg" />

        <div className="hero-grid">
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
            className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
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
            className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground"
          >
            Full-stack developer and designer with a passion for creating
            inclusive, performant, and visually refined web applications. Every
            pixel and every line of code matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-accent-glow transition-smooth hover:brightness-110"
            >
              View My Work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-layered transition-smooth hover:bg-secondary"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Capabilities — 2D CSS Grid */}
      <section
        aria-labelledby="capabilities-heading"
        className="section-band section-band--alt"
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            id="capabilities-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-balance text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            What I Do
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={1}
            className="mx-auto mt-4 max-w-xl text-balance text-center text-muted-foreground"
          >
            Specialized in building modern web applications with a focus on user
            experience, accessibility, and clean architecture.
          </motion.p>

          <div className="capabilities-grid">
            {capabilities.map((cap, i) => (
              <motion.article
                key={cap.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i + 2}
                className="capability-card"
              >
                <div
                  aria-hidden="true"
                  className="capability-icon"
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

      {/* Featured Projects — CSS Grid with responsive columns */}
      <section
        aria-labelledby="projects-heading"
        className="section-band"
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
                className="hidden items-center gap-1.5 text-sm font-medium text-accent transition-smooth hover:text-accent/80 sm:inline-flex"
              >
                View all projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          <div className="projects-grid" style={{ marginTop: "2.5rem" }}>
            {featuredProjects.map((project, i) => (
              <motion.article
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i + 3}
                className="project-card"
              >
                <Link
                  to={project.href}
                  className="flex flex-1 flex-col"
                  aria-label={`View ${project.title} project details`}
                >
                  <div
                    aria-hidden="true"
                    className="project-card__thumbnail"
                    style={{ background: project.gradient }}
                  >
                    <Code2 className="h-10 w-10 text-foreground/20" />
                  </div>
                  <div className="project-card__body">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                      {project.title}
                      <ExternalLink
                        className="h-4 w-4 text-muted-foreground opacity-0 transition-smooth group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="project-card__tags" style={{ marginTop: "1rem" }}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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

      {/* Testimonials — Equal-height CSS Grid */}
      <section
        aria-labelledby="testimonials-heading"
        className="section-band section-band--alt"
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

          <div className="testimonials-grid" style={{ marginTop: "3.5rem" }}>
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.author}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i + 1}
                className="testimonial-card"
              >
                <Quote
                  aria-hidden="true"
                  className="mb-4 h-8 w-8 text-accent/40"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
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

      {/* CTA Section — Grid-centered banner with layered shadow */}
      <section
        aria-labelledby="cta-heading"
        className="section-band"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
          className="mx-auto max-w-3xl cta-banner"
        >
          <h2
            id="cta-heading"
            className="text-balance text-2xl font-bold tracking-tight text-accent-foreground sm:text-3xl"
          >
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-balance text-accent-foreground/80">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-layered-lg transition-smooth hover:brightness-105"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
