import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { PageHero } from "@/components/site-shell";
import { demoProducts } from "@/lib/site-data";
import productsImage from "@/assets/bhrza-demo-products.jpg";

export const Route = createFileRoute("/products")({ head: () => ({ meta: [
  { title: "Biscuits — BHRZA Demo Product Catalogue" }, { name: "description", content: "Explore temporary BHRZA biscuit concepts prepared for the future official product range." },
  { property: "og:title", content: "BHRZA Biscuit Catalogue" }, { property: "og:description", content: "Preview the structure for BHRZA's future official biscuit range." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ProductsPage });

function ProductsPage() { return <>
  <PageHero eyebrow="Product catalogue" title="A biscuit for every kind of pause." text="This catalogue uses temporary concepts while BHRZA's verified product names, pack details, ingredients, and nutrition are prepared." />
  <section className="section-block bg-cream"><div className="site-container"><div className="catalogue-notice"><Info /><div><b>Demo catalogue</b><p>Names, descriptions and packaging shown here are placeholders—not confirmed products or pack designs.</p></div></div><div className="mt-10 grid gap-7 md:grid-cols-2">{demoProducts.map((product) => <article key={product.name} className="catalogue-card"><div className="aspect-[4/3] overflow-hidden bg-gold-soft"><img src={productsImage} alt={`${product.name} temporary package concept`} className={`h-full w-full object-cover transition-transform duration-500 hover:scale-105 ${product.position}`} loading="lazy" width={1600} height={1200} /></div><div className="p-7"><span className="demo-badge static inline-flex">Temporary concept</span><h2 className="mt-5 text-2xl font-extrabold">{product.name}</h2><p className="mt-3 leading-7 text-muted-foreground">{product.description}</p><dl className="placeholder-list"><div><dt>Pack size</dt><dd>To be confirmed</dd></div><div><dt>Ingredients</dt><dd>Official details coming soon</dd></div><div><dt>Nutritional information</dt><dd>Official panel coming soon</dd></div></dl></div></article>)}</div></div></section>
</>; }