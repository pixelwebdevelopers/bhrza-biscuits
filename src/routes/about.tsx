import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site-shell";
import familyImage from "@/assets/bhrza-family.jpg";
import factoryImage from "@/assets/bhrza-factory.jpg";
import heroImage from "@/assets/bhrza-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About BHRZA Biscuits — Nowshera, Pakistan" },
    { name: "description", content: "Meet BHRZA Biscuits and NKT Food's Pvt Ltd., based on Main GT Road in Nowshera, KPK, Pakistan." },
    { property: "og:title", content: "About BHRZA Biscuits" },
    { property: "og:description", content: "A Pakistani biscuit brand focused on everyday moments of sharing." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: AboutPage,
});

function AboutPage() { return <>
  <PageHero eyebrow="Our story" title="A simple pleasure, proudly Pakistani." text="BHRZA is a biscuit brand manufactured by NKT Food's Pvt Ltd. in Nowshera, Khyber Pakhtunkhwa." />
  <section className="section-block bg-background"><div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20"><div className="image-frame aspect-[4/3]"><img src={familyImage} alt="Pakistani family enjoying tea and biscuits" className="h-full w-full object-cover" width={1600} height={1008} /></div><div><p className="eyebrow">BHRZA Biscuits</p><h2 className="section-title">Created for sharing</h2><p className="section-copy">Our brand philosophy is grounded in familiar rituals: a biscuit beside a warm cup of chai, a plate passed around the room, and a small moment made better together.</p><div className="mt-8 grid gap-5 sm:grid-cols-2"><div className="mini-value"><Heart /><b>Family moments</b><span>Everyday enjoyment, shared naturally.</span></div><div className="mini-value"><Sparkles /><b>Quality focused</b><span>A thoughtful approach to the simple biscuit.</span></div></div></div></div></section>
  <section className="section-block bg-cream"><div className="site-container grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><p className="eyebrow">NKT Food's Pvt Ltd.</p><h2 className="section-title">Rooted in Nowshera</h2><p className="section-copy">BHRZA Biscuits is manufactured by NKT Food's Pvt Ltd. at Main GT Road, Nowshera, KPK, Pakistan.</p><div className="mt-7 flex gap-3 text-sm font-bold"><MapPin className="text-primary" />Main GT Road, Nowshera, KPK, Pakistan</div></div><div className="image-frame aspect-[8/5]"><img src={factoryImage} alt="Pakistani professionals in a food manufacturing environment" className="h-full w-full object-cover" loading="lazy" width={1600} height={1008} /></div></div></section>
  <section className="section-block bg-background"><div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20"><div className="image-frame aspect-[4/3]"><img src={heroImage} alt="Biscuits and Pakistani chai" className="h-full w-full object-cover object-right" loading="lazy" width={1920} height={1088} /></div><div><p className="eyebrow">Our direction</p><h2 className="section-title">Warm, familiar, and ready to share</h2><p className="section-copy">BHRZA is presented as a modern Pakistani food brand built around approachable taste, tea-time culture, and the pleasure of coming together. This brand story can grow as more verified company information becomes available.</p><Button asChild size="lg" className="mt-8"><Link to="/products">Explore demo range <ArrowRight /></Link></Button></div></div></section>
</>; }