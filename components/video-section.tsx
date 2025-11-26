// import { Card, CardContent } from "./ui/card";
// import React from "react";
// export function VideoSection() {
//   return (
//     <section className="py-20 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
//               Our Work in Motion
//             </h2>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               See our machinery in action at mine sites
//             </p>
//           </div>
//           {/* Video Player */}
//           <Card className="border-border overflow-hidden shadow-xl">
//             <CardContent>
//               <div
//                 className="relative w-full"
//                 style={{ paddingBottom: "56.25%" }}
//               >
//                 <video
//                   controls
//                   className="absolute top-0 left-0 w-full h-full object-cover"
//                   poster=""
//                   src={"https://youtu.be/3xP8RI5cB_A?si=xBK4NmeA6Ix1Frz_"}
//                 >
//                   {/* <source src="" type="" /> */}
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Card, CardContent } from "./ui/card";
import React from "react";

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
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/3xP8RI5cB_A"
                  title="Our Machinery in Action"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
