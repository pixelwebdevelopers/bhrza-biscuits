import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site-shell";
import { qualityItems } from "@/lib/site-data";
import factoryImage from "@/assets/bhrza-factory.jpg";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Packaging Information — BHRZA Biscuits" },
      {
        name: "description",
        content:
          "View the Halal, Pakistan Standards, recyclable packaging, and storage guidance supplied for BHRZA Biscuits.",
      },
      { property: "og:title", content: "BHRZA Quality & Packaging Information" },
      {
        property: "og:description",
        content: "The verified marks and care guidance represented on BHRZA packaging information.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QualityPage,
});

function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality information"
        title="The details on the pack matter."
        text="A clear presentation of the marks and care guidance included in the BHRZA packaging information supplied for this website."
      />
      <section className="section-block bg-background">
        <div className="site-container grid gap-5 md:grid-cols-2">
          {qualityItems.map((item) => (
            <article key={item.title} className="quality-detail">
              <span className="quality-symbol">{item.code}</span>
              <div>
                <h2 className="text-2xl font-extrabold">{item.title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section-block bg-cream">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Professional care</p>
            <h2 className="section-title">A quality-focused approach</h2>
            <p className="section-copy">
              The visuals on this page communicate careful food handling without making claims about
              unverified processes, capacity, certifications, or facilities.
            </p>
            <div className="urdu-callout">
              <span>Protect from Heat & Sunlight</span>
              <strong lang="ur" dir="rtl">
                دھوپ اور گرمی سے بچائیں
              </strong>
            </div>
          </div>
          <div className="image-frame aspect-[4/3]">
            <img
              src={factoryImage}
              alt="Food manufacturing professionals inspecting biscuits"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1008}
            />
          </div>
        </div>
      </section>
    </>
  );
}
