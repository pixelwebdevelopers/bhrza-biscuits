import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "Contact BHRZA Biscuits — Nowshera, Pakistan" }, { name: "description", content: "Contact NKT Food's Pvt Ltd. and BHRZA Biscuits in Nowshera, KPK, Pakistan." },
  { property: "og:title", content: "Contact BHRZA Biscuits" }, { property: "og:description", content: "Email BHRZA or find the company address and official Facebook page." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ContactPage });

function ContactPage() { return <>
  <PageHero eyebrow="Get in touch" title="Let's talk biscuits." text="Questions about BHRZA Biscuits? Send a message to the team at NKT Food's Pvt Ltd." />
  <section className="section-block bg-background"><div className="site-container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="eyebrow">Contact details</p><h2 className="section-title">We'd love to hear from you</h2><div className="mt-8 grid gap-4"><a className="contact-line" href="mailto:Nktfoods25@gmail.com"><Mail /> <span><small>Email</small>Nktfoods25@gmail.com</span></a><div className="contact-line"><MapPin /><span><small>Visit</small>Main GT Road, Nowshera, KPK, Pakistan</span></div><a className="contact-line" href="https://facebook.com/bhrzabiscuits" target="_blank" rel="noreferrer"><Facebook /><span><small>Facebook</small>@bhrzabiscuits</span></a></div></div><div className="form-panel"><h2 className="text-2xl font-extrabold">Send an enquiry</h2><p className="mt-2 mb-7 text-sm text-muted-foreground">Submitting opens your email app with the message prepared.</p><ContactForm /></div></div></section>
  <section className="pb-24 bg-background"><div className="site-container"><div className="map-placeholder"><MapPin /><div><p className="eyebrow">Location</p><h2>Nowshera, Khyber Pakhtunkhwa</h2><p>Main GT Road, Nowshera, KPK, Pakistan</p></div><span>Map placeholder</span></div></div></section>
</>; }