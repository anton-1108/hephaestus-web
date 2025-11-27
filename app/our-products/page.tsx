import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Wrench,
  Zap,
  Gauge,
  ThermometerSun,
  Activity,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { features } from "process";

const products = [
  {
    id: "anfo-truck",
    name: "ANFO Truck",
    tagline: "Built for the Toughest Conditions",
    description:
      "This vehicle is a technique designed to transport ammonium nitrate and diesel fuel in special containers and then mix and pump these substances into the blast holes of open pit mines according to the technology. Bulk explosive charging trucks are custom-built with capacities from 8 000 to 20 000 kg to meet your operational needs.",
    image: "/jijieganfo.avif",
    specifications: [
      { label: "Capacity", value: "AN Tank 18,800 kg" },
      { label: "", value: "Fuel Tank 1,600 L" },
      { label: "Charge efficiency", value: "450kg/min" },
      { label: "Specifications vary", value: "20-tn 15-tn 10-tn 8-tn 5-tn" },
    ],
    features: [],
  },
  {
    id: "emulsion-truck",
    name: "Emulsion Truck",
    tagline: "Built for the Toughest Conditions",
    description:
      "The vehicle is a technique for transporting non-explosive mixtures (liquid emulsions) and accompanying substances in special containers and mixing these substances according to the technology in the wells of open-pit blasting areas. Bulk explosive charging trucks are custom-built with capacities from 8 000 to 20 000 kg to meet your operational needs.",
    image: "/Presentation1.avif",
    specifications: [
      { label: "Capacity", value: "Emulsion Tank (1-2) 10,000 kg" },
      { label: "", value: "Water Tank 1,100 L" },
      { label: "", value: "Gass Tank (1-2) 180 L" },
      { label: "Charge efficiency", value: "250 kg/min" },
      { label: "Charge efficiency", value: "20-tn 15-tn 10-tn 8-tn 5-tn" },
    ],
    features: [],
  },
  {
    id: "emulsion-module",
    name: "Emulsion Module",
    tagline: "Built for the Toughest Conditions",
    description:
      "It is an automatic device for producing explosive mixtures or open emulsions by mixing aqueous solutions and oil solutons prepared from chemical raw materials. Emulsifying equipment is manufactured according to the order with a capacity of 5 000-12 000 kg/h ",
    image: "",
    specifications: [
      { label: "", value: "" },
      { label: "", value: "" },
      { label: "", value: "" },
      { label: "", value: "" },
    ],
    features: [],
  },
];
export default function OurProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Our Truck
              </h1>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
                Precision-engineered solutions for every explosive material
                transport need. Built to perform in the world's most demanding
                mining environments.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8882_1px,transparent_1px), linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[sixe:4rem_4rem] [mask-image:radial-gradient (ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </section>
        {/* Products Detail Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto space-y-32">
              {products.map((product, index) => (
                <div key={product.id} id={product.id} className="scroll-mt-20">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="{`${index % 2 === 1 ? 'lg:order-2' : ''}`}">
                      <div className="relative h-96 lg:h-[500px] w-full overflow-hidden rounded-2xl border border-border shadow-xl">
                        <Image
                          src={product.image || "/jijieganfo.avif"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="{`${index % 2 === 1 ? 'lg:order-1' : ''}`}">
                      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 mb-4">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">
                          {product.tagline}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {product.name}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Specifications */}
                      <Card className="mb-6 border-border">
                        <CardContent className="p-6">
                          <h3>Technical Specifications</h3>
                          <div>
                            {product.specifications.map((spec, idx) => (
                              <div key={idx}>
                                <div className="text-sm text-muted-foreground">
                                  {spec.label}
                                </div>
                                <div className="text-base font-semibold text-foreground">
                                  {spec.value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Features */}
                      <div className="space-y-4 mb-6">
                        {product.features?.map((feature, idx) => (
                          <div key={idx} className="flex gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                              {/* <feature.icon className="h-5 w-5 text-primary" /> */}
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">
                                {/* {feature.title} */}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {/* {feature.description} */}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
