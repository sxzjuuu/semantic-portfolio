import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Search } from "lucide-react";

const allTags = [
  "All",
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Python",
  "Figma",
  "Convex",
  "PostgreSQL",
];

const projects = [
  {
    id: 1,
    title: "Lumina Dashboard",
    description:
      "A real-time analytics dashboard with interactive data visualizations, responsive design, and role-based access control. Built for scale with a focus on performance.",
    tags: ["React", "TypeScript", "Node.js"],
    liveUrl: "https://lumina.example.com",
    githubUrl: "https://github.com/alexmorgan/lumina",
    gradient: "linear-gradient(135deg, color-mix(in oklch, var(--accent) 15%, transparent), color-mix(in oklch, var(--accent) 3%, transparent))",
    featured: true,
  },
  {
    id: 2,
    title: "Verdant Marketplace",
    description:
      "An e-commerce platform for sustainable goods with seamless Stripe checkout, inventory management, and a custom CMS for product content.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "https://verdant.example.com",
    githubUrl: "https://github.com/alexmorgan/verdant",
    gradient: "linear-gradient(135deg, color-mix(in oklch, oklch(0.60 0.14 170) 15%, transparent), color-mix(in oklch, oklch(0.60 0.14 170) 3%, transparent))",
    featured: true,
  },
  {
    id: 3,
    title: "Resonance Social",
    description:
      "A social media app focused on meaningful connections with real-time messaging, content feeds, and user-generated content moderation.",
    tags: ["React", "Convex", "TypeScript"],
    liveUrl: "https://resonance.example.com",
    githubUrl: "https://github.com/alexmorgan/resonance",
    gradient: "linear-gradient(135deg, color-mix(in oklch, oklch(0.55 0.10 290) 15%, transparent), color-mix(in oklch, oklch(0.55 0.10 290) 3%, transparent))",
    featured: true,
  },
  {
    id: 4,
    title: "Orbit Design System",
    description:
      "A comprehensive design system and component library used across multiple products. Includes tokens, components, documentation, and Figma integration.",
    tags: ["React", "TypeScript", "Figma"],
    liveUrl: "https://orbit.example.com",
    githubUrl: "https://github.com/alexmorgan/orbit",
    gradient: "linear-gradient(135deg, color-mix(in oklch, oklch(0.75 0.15 85) 15%, transparent), color-mix(in oklch, oklch(0.75 0.15 85) 3%, transparent))",
    featured: false,
  },
  {
    id: 5,
    title: "WeatherFlow API",
    description:
      "A high-performance weather data API with caching, rate limiting, and webhook support. Built with Python and PostgreSQL for reliability at scale.",
    tags: ["Python", "PostgreSQL", "Node.js"],
    liveUrl: "https://weatherflow.example.com",
    githubUrl: "https://github.com/alexmorgan/weatherflow",
    gradient: "linear-gradient(135deg, color-mix(in oklch, oklch(0.65 0.10 230) 15%, transparent), color-mix(in oklch, oklch(0.65 0.10 230) 3%, transparent))",
    featured: false,
  },
  {
    id: 6,
    title: "Pulse Analytics Widget",
    description:
      "An embeddable analytics widget for SaaS products. Lightweight, privacy-focused, and customizable with a React component API.",
    tags: ["React", "TypeScript"],
    liveUrl: "https://pulse.example.com",
    githubUrl: "https://github.com/alexmorgan/pulse",
    gradient: "linear-gradient(135deg, color-mix(in oklch, oklch(0.60 0.15 15) 15%, transparent), color-mix(in oklch, oklch(0.60 0.15 15) 3%, transparent))",
    featured: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <>
      {/* Page Header */}
      <section
        aria-labelledby="projects-heading"
        className="section-band"
        style={{ paddingBottom: "3rem", paddingTop: "5rem" }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-accent"
          >
            Projects
          </motion.p>
          <motion.h1
            id="projects-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Selected Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl text-balance text-muted-foreground leading-relaxed"
          >
            A collection of projects I&apos;ve built, contributed to, or designed.
            Each represents a unique challenge and a chance to learn something
            new.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar — Scrollable pill toolbar */}
      <section
        aria-label="Project filters"
        className="section-band"
        style={{ paddingBottom: "2rem", paddingTop: 0 }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            role="toolbar"
            aria-label="Filter projects by technology"
          >
            <div className="filter-toolbar">
              <Search
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-muted-foreground"
              />
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  aria-pressed={activeFilter === tag}
                  className="filter-pill"
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>
          <p
            role="status"
            aria-live="polite"
            className="mt-3 text-sm text-muted-foreground"
          >
            Showing {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Projects Grid — CSS Grid responsive columns */}
      <section
        aria-label="Projects list"
        className="section-band"
        style={{ paddingTop: 0 }}
      >
        <div className="mx-auto max-w-6xl">
          <div
            className="projects-grid"
            role="list"
          >
            {filteredProjects.map((project, i) => (
              <motion.article
                key={project.id}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={i}
                role="listitem"
                className={`project-card ${project.featured ? "project-card--featured" : ""}`}
              >
                {/* Project thumbnail */}
                <div
                  aria-hidden="true"
                  className="project-card__thumbnail"
                  style={{ background: project.gradient }}
                >
                  <Code2 className="h-12 w-12 text-foreground/20" />
                  {project.featured && (
                    <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground shadow-sm">
                      Featured
                    </span>
                  )}
                </div>

                <div className="project-card__body">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>

                  <div className="project-card__tags" style={{ marginTop: "1rem" }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-card__actions">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-smooth hover:text-accent/80"
                      aria-label={`${project.title} live demo (opens in new tab)`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground"
                      aria-label={`${project.title} source code on GitHub (opens in new tab)`}
                    >
                      <Github className="h-3.5 w-3.5" aria-hidden="true" />
                      Source
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{ padding: "4rem 0", textAlign: "center" }}>
              <p className="text-muted-foreground">
                No projects found for this filter.
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className="mt-3 text-sm font-medium text-accent transition-smooth hover:text-accent/80"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
