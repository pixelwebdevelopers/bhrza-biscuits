import { Link } from "@tanstack/react-router";
import {
  Cookie,
  Facebook,
  Home,
  Info,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  X,
  PhoneCall,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/bhrza-logo.png";
import pixelLogoImg from "@/assets/pixel-logo.png";

const nav = [
  { label: "Home", to: "/", icon: Home },
  { label: "About", to: "/about", icon: Info },
  { label: "Products", to: "/products", icon: Cookie },
  { label: "Quality", to: "/quality", icon: ShieldCheck },
  { label: "Contact", to: "/contact", icon: PhoneCall },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="site-container grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <Link
            to="/"
            className="inline-flex min-w-0 items-center"
            aria-label="BHRZA Biscuits home"
          >
            <img src={logoImg} alt="BHRZA" className="h-11 w-auto max-w-[180px] object-contain" />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="nav-link"
                activeProps={{ className: "nav-link nav-link-active" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {/* Modern Slide-over Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Sidebar Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 flex h-full w-[310px] max-w-[85vw] flex-col justify-between bg-card p-6 shadow-2xl border-l border-border transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          <div>
            {/* Sidebar Top Header */}
            <div className="flex items-center justify-between pb-6 border-b border-border">
              <Link to="/" onClick={() => setOpen(false)} aria-label="BHRZA Biscuits Home">
                <img src={logoImg} alt="BHRZA" className="h-10 w-auto object-contain" />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-muted"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Navigation Links */}
            <nav className="mt-6 flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {nav.map((item) => {
                const NavIcon = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="flex items-center gap-3.5 rounded-xl px-4 py-3 text-base font-bold text-foreground transition-all duration-200 hover:bg-muted hover:text-primary active:scale-[0.98]"
                    activeProps={{
                      className:
                        "flex items-center gap-3.5 rounded-xl px-4 py-3 text-base font-bold bg-primary/10 text-primary border border-primary/20",
                    }}
                    onClick={() => setOpen(false)}
                  >
                    <NavIcon className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Sidebar Footer Info */}
          <div className="border-t border-border pt-6 mt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Contact & Visit
            </p>
            <div className="mt-3 flex flex-col gap-2.5 text-xs text-muted-foreground">
              <a
                href="mailto:Nktfoods25@gmail.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <span>Nktfoods25@gmail.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                <span>Main GT Road, Nowshera, KPK</span>
              </div>
              <a
                href="https://facebook.com/bhrzabiscuits"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Facebook className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <span>facebook.com/bhrzabiscuits</span>
              </a>
            </div>

            <Button asChild className="mt-5 w-full font-bold shadow-md" size="sm">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="site-container grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_1.25fr]">
        <div>
          <img src={logoImg} alt="BHRZA" className="h-12 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-ink-muted">
            Simple pleasures, warm cups of chai, and biscuits made for sharing.
          </p>
        </div>
        <div>
          <p className="footer-title">Quick links</p>
          <div className="mt-4 grid gap-3 text-sm text-ink-muted">
            {nav
              .filter((item) => item.to !== "/quality")
              .map((item) => (
                <Link key={item.to} to={item.to} className="footer-link">
                  {item.label}
                </Link>
              ))}
          </div>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <div className="mt-4 grid gap-4 text-sm text-ink-muted">
            <a className="footer-contact" href="mailto:Nktfoods25@gmail.com">
              <Mail /> Nktfoods25@gmail.com
            </a>
            <span className="footer-contact">
              <MapPin /> Main GT Road, Nowshera, KPK, Pakistan
            </span>
            <a
              className="footer-contact"
              href="https://facebook.com/bhrzabiscuits"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook /> facebook.com/bhrzabiscuits
            </a>
            <a className="footer-link" href="https://www.bhrzabiscuits.com">
              www.bhrzabiscuits.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-line">
        <div className="site-container flex flex-col items-center justify-between gap-4 py-6 text-xs text-ink-muted sm:flex-row">
          <div>© 2026 BHRZA Biscuits. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-400">Developed by</span>
            <a
              href="https://pixelwebdevelopers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-white transition-opacity hover:opacity-85"
            >
              <img
                src={pixelLogoImg}
                alt="Pixel Web Developers"
                className="h-5 w-auto object-contain"
              />
              <span>Pixel Web Developers</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="site-container relative z-10 py-24 md:py-32">
        <p className="eyebrow text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.02] md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{text}</p>
        {children}
      </div>
    </section>
  );
}
