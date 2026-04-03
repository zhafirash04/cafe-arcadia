import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, getAllProductIds } from "@/lib/products";
import ProductDetailClient from "./ProductDetailClient";

interface Props {
  params: Promise<{ productId: string }>;
}

export async function generateStaticParams() {
  const ids = getAllProductIds();
  return ids.map((productId) => ({ productId }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;
  const product = getProductById(productId);

  if (!product) {
    return {
      title: "Product Not Found — Café Arcadia",
    };
  }

  return {
    title: `${product.name} — Café Arcadia`,
    description: product.description,
    openGraph: {
      title: `${product.name} — Café Arcadia`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { productId } = await params;
  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
