import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, Search, Layers, ShieldCheck, ArrowRight, HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/site-shell";
import { bhrzaProducts } from "@/lib/site-data";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Flavours — BHRZA Wafo Crunch Wafers" },
      {
        name: "description",
        content:
          "Discover the full range of BHRZA Wafo Crunch flavoured wafers available in 8 irresistible flavours and 2 pack sizes.",
      },
      { property: "og:title", content: "BHRZA Wafo Crunch Product Catalogue" },
      {
        property: "og:description",
        content: "8 delicious wafer flavours in Small Snack Packs and Big Family Packs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

type CategoryFilter = "all" | "fruity" | "classic" | "choco-nut";

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [globalPackSize, setGlobalPackSize] = useState<"standard" | "big">("standard");

  const filteredProducts = bhrzaProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.flavor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHero
        eyebrow="Official Product Catalogue"
        title="Extra Crunchy. Irresistibly Creamy."
        text="Explore our signature BHRZA Wafo Crunch collection — baked with crisp golden wafer layers and luscious cream filling in 8 exciting flavours."
      >
        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-bold text-foreground/80">
          <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-xs border border-border">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>8 Unique Flavours</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-xs border border-border">
            <Layers className="h-4 w-4 text-primary" />
            <span>2 Pack Sizes (Small & Big)</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-xs border border-border">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>100% Halal & PSQCA Certified</span>
          </div>
        </div>
      </PageHero>

      {/* Catalogue Filter & Search Bar */}
      <section className="sticky top-20 z-30 border-y border-border bg-background/95 backdrop-blur-md py-4">
        <div className="site-container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: "all", label: "All Flavours (8)" },
              { id: "fruity", label: "Fruity Wafers (4)" },
              { id: "classic", label: "Classic & Cream (2)" },
              { id: "choco-nut", label: "Choco & Nutty (2)" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id as CategoryFilter)}
                className={`rounded-full px-4 py-2 text-xs font-extrabold transition-all duration-200 ${
                  selectedCategory === tab.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Controls: Global Pack Switcher & Search */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Global Pack View Selector */}
            <div className="flex items-center rounded-full bg-muted/70 p-1 border border-border">
              <button
                type="button"
                onClick={() => setGlobalPackSize("standard")}
                className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
                  globalPackSize === "standard"
                    ? "bg-card text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Small Packs
              </button>
              <button
                type="button"
                onClick={() => setGlobalPackSize("big")}
                className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
                  globalPackSize === "big"
                    ? "bg-card text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Big Packs
              </button>
            </div>

            {/* Search Box */}
            <div className="relative min-w-[200px]">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search flavours..."
                className="h-9 w-full rounded-full border border-border bg-background pl-9 pr-3 text-xs placeholder:text-muted-foreground focus:border-primary focus:outline-hidden focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Showcase */}
      <section className="section-block bg-cream">
        <div className="site-container">
          {filteredProducts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
              <p className="text-lg font-bold text-foreground">No flavours found</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your search query or switching to all flavours.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={`${product.id}-${globalPackSize}`}
                  product={product}
                  defaultPackSize={globalPackSize}
                />
              ))}
            </div>
          )}

          {/* Wafo Crunch Quality Feature Banner */}
          <div className="mt-16 rounded-3xl border border-border bg-card p-8 shadow-lg md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <span className="eyebrow text-primary">The Wafo Crunch Promise</span>
                <h2 className="mt-2 text-2xl font-extrabold md:text-3xl">
                  Crispy Layers, Irresistible Taste in Every Pack
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground text-sm md:text-base">
                  Every pack of BHRZA Wafo Crunch is produced with food-grade precision at our
                  facility on Main GT Road, Nowshera, KPK. Using select flour blends and creamy
                  flavour fillings, our wafers stay crisp, aromatic, and delicious.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="rounded-xl bg-muted/40 p-3 text-center">
                    <span className="text-lg font-extrabold text-primary">8</span>
                    <p className="text-xs font-semibold text-muted-foreground">Flavours</p>
                  </div>
                  <div className="rounded-xl bg-muted/40 p-3 text-center">
                    <span className="text-lg font-extrabold text-primary">2</span>
                    <p className="text-xs font-semibold text-muted-foreground">Pack Sizes</p>
                  </div>
                  <div className="rounded-xl bg-muted/40 p-3 text-center">
                    <span className="text-lg font-extrabold text-primary">100%</span>
                    <p className="text-xs font-semibold text-muted-foreground">Halal</p>
                  </div>
                  <div className="rounded-xl bg-muted/40 p-3 text-center">
                    <span className="text-lg font-extrabold text-primary">PSQCA</span>
                    <p className="text-xs font-semibold text-muted-foreground">Standards</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center rounded-2xl bg-cream p-6 text-center border border-border">
                <HeartHandshake className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-bold text-lg">Wholesale & Distribution</h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Interested in stocking BHRZA Wafo Crunch wafers in your retail or distribution network?
                </p>
                <Button asChild className="mt-5 w-full font-bold" size="sm">
                  <Link to="/contact">
                    Contact Sales Team <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
