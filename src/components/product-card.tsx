import { useState } from "react";
import { Check, Sparkles, Eye, Layers, ShieldCheck, Box } from "lucide-react";
import type { ProductItem } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ProductCardProps {
  product: ProductItem;
  defaultPackSize?: "standard" | "big";
  priority?: boolean;
}

export function ProductCard({
  product,
  defaultPackSize = "standard",
}: ProductCardProps) {
  const [packSize, setPackSize] = useState<"standard" | "big">(defaultPackSize);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const currentPack = product.packSizes[packSize];

  return (
    <>
      <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card text-card-foreground shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40">
        {/* Card Header & Product Preview Container */}
        <div
          className="relative flex flex-col items-center justify-center overflow-hidden p-6 pb-4 transition-colors duration-500"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${product.theme.bgLight} 0%, rgba(255,255,255,0.85) 75%)`,
          }}
        >
          {/* Ambient Flavor Glow */}
          <div
            className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full blur-3xl transition-opacity duration-500 opacity-60 group-hover:opacity-90"
            style={{ backgroundColor: product.theme.accentColor }}
          />

          {/* Top Bar inside Card: Tag & Pack Switcher */}
          <div className="relative z-10 flex w-full items-center justify-between gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold tracking-wide shadow-sm backdrop-blur-md"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                color: product.theme.textColor,
                border: `1px solid ${product.theme.accentColor}40`,
              }}
            >
              <Sparkles className="h-3 w-3" style={{ color: product.theme.accentColor }} />
              {product.tag}
            </span>

            {/* Pack Size Selector Pill */}
            <div className="flex items-center rounded-full bg-white/90 p-0.5 shadow-sm border border-border/60 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setPackSize("standard")}
                className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition-all duration-200 ${
                  packSize === "standard"
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Small / Standard Pack"
              >
                Small Pack
              </button>
              <button
                type="button"
                onClick={() => setPackSize("big")}
                className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition-all duration-200 ${
                  packSize === "big"
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Big / Family Value Pack"
              >
                Big Pack
              </button>
            </div>
          </div>

          {/* Product Pack Image Display with Smooth Transitions */}
          <div className="relative mt-4 flex aspect-[16/10] w-full items-center justify-center p-2">
            <img
              key={currentPack.image}
              src={currentPack.image}
              alt={`${product.name} - ${currentPack.label}`}
              className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.14)] transition-all duration-300 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_18px_30px_rgba(0,0,0,0.2)]"
              loading="lazy"
            />
          </div>

          {/* Pack Indicator Badge */}
          <div className="relative z-10 mt-2 flex w-full items-center justify-between text-[11px] text-muted-foreground">
            <span className="font-semibold text-foreground/80 flex items-center gap-1">
              <Box className="h-3 w-3 text-primary" />
              {currentPack.label}
            </span>
            <span className="rounded-md bg-white/80 px-2 py-0.5 font-bold text-foreground/70 border border-border/40">
              {currentPack.weight}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="flex flex-1 flex-col justify-between p-6 pt-5">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-primary">
                {product.series}
              </span>
              <span className="text-xs font-semibold text-muted-foreground">
                {product.categoryLabel}
              </span>
            </div>

            <h3 className="mt-1 text-xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary">
              {product.name}
            </h3>

            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
              {product.shortDescription}
            </p>

            {/* Quick highlights */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {product.features.slice(0, 2).map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-1 rounded-md bg-muted/60 px-2 py-1 text-[11px] font-medium text-foreground/80"
                >
                  <Check className="h-3 w-3 text-primary flex-shrink-0" />
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Card Footer Actions */}
          <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
            <div className="flex items-center gap-1.5 text-xs font-bold text-foreground/80">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Halal & PSQCA</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setDetailsOpen(true)}
              className="gap-1.5 font-bold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
            >
              <Eye className="h-3.5 w-3.5" />
              Details
            </Button>
          </div>
        </div>
      </article>

      {/* Product In-Depth Quick View Modal */}
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="max-w-2xl overflow-hidden p-0 sm:rounded-2xl">
          <div
            className="p-6 pb-4"
            style={{
              background: `radial-gradient(circle at 50% 30%, ${product.theme.bgLight} 0%, rgba(255,255,255,0.95) 80%)`,
            }}
          >
            <DialogHeader>
              <div className="flex items-center justify-between gap-4">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold"
                  style={{
                    backgroundColor: "white",
                    color: product.theme.textColor,
                    border: `1px solid ${product.theme.accentColor}50`,
                  }}
                >
                  <Sparkles className="h-3 w-3" style={{ color: product.theme.accentColor }} />
                  {product.tag}
                </span>

                {/* Size toggle in modal */}
                <div className="flex items-center rounded-full bg-white p-1 shadow-xs border border-border">
                  <button
                    type="button"
                    onClick={() => setPackSize("standard")}
                    className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
                      packSize === "standard"
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Small Pack
                  </button>
                  <button
                    type="button"
                    onClick={() => setPackSize("big")}
                    className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
                      packSize === "big"
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Big Family Pack
                  </button>
                </div>
              </div>

              <DialogTitle className="mt-3 text-2xl font-extrabold md:text-3xl">
                {product.name}
              </DialogTitle>
              <DialogDescription className="text-sm font-medium text-muted-foreground">
                {product.series} · {product.flavor} Flavoured Wafers
              </DialogDescription>
            </DialogHeader>

            {/* High-res Image Showcase */}
            <div className="relative mt-4 flex aspect-[16/9] w-full items-center justify-center p-4">
              <img
                src={currentPack.image}
                alt={`${product.name} - ${currentPack.label}`}
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>

          {/* Modal Details Section */}
          <div className="space-y-5 p-6 pt-2">
            <p className="text-sm leading-relaxed text-foreground/80">{product.description}</p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border/80 bg-muted/30 p-3.5">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <Layers className="h-4 w-4 text-primary" />
                  Product Highlights
                </div>
                <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border/80 bg-muted/30 p-3.5">
                <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                  <Box className="h-4 w-4 text-primary" />
                  Packaging Specifications
                </div>
                <div className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Current View:</strong> {currentPack.label} (
                    {currentPack.weight})
                  </p>
                  <p>
                    <strong className="text-foreground">Available Formats:</strong> Small Pack & Big
                    Family Pack
                  </p>
                  <p>
                    <strong className="text-foreground">Storage:</strong> Keep dry & cool away from
                    direct sunlight
                  </p>
                </div>
              </div>
            </div>

            {/* Ingredients & Pairings */}
            <div className="space-y-3 rounded-xl border border-border/80 bg-background p-4 text-xs">
              <div>
                <span className="font-bold text-foreground">Ingredients: </span>
                <span className="text-muted-foreground">{product.ingredients}</span>
              </div>
              <div>
                <span className="font-bold text-foreground">Serving Suggestion: </span>
                <span className="text-muted-foreground">{product.pairingNotes}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>PSQCA & 100% Halal Verified</span>
              </div>
              <Button onClick={() => setDetailsOpen(false)} size="sm">
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
