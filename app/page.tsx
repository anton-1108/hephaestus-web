import { CTASection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";
import { ProductsShowcase } from "@/components/products-showcase";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VideoSection } from "@/components/video-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <SiteHeader />
      <HeroSection />
      <ProductsShowcase />
      <VideoSection />
      <FeaturesSection />
      <CTASection />
      <SiteFooter />
    </div>
  );
}
