import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Users, Globe } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                About Us
              </h1>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
                Hephaestus Machinery - Forging Excellence in Explosives Handling
                Equipment
              </p>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8882_1px, transparent_1px), linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem][mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%, transparent_110%)]" />
        </section>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border bg-muted/30 mb-12">
                <CardContent className="p-8 md:p-12">
                  <p className="text-lg text-primary leading-relaxed mb-6">
                    Hephaestus Machinery is a premier designer and manufacturer
                    of specialized explosives handling equipment, including ANFO
                    and Emulsion trucks. Based in the global mining heartland of
                    Mongolia, we have an innate understanding of the challenges
                    faced by the industry-from extreme climates to remote
                    locations and the relentless demand for productivity.
                  </p>
                  <p className="text-lg text-primary leading-relaxed mb-6">
                    Our name, drawn from the Greek god of metalworking and
                    craftsmanship, reflects our core philosophy: we forge
                    durable, powerful, and precise machinery. Every truck that
                    leaves our fabrication shop is engineered to not just meet,
                    but exceed, the harsh realities of a modern mine site.
                  </p>
                  <p className="text-lg text-primary leading-relaxed">
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                  Our Valued Clients
                </h2>
                <Card className="border-border bg-muted/30">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex justify-center items-center">
                      {" "}
                      <img
                        src="https://res.cloudinary.com/dquipdgj5/image/upload/v1764166500/blast_logo_final_rn2hqx.avif"
                        alt=""
                        className="w-50 h-50 "
                      />
                    </div>

                    <p className="text-lg text-primary leading-relaxed">
                      We take pride in our strong partnerships with esteemed
                      companies that rely on our heavy machinery solutions. Our
                      clients represent diverse industries and rely on us for
                      exceptional products and unwavering support. By
                      collaborating with these visionary organizations, we
                      continue to strengthen our commitment to delivering
                      reliable and innovative heavy equipment solutions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
