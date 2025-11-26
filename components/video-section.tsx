import { Card, CardContent } from "./ui/card";

export function VideoSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Our Work in Motion
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              See our machinery in action at mine sites
            </p>
          </div>
          {/* Video Player */}
          <Card className="border-border overflow-hidden shadow-xl">
            <CardContent>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <video
                  controls
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  poster="/photo2.JPG"
                >
                  {/* <source src="" type="" /> */}
                  Your browser does not support the video tag.
                </video>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
