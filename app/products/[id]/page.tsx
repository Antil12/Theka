"use client";

import { useParams } from "next/navigation";
import { products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import Button from "@/components/ui/Button";
import ImageReveal from "@/components/ui/ImageReveal";
import Badge from "@/components/ui/Badge";
import CountUp from "@/components/ui/CountUp";
import { useEffect, useState } from "react";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const product = products.find((p) => p.id === id);

  const [mainImage, setMainImage] = useState(product?.image || "");
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) setMainImage(product.image);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-[80px]">
        <h1 className="font-display text-4xl text-pure">Product Not Found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }, 800);
  };

  return (
    <div className="w-full min-h-screen bg-obsidian pt-[120px] pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Breadcrumb */}
        <div className="font-label text-[10px] text-ash tracking-widest uppercase mb-12 flex items-center gap-3">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span className="text-void opacity-50">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </span>
          <Link href="/products" className="hover:text-gold transition-colors">
            Collection
          </Link>
          <span className="text-void opacity-50">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </span>
          <span className="text-gold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Images */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-[120px] self-start">
            <div className="relative aspect-[3/4] w-full bg-[#0A0A0A] p-12 overflow-hidden rounded-sm group flex items-center justify-center border border-border-dim/50">
              {/* Subtle ambient glow behind bottle */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[50%] bg-gold/10 blur-[80px] rounded-full pointer-events-none" />

              <ImageReveal
                src={mainImage}
                alt={product.name}
                className="w-full h-full relative z-10"
                imageClassName="object-contain"
                priority
              />
            </div>

            {/* Thumbnail Row Mock */}
            <div className="grid grid-cols-3 gap-4">
              {[product.image, product.image, product.image].map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(img)}
                  className={`relative aspect-square bg-[#0A0A0A] border rounded-sm overflow-hidden p-4 flex items-center justify-center transition-colors duration-300 ${mainImage === img ? "border-gold" : "border-border-dim hover:border-gold/50"}`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i}`}
                    fill
                    className="object-contain p-4"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-7 flex flex-col pt-4">
            <div className="flex gap-3 mb-6">
              <Badge variant="outline">{product.type}</Badge>
              {product.badge && <Badge>{product.badge}</Badge>}
            </div>

            <h1 className="font-editorial text-[32px] sm:text-[42px] md:text-[52px] text-pure leading-[1.1] mb-6">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    className="relative w-[18px] h-[18px] text-transparent overflow-hidden"
                  >
                    <svg
                      className="absolute w-full h-full text-border-dim"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width:
                          star <= product.rating
                            ? "100%"
                            : star - 0.5 <= product.rating
                              ? "50%"
                              : "0%",
                      }}
                      transition={{ duration: 1, delay: star * 0.1 }}
                      className="absolute left-0 top-0 h-full text-gold overflow-hidden"
                    >
                      <svg
                        className="w-[18px] h-[18px]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </motion.div>
                  </div>
                ))}
              </div>
              <span className="font-label text-[11px] text-ash tracking-widest">
                {product.rating} / 5
              </span>
            </div>

            <div className="font-data text-[36px] sm:text-[48px] text-gold mb-10 flex items-center">
              ₹<CountUp to={product.price} duration={1.5} />
            </div>

            {/* Alcohol Bar */}
            <div className="mb-12">
              <div className="flex justify-between font-label text-[11px] text-pure uppercase tracking-widest mb-3">
                <span>Alcohol By Volume</span>
                <span>{product.alcoholPercentage}%</span>
              </div>
              <div className="w-full h-[1px] bg-border-dim relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${product.alcoholPercentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute left-0 top-0 h-full bg-gold"
                />
              </div>
            </div>

            <p className="font-body text-[16px] text-silk/90 leading-relaxed max-w-2xl mb-6">
              {product.shortDescription}
            </p>
            <p className="font-body text-[16px] text-ash leading-relaxed max-w-2xl mb-16">
              {product.description}
            </p>

            {/* Tasting Notes */}
            <h3 className="font-label text-[11px] text-pure uppercase tracking-widest mb-6 border-b border-border-dim pb-4">
              Tasting Notes
            </h3>
            <div className="flex flex-col gap-6 mb-16">
              {[
                { label: "Nose", text: product.tastingNotes.nose },
                { label: "Palate", text: product.tastingNotes.palate },
                { label: "Finish", text: product.tastingNotes.finish },
              ].map((note, i) => (
                <motion.div
                  key={note.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  </div>
                  <div>
                    <h4 className="font-editorial text-[18px] text-gold mb-1">
                      {note.label}
                    </h4>
                    <p className="font-body text-ash text-[14px]">
                      {note.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 max-w-md">
              <Button
                onClick={handleAddToCart}
                disabled={isAdding || isAdded}
                magnetic={false}
                size="lg"
                className="w-full h-[54px]"
              >
                {isAdding ? "ADDING..." : isAdded ? "ADDED ✓" : "ADD TO CART"}
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="w-full h-[54px]"
                magnetic={false}
              >
                ADD TO WISHLIST
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
