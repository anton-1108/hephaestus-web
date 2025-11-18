import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Users, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "Every vehicle is designed with meticulous attention to detail, ensuring maximum perfor",
  },
];

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background py-20 md:py-32">
          <div>
            <div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                About Us
              </h1>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
                Hephaestus Machinery - Forging Excellence in Explosives Handling
                Equipment
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div>
              <Card>
                <CardContent>
                  <p>
                    Hephaestus Machinery is a premier designer and manufacturer
                    of specialized explosives handling equipment, including ANFO
                    and Emulsion trucks. Based in the global mining heartland of
                    Mongolia, we have an innate understanding of the challenges
                    faced by the industry-from extreme climates to remote
                    locations and the relentless demand for productivity.
                  </p>
                  <p>
                    Our name, drawn from the Greek god of metalworking and
                    craftsmanship, reflects our core philosophy: we forge
                    durable, powerful, and precise machinery. Every truck that
                    leaves our fabrication shop is engineered to not just meet,
                    but exceed, the harsh realities of a modern mine site.
                  </p>
                  <p>
                    We are more than just manufacturers: we are partners to our
                    clients. Our deep technical expertise allows us to provide
                    custom solutions, ensuring each vehicle is perfectly matched
                    to your specific operational needs and terrain. By combining
                    global engineering standards with local expertise,
                    Hephaestus Machinery delivers unparalleled value,
                    reliability, and support, right where you need it.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div>
              <div>
                <h2>Our Core Values</h2>
                <p>The principles that guide everything we do</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
