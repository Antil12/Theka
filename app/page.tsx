import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandStoryPreview from "@/components/home/BrandStoryPreview";
import StatsBanner from "@/components/home/StatsBanner";
import EventsTeaser from "@/components/home/EventsTeaser";
import NewsletterSignup from "@/components/home/NewsletterSignup";

export default function Home() {
  return (
    <div className="w-full flex flex-col pt-0">
      <HeroSection />
      <FeaturedProducts />
      <BrandStoryPreview />
      <StatsBanner />
      <EventsTeaser />
      <NewsletterSignup />
    </div>
  );
}
