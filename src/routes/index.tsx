import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Facebook, Heart, MapPin, Sparkles, Sun, Wheat, Layers, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { bhrzaProducts, qualityItems } from "@/lib/site-data";
import { ProductCard } from "@/components/product-card";
import heroImage from "@/assets/bhrza-hero.jpg";
import familyImage from "@/assets/bhrza-family.jpg";
import factoryImage from "@/assets/bhrza-factory.jpg";
import logoImg from "@/assets/bhrza-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BHRZA Biscuits & Wafers — Made for Every Moment" },
      {
        name: "description",
        content:
          "Discover BHRZA Wafo Crunch wafers & biscuits, proudly made by NKT Food's Pvt Ltd. in Nowshera, KPK, Pakistan.",
      },
      { property: "og:title", content: "BHRZA Biscuits & Wafers — Made for Every Moment" },
      {
        property: "og:description",
        content: "Pakistani flavoured wafers and biscuits for tea time, family moments and everyday enjoyment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src={heroImage}
          alt="Golden biscuits served with Pakistani chai"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1088}
          fetchPriority="high"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="site-container relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-16">
          <div className="max-w-2xl text-hero-foreground">
            <img src={logoImg} alt="BHRZA" className="mb-8 h-16 w-auto md:h-20" />
            <p className="eyebrow text-gold-light">Proudly made in Nowshera, Pakistan</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[0.98] md:text-7xl lg:text-8xl">
              Made for
              <br />
              Every Moment
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-hero-muted md:text-xl">
              Experience the irresistible taste of <strong>BHRZA Wafo Crunch</strong> — extra
              crunchy golden wafers with smooth, creamy filling in 8 delicious flavours.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero">
                <Link to="/products">
                  Explore Wafo Crunch <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="cream">
                <Link to="/about">About BHRZA</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="scroll-cue">
          <span /> Discover BHRZA
        </div>
      </section>

      {/* Brand Intro Section */}
      <section className="section-block bg-background">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="image-frame aspect-[4/3]">
            <img
              src={heroImage}
              alt="A plate of golden biscuits with chai"
              className="h-full w-full object-cover object-right"
              loading="lazy"
              width={1920}
              height={1088}
            />
          </div>
          <div>
            <p className="eyebrow">A familiar pleasure</p>
            <h2 className="section-title">
              A Taste Made
              <br />
              to Be Shared
            </h2>
            <p className="section-copy">
              BHRZA brings together the simple pleasure of crispy wafers and biscuits with a focus
              on creating treats families can enjoy every day. From quiet morning tea breaks to lively
              family gatherings, every pack is an invitation to pause and celebrate togetherness.
            </p>
            <div className="mt-7 flex flex-wrap gap-4 text-xs font-bold text-foreground">
              <div className="flex items-center gap-2 rounded-lg bg-muted/60 px-3 py-2">
                <Layers className="h-4 w-4 text-primary" />
                <span>Multi-Layer Crisp Wafers</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-muted/60 px-3 py-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>100% Halal Certified</span>
              </div>
            </div>
            <Button asChild variant="outline" size="lg" className="mt-8">
              <Link to="/about">
                Our story <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Flagship Products Showcase Section */}
      <section className="section-block bg-cream">
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Flagship Wafer Collection</p>
              <h2 className="section-title">BHRZA Wafo CRUNCH</h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="demo-note">
                Available in Small Snack Packs & Big Family Packs. Click tabs on cards to switch
                pack view.
              </p>
              <Button asChild variant="default" size="sm" className="font-bold self-start sm:self-auto">
                <Link to="/products">
                  View All 8 Flavours <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bhrzaProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why BHRZA Section */}
      <section className="section-block bg-background">
        <div className="site-container">
          <div className="max-w-2xl">
            <p className="eyebrow">Why BHRZA</p>
            <h2 className="section-title">Made for Life’s Everyday Moments</h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              [MapPin, "Made in Pakistan", "Proudly manufactured on Main GT Road, Nowshera, KPK."],
              [Sparkles, "Quality Focused", "Crispy golden layers with luscious creamy fillings."],
              [
                Heart,
                "Made for Sharing",
                "Available in individual snack packs & large family packs.",
              ],
              [Sun, "Easy to Enjoy", "A delicious crispy treat for school, tea time & work breaks."],
            ].map(([Icon, title, text]) => {
              const FeatureIcon = Icon as typeof MapPin;
              return (
                <div key={String(title)} className="feature-tile">
                  <FeatureIcon className="text-primary" />
                  <h3>{String(title)}</h3>
                  <p>{String(text)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial Visual Banner */}
      <section className="editorial-band">
        <img
          src={familyImage}
          alt="Pakistani family sharing biscuits and chai at home"
          className="h-full w-full object-cover"
          loading="lazy"
          width={1600}
          height={1008}
        />
        <div className="editorial-overlay">
          <p className="eyebrow text-gold-light">Together tastes better</p>
          <h2>
            Made for the moments
            <br />
            that feel like home.
          </h2>
        </div>
      </section>

      {/* Manufacturing & Roots */}
      <section className="section-block bg-cream">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Our company</p>
            <h2 className="section-title">
              From Nowshera,
              <br />
              Pakistan
            </h2>
            <p className="section-copy">
              BHRZA Biscuits & Wafers is proudly manufactured by NKT Food's Pvt Ltd. at Main GT Road,
              Nowshera, KPK, Pakistan.
            </p>
            <div className="mt-8 border-l-2 border-primary pl-5">
              <p className="font-bold">NKT Food's Pvt Ltd.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Main GT Road, Nowshera, KPK, Pakistan
              </p>
            </div>
          </div>
          <div className="image-frame aspect-[8/5]">
            <img
              src={factoryImage}
              alt="Pakistani food manufacturing professionals inspecting biscuits"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1008}
            />
          </div>
        </div>
      </section>

      {/* Packaging & Quality Standards Strip */}
      <section className="quality-strip">
        <div className="site-container">
          <div className="text-center">
            <p className="eyebrow text-primary">Packaging information</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Clear marks. Thoughtful care.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {qualityItems.map((item) => (
              <div key={item.title} className="quality-card">
                <span className="quality-symbol">{item.code}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            All marks and quality standards comply with national Pakistani food packaging standards.
          </p>
        </div>
      </section>

      {/* Tea Time Ritual Section */}
      <section className="section-block bg-background">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="image-frame aspect-square lg:aspect-[4/3]">
            <img
              src={heroImage}
              alt="Pakistani chai served alongside Wafo Crunch wafers"
              className="h-full w-full object-cover object-right"
              loading="lazy"
              width={1920}
              height={1088}
            />
          </div>
          <div>
            <p className="eyebrow">The everyday ritual</p>
            <h2 className="section-title">Made for Tea Time</h2>
            <p className="section-copy">
              A warm cup of steaming doodh patti chai, a plate of fresh crunchy wafers, and time to
              reconnect. BHRZA Wafo Crunch is the ultimate companion for evening tea breaks with
              family and friends.
            </p>
            <div className="mt-7 flex items-center gap-3 text-sm font-bold text-primary">
              <Wheat /> Crispy Layers. Velvety Filling. Pure Delight.
            </div>
          </div>
        </div>
      </section>

      {/* Social Community */}
      <section className="section-block bg-cream">
        <div className="site-container grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Facebook />
            </div>
            <p className="eyebrow mt-6">Join the community</p>
            <h2 className="section-title">More BHRZA moments</h2>
            <p className="section-copy">
              Follow BHRZA Biscuits on Facebook for brand updates, new flavour announcements, and everyday inspiration.
            </p>
          </div>
          <Button asChild size="lg">
            <a href="https://facebook.com/bhrzabiscuits" target="_blank" rel="noreferrer">
              @bhrzabiscuits <ArrowRight />
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="contact-band">
        <div className="site-container grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
          <div>
            <p className="eyebrow text-gold-light">Contact BHRZA</p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">Let's Connect</h2>
            <p className="mt-5 max-w-md leading-7 text-primary-soft">
              Have a question about BHRZA Biscuits or interested in retail distribution? Get in touch with our team.
            </p>
            <a
              href="mailto:Nktfoods25@gmail.com"
              className="mt-7 inline-flex items-center gap-2 font-bold"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-cream text-primary">
                <MailIcon />
              </span>
              Nktfoods25@gmail.com
            </a>
          </div>
          <ContactForm inverse />
        </div>
      </section>
    </>
  );
}

function MailIcon() {
  return <span aria-hidden="true">@</span>;
}
