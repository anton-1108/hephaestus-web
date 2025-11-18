import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 md:py-32  ">
      <div className="container mx-auto px-4 ">
        <div className="mx-auto max-w-3xl text-center bg-blue-950 from-primary to-secondary rounded-2xl p-12 md:p-16 ">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl mb-4">
            Discover Our Truck Solutio
          </h2>
          <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            Discover Our Truck Solutio Join leading mining operations worldwide
            that trust Hephaestus Machinery
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/our-products">
              <Button size="lg" variant="secondary" className="group">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/about-us">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary "
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
