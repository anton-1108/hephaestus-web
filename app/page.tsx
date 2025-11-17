import { HeroSection } from "@/components/hero-section";
import { ProductsShowcase } from "@/components/products-showcase";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <SiteHeader />
      {/* <SiteFooter /> */}
      <HeroSection />
      <ProductsShowcase />
    </div>
  );
}
