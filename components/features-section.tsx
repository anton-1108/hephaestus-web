import { Card, CardContent } from "./ui/card";
import { Shield, Award, Users, TrendingUp } from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="quality-policy" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
            Quality Policy of "Hephaestus Machinery"
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our company manufactures special-purpose vehicles designed for
            charging boreholes with explosives under open-pit mining conditions,
            utilizing modern advanced technologies and innovative solutions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <Card className="border-border bg-background">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Our Principals
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 ">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Compliance
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Fully comply with international and national laws and
                      regulatory requirements
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Quality & Service
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Provide high-quality products and reliable service that
                      meet the needs and expectations of clients and customers
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Continuous Improvement
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Effectively implement the quality management system and
                      continuously improve our operations
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Safety First
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Adhere to the principle of prioritizing safety and
                      reliability in all our activities
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
