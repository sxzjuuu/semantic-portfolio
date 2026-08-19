import { NavLink, Outlet, useLocation } from "react-router";
import { useEffect } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  );
}

function Header() {
  return (
    <header
      role="banner"
      className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl"
    >
      <nav
        role="navigation"
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <NavLink
          to="/"
          aria-label="Alex Morgan — Home"
          className="text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          <span aria-hidden="true" className="text-accent">
            A
          </span>
          lex Morgan
        </NavLink>

        <ul className="flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.to} role="listitem">
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      role="contentinfo"
      className="border-t border-border/60 bg-background"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-foreground">
            © {currentYear} Alex Morgan
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Crafted with care and semantic HTML
          </p>
        </div>

        <nav aria-label="Social media links">
          <ul className="flex items-center gap-4" role="list">
            <li>
              <a
                href="https://github.com/alexmorgan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
                aria-label="GitHub profile (opens in new tab)"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/alexmorgan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/alexmorgan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
                aria-label="Twitter profile (opens in new tab)"
              >
                Twitter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

/** Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <>
      <SkipLink />
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" role="main" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
