import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { features } from "process";

const products = [
  {
    id: "anfo-truck",
    name: "ANFO Truck",
    description:
      "Our ANFO (Ammonium Nitrate Fuel Oil) Trucks are engineered for efficiency,safety, and reliability in the most demanding mining, quarrying, and construction environments. Designed to mix, transport, and deliver bulk explosives with pinpoint accuracy,these robust vehicles ensure optimal performance while adhering to strict safety and regulatory standards.",
    features: [
      "High load capacity",
      "Corrosion resistant",
      "All-terrain performance",
      "Easy maintenance",
    ],
    image: "/jijieganfo.avif",
  },
  {
    id: "emulsion-truck",
    name: "Emulsion Truck",
    description:
      "Our Emulsion Trucks are engineered to transport and pump sensitized bulk emulsion with unmatched precision, safety, and reliability. Ideal for large-scale mining, quarrying, and infrastructure projects, these vehicles ensure consistent, high-energy explosive delivery while maximizing productivity and minimizing downtime.",
    features: ["Low vibration design", ""],
    image: "/Presentation1.avif",
  },
  {
    id: "emulsion-module",
    name: "Emulsion Module",
    description:
      "It is an automatic device for producing explosive mixtures or open emulsions by mixing aqueous solutions and oil solutions prepared from chemical raw materials.Emulsifying equipment is manufactured according to the order with a capacity of 5000-12000 kg/h",
    features: ["Low vibration design", "demo"],
    image: "/jijieganfo.avif",
  },
];

export function ProductsShowcase() {
  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
            Our Truck
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Precision-engineered truck solutions for every explosive material
            transport need{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden"
            >
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={`/our-products#${product.id}`}>
                  <Button variant="outline" className="w-full group ">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
