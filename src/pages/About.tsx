import { motion } from "framer-motion";
import { MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "Convex", "REST APIs"],
  },
  {
    category: "Design",
    items: ["Figma", "Design Systems", "Prototyping", "UI/UX", "Accessibility"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "CI/CD", "Vercel", "VS Code"],
  },
];

const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "Lumina Labs",
    period: "2023 — Present",
    description:
      "Leading frontend architecture for a real-time analytics platform. Built component library serving 50k+ daily users.",
  },
  {
    role: "Full-Stack Developer",
    company: "Verdant Co.",
    period: "2021 — 2023",
    description:
      "Developed end-to-end e-commerce solutions. Reduced page load times by 40% and improved conversion rates.",
  },
  {
    role: "Junior Developer",
    company: "Resonance Digital",
    period: "2019 — 2021",
    description:
      "Built responsive web applications and learned the foundations of accessible, semantic development.",
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

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section
        aria-labelledby="about-heading"
        className="section-band"
        style={{ paddingBottom: "3rem", paddingTop: "5rem" }}
      >
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-accent"
          >
            About
          </motion.p>
          <motion.h1
            id="about-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            A bit about me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl text-balance text-muted-foreground leading-relaxed"
          >
            I&apos;m a creative developer and designer based in San Francisco,
            passionate about building web experiences that are beautiful,
            performant, and accessible to everyone. With over five years of
            experience, I bridge the gap between design and engineering.
          </motion.p>
        </div>
      </section>

      {/* Bio Detail — 2-column CSS Grid */}
      <section
        aria-labelledby="bio-heading"
        className="section-band"
        style={{ paddingTop: 0 }}
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="bio-heading" className="sr-only">
            Bio Details
          </h2>
          <div className="bio-grid">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="capability-card"
            >
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin
                  className="h-4 w-4 text-accent"
                  aria-hidden="true"
                />
                <span>San Francisco, CA</span>
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar
                  className="h-4 w-4 text-accent"
                  aria-hidden="true"
                />
                <span>5+ years experience</span>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  I believe that great software is built at the intersection of
                  technical excellence and empathetic design. Every project I
                  take on is an opportunity to create something that genuinely
                  improves people&apos;s lives.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring design systems,
                  contributing to open source, or mentoring aspiring developers
                  in the community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="capability-card"
            >
              <h3 className="text-lg font-semibold text-foreground">
                Core Values
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {[
                  "Accessibility is not optional — it&apos;s a fundamental right",
                  "Clean code is maintainable code",
                  "Design systems create consistency and scale",
                  "Performance impacts real people",
                  "Collaboration produces the best outcomes",
                ].map((value) => (
                  <li
                    key={value}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {value}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section — 2D CSS Grid */}
      <section
        aria-labelledby="skills-heading"
        className="section-band section-band--alt"
      >
        <div className="mx-auto max-w-4xl">
          <motion.h2
            id="skills-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-2xl font-bold tracking-tight text-foreground"
          >
            Skills & Expertise
          </motion.h2>

          <div className="skills-grid" style={{ marginTop: "2.5rem" }}>
            {skills.map((group, i) => (
              <motion.article
                key={group.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className="capability-card"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline — CSS Grid alignment */}
      <section
        aria-labelledby="experience-heading"
        className="section-band"
      >
        <div className="mx-auto max-w-4xl">
          <motion.h2
            id="experience-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-2xl font-bold tracking-tight text-foreground"
          >
            Experience
          </motion.h2>

          <div className="timeline">
            {experience.map((job, i) => (
              <motion.article
                key={job.role}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className="timeline-item"
              >
                {/* Timeline dot */}
                <div
                  aria-hidden="true"
                  className="timeline-dot"
                >
                  <Briefcase className="h-4 w-4 text-accent" />
                </div>

                <div className="timeline-card">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      at {job.company}
                    </span>
                  </div>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {job.period}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        aria-labelledby="education-heading"
        className="section-band section-band--alt"
      >
        <div className="mx-auto max-w-4xl">
          <motion.h2
            id="education-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-2xl font-bold tracking-tight text-foreground"
          >
            Education
          </motion.h2>

          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="capability-card"
            style={{ marginTop: "2.5rem" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "3rem 1fr", gap: "1.5rem", alignItems: "start" }}>
              <div
                aria-hidden="true"
                className="capability-icon"
                style={{ margin: 0 }}
              >
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  B.S. Computer Science
                </h3>
                <p className="text-sm text-muted-foreground">
                  University of California, Berkeley
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Graduated 2019 — Focus in Human-Computer Interaction
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </>
  );
}
