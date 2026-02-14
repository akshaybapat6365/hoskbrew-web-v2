import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

const PLATFORM_LABELS: Record<string, string> = {
  nes: "NES",
  snes: "SNES",
  gb: "Game Boy",
  gba: "GBA",
  genesis: "Genesis",
  multi: "Multi-Platform",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | HoskBrew Products`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <section className="relative border-b border-brand-border bg-brand-bg-elevated pt-28 pb-16 sm:pt-32 sm:pb-20">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <ImageLightbox src={product.image} alt={product.name} />

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <Badge variant="accent">
                  {PLATFORM_LABELS[product.platform] ?? product.platform}
                </Badge>
                <Badge variant="primary">{product.category}</Badge>
              </div>

              <h1 className="text-display text-brand-text">{product.name}</h1>
              <p className="text-subhead">{product.tagline}</p>

              <p className="text-body">{product.description}</p>

              <div className="flex gap-3 pt-2">
                <Button href="/contact" variant="primary" size="lg">
                  Talk to Us
                </Button>
                <Button href="/products" variant="secondary" size="lg">
                  Back to Products
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {product.gallery && product.gallery.length > 0 && (
        <Section background="elevated" spacing="normal">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-heading text-brand-text retro-glow-blue">
                Physical Kit Gallery
              </h2>
              <p className="text-subhead max-w-2xl">
                Packaging, manual, and cartridge presentation assets — click any
                image to view it full size.
              </p>

              {slug === "crystal-mines" && (
                <div className="pt-1">
                  <Button
                    href="/products/offerings/crystal-mines"
                    variant="outline"
                  >
                    View Curated Templates
                  </Button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {product.gallery.map((src, i) => (
                <ImageLightbox
                  key={src}
                  src={src}
                  alt={`${product.name} gallery image ${i + 1}`}
                  fit="contain"
                  backdrop="grid"
                  className="retro-border-glow"
                />
              ))}
            </div>
          </div>
        </Section>
      )}

      {product.specs && product.specs.length > 0 && (
        <Section spacing="normal">
          <h2 className="text-heading text-brand-text mb-8">Specifications</h2>
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {product.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col gap-1 rounded-lg border border-brand-border bg-brand-bg-elevated p-4"
              >
                <dt className="text-xs uppercase tracking-wide text-brand-text-dim">
                  {spec.label}
                </dt>
                <dd className="text-sm font-medium text-brand-text">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      )}
    </>
  );
}
