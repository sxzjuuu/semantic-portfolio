import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validateField(
  name: string,
  value: string
): string | undefined {
  switch (name) {
    case "name":
      if (!value.trim()) return "Please enter your name.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
      return undefined;
    case "email":
      if (!value.trim()) return "Please enter your email address.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Please enter a valid email address.";
      return undefined;
    case "subject":
      if (!value.trim()) return "Please enter a subject.";
      return undefined;
    case "message":
      if (!value.trim()) return "Please enter your message.";
      if (value.trim().length < 10)
        return "Message must be at least 10 characters.";
      return undefined;
    default:
      return undefined;
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleBlur = (field: string, value: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value),
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const allErrors: FormErrors = {};
    for (const [field, value] of Object.entries(formData)) {
      const error = validateField(field, value);
      if (error) allErrors[field as keyof FormErrors] = error;
    }
    setErrors(allErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (Object.keys(allErrors).length > 0) {
      // Focus first error field
      const firstErrorField = document.querySelector(
        '[aria-invalid="true"]'
      ) as HTMLElement;
      firstErrorField?.focus();
      return;
    }

    setSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@alexmorgan.dev",
      href: "mailto:hello@alexmorgan.dev",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section
        aria-labelledby="contact-heading"
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
            Contact
          </motion.p>
          <motion.h1
            id="contact-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Let&apos;s connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl text-balance text-muted-foreground leading-relaxed"
          >
            Have a project in mind, a question, or just want to say hello? I&apos;d
            love to hear from you. Fill out the form below and I&apos;ll get back to
            you as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info — Asymmetric CSS Grid */}
      <section
        aria-label="Contact form and information"
        className="section-band"
        style={{ paddingTop: 0 }}
      >
        <div className="mx-auto max-w-4xl">
          <div className="contact-grid">
            {/* Contact Info Sidebar */}
            <motion.aside
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <div className="capability-card" style={{ position: "sticky", top: "5rem" }}>
                <h2 className="text-lg font-semibold text-foreground">
                  Get in Touch
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reach out directly or use the form. I typically respond within
                  24 hours.
                </p>

                <div className="mt-6 space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-3">
                      <div
                        aria-hidden="true"
                        className="capability-icon"
                        style={{ width: "2.5rem", height: "2.5rem", margin: 0, borderRadius: "0.75rem" }}
                      >
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">
                          {info.label}
                        </p>
                        <a
                          href={info.href}
                          className="text-sm font-medium text-foreground transition-smooth hover:text-accent"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-border/60 pt-6">
                  <p className="text-xs text-muted-foreground">
                    Available for freelance projects, full-time roles, and
                    consulting. Let&apos;s discuss how I can help.
                  </p>
                </div>
              </div>
            </motion.aside>

            {/* Contact Form — CSS Grid form layout */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              {submitted ? (
                <div
                  role="alert"
                  className="capability-card"
                  style={{ display: "grid", placeItems: "center", padding: "3rem", textAlign: "center" }}
                >
                  <CheckCircle2
                    className="h-12 w-12 text-emerald-500"
                    aria-hidden="true"
                  />
                  <h2 className="mt-4 text-xl font-semibold text-foreground">
                    Message Sent!
                  </h2>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thank you for reaching out. I&apos;ll review your message and get
                    back to you soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                      setTouched({});
                      setErrors({});
                    }}
                    className="mt-6 rounded-xl bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-smooth hover:brightness-110"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="capability-card"
                  aria-label="Contact form"
                >
                  <div className="contact-form-grid">
                    {/* Name Field */}
                    <div className="form-field">
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Name{" "}
                        <span className="text-destructive" aria-hidden="true">
                          *
                        </span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => handleBlur("name", formData.name)}
                        required
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!errors.name && touched.name}
                        aria-describedby={
                          errors.name && touched.name ? "name-error" : undefined
                        }
                        className="form-input"
                        placeholder="Your name"
                      />
                      {errors.name && touched.name && (
                        <p
                          id="name-error"
                          role="alert"
                          className="mt-1.5 flex items-center gap-1 text-xs text-destructive"
                        >
                          <AlertCircle className="h-3 w-3" aria-hidden="true" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="form-field">
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Email{" "}
                        <span className="text-destructive" aria-hidden="true">
                          *
                        </span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur("email", formData.email)}
                        required
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={!!errors.email && touched.email}
                        aria-describedby={
                          errors.email && touched.email
                            ? "email-error"
                            : undefined
                        }
                        className="form-input"
                        placeholder="you@example.com"
                      />
                      {errors.email && touched.email && (
                        <p
                          id="email-error"
                          role="alert"
                          className="mt-1.5 flex items-center gap-1 text-xs text-destructive"
                        >
                          <AlertCircle className="h-3 w-3" aria-hidden="true" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field — Full width */}
                  <div className="form-field" style={{ marginTop: "1.25rem" }}>
                    <label
                      htmlFor="contact-subject"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Subject{" "}
                      <span className="text-destructive" aria-hidden="true">
                        *
                      </span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={() => handleBlur("subject", formData.subject)}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.subject && touched.subject}
                      aria-describedby={
                        errors.subject && touched.subject
                          ? "subject-error"
                          : undefined
                      }
                      className="form-input"
                      placeholder="What's this about?"
                    />
                    {errors.subject && touched.subject && (
                      <p
                        id="subject-error"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1 text-xs text-destructive"
                      >
                        <AlertCircle className="h-3 w-3" aria-hidden="true" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field — Full width */}
                  <div className="form-field" style={{ marginTop: "1.25rem" }}>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Message{" "}
                      <span className="text-destructive" aria-hidden="true">
                        *
                      </span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur("message", formData.message)}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message && touched.message}
                      aria-describedby={
                        errors.message && touched.message
                          ? "message-error message-count"
                          : "message-count"
                      }
                      rows={5}
                      className="form-input"
                      style={{ resize: "vertical" }}
                      placeholder="Tell me about your project, idea, or just say hi..."
                    />
                    {errors.message && touched.message && (
                      <p
                        id="message-error"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1 text-xs text-destructive"
                      >
                        <AlertCircle className="h-3 w-3" aria-hidden="true" />
                        {errors.message}
                      </p>
                    )}
                    <p
                      id="message-count"
                      className="mt-1.5 text-xs text-muted-foreground"
                      aria-live="polite"
                    >
                      {formData.message.length} characters
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div style={{ marginTop: "1.5rem" }}>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-accent-glow transition-smooth hover:brightness-110 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
                      aria-busy={submitting}
                    >
                      {submitting ? (
                        <>
                          <span
                            className="h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground border-t-transparent"
                            aria-hidden="true"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" aria-hidden="true" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-xs text-muted-foreground">
                    Fields marked with{" "}
                    <span className="text-destructive" aria-hidden="true">
                      *
                    </span>{" "}
                    are required.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
