import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site-shell";
import { demoProducts } from "@/lib/site-data";
import productsImage from "@/assets/bhrza-demo-products.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Biscuits — BHRZA Product Catalogue" },
      {
        name: "description",
        content: "Explore BHRZA biscuit concepts and official product range.",
      },
      { property: "og:title", content: "BHRZA Biscuit Catalogue" },
      { property: "og:description", content: "Explore BHRZA's biscuit range." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product catalogue"
        title="A biscuit for every kind of pause."
        text="Discover our delicious selection of biscuits, crafted with care for tea time, family moments, and everyday enjoyment."
      />
      <section className="section-block bg-cream">
        <div className="site-container">
          <div className="grid gap-7 md:grid-cols-2">
            {demoProducts.map((product) => (
              <article key={product.name} className="catalogue-card">
                <div className="aspect-[4/3] overflow-hidden bg-gold-soft">
                  <img
                    src={productsImage}
                    alt={`${product.name} package`}
                    className={`h-full w-full object-cover transition-transform duration-500 hover:scale-105 ${product.position}`}
                    loading="lazy"
                    width={1600}
                    height={1200}
                  />
                </div>
                <div className="p-7">
                  <span className="demo-badge static inline-flex">{product.tag}</span>
                  <h2 className="mt-5 text-2xl font-extrabold">{product.name}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{product.description}</p>
                  <dl className="placeholder-list">
                    <div>
                      <dt>Pack size</dt>
                      <dd>{product.packSize}</dd>
                    </div>
                    <div>
                      <dt>Key Ingredients</dt>
                      <dd>{product.ingredients}</dd>
                    </div>
                    <div>
                      <dt>Quality Standards</dt>
                      <dd>100% Halal · PSQCA Certified</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
