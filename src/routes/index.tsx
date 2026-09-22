import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Facebook, Heart, MapPin, Sparkles, Sun, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { demoProducts, qualityItems } from "@/lib/site-data";
import heroImage from "@/assets/bhrza-hero.jpg";
import productsImage from "@/assets/bhrza-demo-products.jpg";
import familyImage from "@/assets/bhrza-family.jpg";
import factoryImage from "@/assets/bhrza-factory.jpg";
import logoAsset from "@/assets/bhrza-logo.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "BHRZA Biscuits — Made for Every Moment" },
    { name: "description", content: "Discover BHRZA Biscuits, proudly made by NKT Food's Pvt Ltd. in Nowshera, KPK, Pakistan." },
    { property: "og:title", content: "BHRZA Biscuits — Made for Every Moment" },
    { property: "og:description", content: "Pakistani biscuits for tea time, family moments and everyday enjoyment." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="hero-section">
        <img src={heroImage} alt="Golden biscuits served with Pakistani chai" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1088} fetchPriority="high" />
        <div className="hero-shade absolute inset-0" />
        <div className="site-container relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-16">
          <div className="max-w-2xl text-hero-foreground">
            <img src={logoAsset.url} alt="BHRZA" className="mb-8 h-16 w-auto md:h-20" />
            <p className="eyebrow text-gold-light">Proudly made in Pakistan</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[0.98] md:text-7xl lg:text-8xl">Made for<br />Every Moment</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-hero-muted md:text-xl">Discover the delicious taste of BHRZA Biscuits, proudly made in Pakistan.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero"><Link to="/products">Explore Our Biscuits <ArrowRight /></Link></Button>
              <Button asChild size="lg" variant="cream"><Link to="/about">About BHRZA</Link></Button>
            </div>
          </div>
        </div>
        <div className="scroll-cue"><span /> Discover BHRZA</div>
      </section>

      <section className="section-block bg-background">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="image-frame aspect-[4/3]"><img src={heroImage} alt="A plate of golden biscuits with chai" className="h-full w-full object-cover object-right" loading="lazy" width={1920} height={1088} /></div>
          <div><p className="eyebrow">A familiar pleasure</p><h2 className="section-title">A Taste Made<br />to Be Shared</h2><p className="section-copy">BHRZA brings together the simple pleasure of biscuits with a focus on creating treats families can enjoy every day. From quiet tea breaks to lively gatherings, every plate is an invitation to pause and share.</p><Button asChild variant="outline" size="lg" className="mt-8"><Link to="/about">Our story <ArrowRight /></Link></Button></div>
        </div>
      </section>

      <section className="section-block bg-cream">
        <div className="site-container"><div className="section-heading-row"><div><p className="eyebrow">A first look</p><h2 className="section-title">Find Your Favourite</h2></div><p className="demo-note">Temporary product concepts — ready to replace with the official range.</p></div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {demoProducts.map((product) => <article key={product.name} className="product-card"><div className="product-image"><img src={productsImage} alt={`${product.name} demo packaging concept`} className={`h-full w-full object-cover ${product.position}`} loading="lazy" width={1600} height={1200} /><span className="demo-badge">Demo concept</span></div><div className="p-6"><h3 className="text-xl font-bold">{product.name}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{product.description}</p><Button asChild variant="link" className="mt-3 h-auto p-0"><Link to="/products">View product <ArrowRight /></Link></Button></div></article>)}
          </div>
        </div>
      </section>

      <section className="section-block bg-background"><div className="site-container"><div className="max-w-2xl"><p className="eyebrow">Why BHRZA</p><h2 className="section-title">Made for Life’s Everyday Moments</h2></div><div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2 lg:grid-cols-4">{[
        [MapPin,"Made in Pakistan","Proudly manufactured in Nowshera, KPK."],[Sparkles,"Quality Focused","Thoughtfully produced for everyday enjoyment."],[Heart,"Made for Sharing","Biscuits for tea time, family moments and everyday cravings."],[Sun,"Easy to Enjoy","A simple treat for every occasion."],
      ].map(([Icon,title,text]) => { const FeatureIcon = Icon as typeof MapPin; return <div key={String(title)} className="feature-tile"><FeatureIcon className="text-primary" /><h3>{String(title)}</h3><p>{String(text)}</p></div>; })}</div></div></section>

      <section className="editorial-band"><img src={familyImage} alt="Pakistani family sharing biscuits and chai at home" className="h-full w-full object-cover" loading="lazy" width={1600} height={1008} /><div className="editorial-overlay"><p className="eyebrow text-gold-light">Together tastes better</p><h2>Made for the moments<br />that feel like home.</h2></div></section>

      <section className="section-block bg-cream"><div className="site-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"><div><p className="eyebrow">Our company</p><h2 className="section-title">From Nowshera,<br />Pakistan</h2><p className="section-copy">BHRZA Biscuits is manufactured by NKT Food's Pvt Ltd. at Main GT Road, Nowshera, KPK, Pakistan.</p><div className="mt-8 border-l-2 border-primary pl-5"><p className="font-bold">NKT Food's Pvt Ltd.</p><p className="mt-1 text-sm text-muted-foreground">Main GT Road, Nowshera, KPK, Pakistan</p></div></div><div className="image-frame aspect-[8/5]"><img src={factoryImage} alt="Pakistani food manufacturing professionals inspecting biscuits" className="h-full w-full object-cover" loading="lazy" width={1600} height={1008} /></div></div></section>

      <section className="quality-strip"><div className="site-container"><div className="text-center"><p className="eyebrow text-primary">Packaging information</p><h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Clear marks. Thoughtful care.</h2></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{qualityItems.map((item) => <div key={item.title} className="quality-card"><span className="quality-symbol">{item.code}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div><p className="mt-6 text-center text-xs text-muted-foreground">Symbols shown reflect the packaging information provided for this website.</p></div></section>

      <section className="section-block bg-background"><div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20"><div className="image-frame aspect-square lg:aspect-[4/3]"><img src={heroImage} alt="Pakistani chai served alongside several biscuit varieties" className="h-full w-full object-cover object-right" loading="lazy" width={1920} height={1088} /></div><div><p className="eyebrow">The everyday ritual</p><h2 className="section-title">Made for Tea Time</h2><p className="section-copy">A warm cup, a generous plate, and time to reconnect. The biscuit varieties pictured are serving inspiration and do not represent a confirmed BHRZA product range.</p><div className="mt-7 flex items-center gap-3 text-sm font-bold text-primary"><Wheat /> Serve. Share. Enjoy.</div></div></div></section>

      <section className="section-block bg-cream"><div className="site-container grid items-center gap-10 md:grid-cols-[1fr_auto]"><div><div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground"><Facebook /></div><p className="eyebrow mt-6">Join the community</p><h2 className="section-title">More BHRZA moments</h2><p className="section-copy">Follow BHRZA Biscuits on Facebook for brand updates and everyday inspiration.</p></div><Button asChild size="lg"><a href="https://facebook.com/bhrzabiscuits" target="_blank" rel="noreferrer">@bhrzabiscuits <ArrowRight /></a></Button></div></section>

      <section className="contact-band"><div className="site-container grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-20"><div><p className="eyebrow text-gold-light">Contact BHRZA</p><h2 className="mt-4 text-4xl font-extrabold md:text-6xl">Let's Connect</h2><p className="mt-5 max-w-md leading-7 text-primary-soft">Have a question about BHRZA Biscuits? Get in touch with our team.</p><a href="mailto:Nktfoods25@gmail.com" className="mt-7 inline-flex items-center gap-2 font-bold"><span className="grid h-9 w-9 place-items-center rounded-full bg-cream text-primary"><MailIcon /></span>Nktfoods25@gmail.com</a></div><ContactForm inverse /></div></section>
    </>
  );
}

function MailIcon() { return <span aria-hidden="true">@</span>; }
