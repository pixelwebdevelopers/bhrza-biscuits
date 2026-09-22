import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/bhrza-logo.jpeg.asset.json";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Quality", to: "/quality" },
  { label: "Contact", to: "/contact" },
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

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="site-container grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <Link to="/" className="inline-flex min-w-0 items-center" aria-label="BHRZA Biscuits home">
          <img src={logoAsset.url} alt="BHRZA" className="h-11 w-auto max-w-[180px] object-contain" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="mobile-nav lg:hidden" aria-label="Mobile navigation">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} className="mobile-nav-link" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="site-container grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_1.25fr]">
        <div>
          <img src={logoAsset.url} alt="BHRZA" className="h-12 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-ink-muted">Simple pleasures, warm cups of chai, and biscuits made for sharing.</p>
        </div>
        <div>
          <p className="footer-title">Quick links</p>
          <div className="mt-4 grid gap-3 text-sm text-ink-muted">
            {nav.filter((item) => item.to !== "/quality").map((item) => <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <div className="mt-4 grid gap-4 text-sm text-ink-muted">
            <a className="footer-contact" href="mailto:Nktfoods25@gmail.com"><Mail /> Nktfoods25@gmail.com</a>
            <span className="footer-contact"><MapPin /> Main GT Road, Nowshera, KPK, Pakistan</span>
            <a className="footer-contact" href="https://facebook.com/bhrzabiscuits" target="_blank" rel="noreferrer"><Facebook /> facebook.com/bhrzabiscuits</a>
            <a className="footer-link" href="https://www.bhrzabiscuits.com">www.bhrzabiscuits.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-line">
        <div className="site-container py-5 text-xs text-ink-muted">© 2026 BHRZA Biscuits. All rights reserved.</div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="site-container relative z-10 py-24 md:py-32">
        <p className="eyebrow text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.02] md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{text}</p>
        {children}
      </div>
    </section>
  );
}