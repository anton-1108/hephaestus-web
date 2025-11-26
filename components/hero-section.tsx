import { Button } from "./ui/button";
import { ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-backgroundpy-20 md:py-32 ">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5">
            <Shield />
            <span className="text-sm font-medium text-foreground">
              Trusted by Leading Mining Operations
            </span>
          </div>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Specializing in Heavy-Duty{" "}
            <span className="text-primary">Explosive Trucks</span>
          </h1>
          <p className="mb-10 text-pretty text-lg  md:text-xl leading-relaxed max-w-2xl mx-auto text-black">
            We are dedicated to providing top-quality ANFO and Emulsion trucks
            tailored to the unique needs of Mongolia's mining and construction
            industries. With years of local experience, we understand the
            challenging terrain and strict safety requirements, ensuring our
            equipment is reliable, durable, and designed for maximum
            performance.
          </p>
          <div>
            <Link href="/our-products">
              <Button>
                View Our Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8882_1px, transparent_1px), linear-gradient (to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient (ellipse_60%_50%_at_50%_0%, #000_70%,transparent_110%)]">
        <img
          src="https://res.cloudinary.com/dquipdgj5/image/upload/v1764169655/gg_lo5afb.avif"
          alt=""
          className="w-full"
        />
      </div>
    </section>
  );
}
