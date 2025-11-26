// "use client";
// import { features, title } from "process";
// import type React from "react";
// import { createContext, useContext, useState, useEffect } from "react";

// type Language = "en" | "ru";

// interface LanguageContextType {
//   language: Language;
//   setLanguage: (lang: Language) => void;
//   t: (key: string) => string;
// }

// const LanguageContext = createContext<LanguageContextType | undefined>(
//   undefined
// );

// export function LanguageProvider({ children }: { children: React.ReactNode }) {
//   const [language, setLanguageState] = useState<Language>("en");

//   useEffect(() => {
//     //Load saved language from localStorage
//     const savedLanguage = localStorage.getItem("language") as Language;
//     if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ru")) {
//       setLanguageState(savedLanguage);
//     }
//   });

//   const setLanguage = (lang: Language) => {
//     setLanguageState(lang);
//     localStorage.setItem("language", lang);
//   };

//   const t = (key: string): string => {
//     const keys = key.split(".");
//     let value: any = translations[language];

//     for (const k of keys) {
//       value = value?.[k];
//     }

//     return value || key;
//   };

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage, t }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   const context = useContext(LanguageContext);
//   if (context === undefined) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }
//   return context;
// }

// const translations = {
//   en: {
//     nav: {
//       products: "Our Products",
//       about: "About Us",
//       contact: "Contact Us",
//     },
//     hero: {
//       badge: "Trusted by Leading Mining Operations",
//       title: "Specializing in Heavy-Duty",
//       titleHighlight: "Explosive Trucks",
//       description:
//         "We are dedicated to providing top-quality ANFO and Emulsion trucks tailored to the unique needs of Mongolia's mining and construction industries. With years of local experience, we understand the challenging terrain and strict safety requirements, ensuring our equipment is reliable, durable, and designed for maximum performance.",
//       cta: "View Our Products",
//     },
//     products: {
//       title: "Our Truck ",
//       subtitle:
//         "Precision-engineered truck solutions for every explosive material transport need",
//       anfo: {
//         name: "ANFO Truck",
//         description:
//           "Our ANFO (Ammonium Nitrate Fuel Oil) Trucks are engineered for efficiency,safety, and reliability in the most demanding mining, quarrying, and construction environments. Designed to mix, transport, and deliver bulk explosives with pinpoint accuracy,these robust vehicles ensure optimal performance while adhering to strict safety and regulatory standards.",
//         capacity: "",
//       },
//       emulsion: {
//         name: "Emulsion Truck",
//         description:
//           "Our Emulsion Trucks are engineered to transport and pump sensitized bulk emulsion with unmatched precision, safety, and reliability. Ideal for large-scale mining, quarrying, and infrastructure projects, these vehicles ensure consistent, high-energy explosive delivery while maximizing productivity and minimizing downtime.",
//         capacity: "",
//       },
//       emulsionmodule: {
//         name: "Emulsion Module",
//         description:
//           "It is an automatic device for producing explosive mixtures or open emulsions by mixing aqueous solutions and oil solutions prepared from chemical raw materials.Emulsifying equipment is manufactured according to the order with a capacity of 5000-12000 kg/h",
//         capacity: "",
//       },
//       features: {
//         durability: "",
//         precision: "",
//         safety: "",
//       },
//     },
//     quality: {
//       title: "Our Company Quality Policy",
//       intro: "Quality Policy of Hephaestus Machinery LLC",
//       description:
//         "Our company manufactures special-purpose vehicles designed for charging boreholes with explosives under open-pit mining conditions, utilizing modern advanced technologies and innovative solutions.",
//       principalTitle: "Our Principal",
//       principles: [
//         "Fully comply with international and national laws and regulatory requirements",
//         "Provide high-quality products and reliable service that meet the needs and expectations of clients and customers",
//         "Effectively implement the quality management system and continuously improve our operations",
//         "Adhere to the principle of prioritizing safety and reliability in all our activities",
//       ],
//     },
//     about: {
//       title: "About Us",
//       intro:
//         "Hephaestus Machinery is a premier designer and manufacturer of specialized explosives handling equipment, including ANFO and Emulsion trucks. Based in the global mining heartland of Mongolia, we have an innate understanding of the challenges faced by the industry-from extreme climates to remote locations and the relentless demand for productivity.",
//       philosophy:
//         "Our name, drawn from the Greek god of metalworking and craftsmanship, reflects our core philosophy: we forge durable, powerful, and precise machinery. Every truck that leaves our fabrication shop is engineered to not just meet, but exceed, the harsh realities of a modern mine site.",
//       partnership:
//         "We are more than just manufacturers: we are partners to our clients. Our deep technical expertise allows us to provide custom solutions, ensuring each vehicle is perfectly matched to your specific operational needs and terrain. By combining global engineering standards with local expertise, Hephaestus Machinery delivers unparalleled value, reliability, and support, right where you need it.",
//       clientTitle: "Our Valued Clients",
//       clientDescription:
//         "We take pride in our strong partnerships with esteemed companies that rely on our heavy machinery solutions. Our clients represent diverse industries and rely on us for exceptional products and unwavering support. By collaborating with these visionary organizations, we continue to strengthen our commitment to delivering reliable and innovative heavy equipment solutions.",
//     },
//     contact: {
//       title: "",
//       subtitle: "",
//       info: {
//         title: "",
//         description: "",
//       },
//       form: {
//         name: "",
//         email: "",
//         phone: "",
//         message: "",
//         submit: "",
//       },
//       details: {
//         email: "",
//         phone: "",
//         addres: "",
//         hours: "",
//       },
//     },
//     video: {
//       title: "",
//       subtitle: "",
//     },
//     stats: {
//       projects: "",
//       clients: "",
//       countries: "",
//       uptime: "",
//     },
//     cta: {
//       title: "",
//       description: "",
//       products: "",
//       about: "",
//     },
//     footer: {
//       description: "",
//       company: "",
//       products: "",
//       support: "",
//       copyright: "",
//     },
//   },
//   ru: {
//     nav: {
//       products: "",
//       about: "",
//       contact: "",
//     },
//     hero: {
//       badge: "",
//       title: "",
//       titleHighlight: "",
//       description: "",
//       cta: "",
//     },
//     products: {
//       title: "",
//       subtitle: "",
//       anfo: {
//         name: "",
//         description: "",
//         capacity: "",
//       },
//       emulsion: {
//         name: "",
//         description: "",
//         capacity: "",
//       },
//       unibody: {
//         name: "",
//         description: "",
//         capacity: "",
//       },
//       features: {
//         durability: "",
//         precision: "",
//         safety: "",
//       },
//     },
//     quality: {
//       title: "",
//       intro: "",
//       description: "",
//       principles: [],
//     },
//     about: {
//       title: "",
//       intro: "",
//       philosophy: "",
//       partnership: "",
//       clientsTitle: "",
//       clientsDescription: "",
//     },
//     contact: {
//       title: "",
//       subtitle: "",
//       info: {
//         title: "",
//         description: "",
//       },
//       form: {
//         name: "",
//         email: "",
//         phone: "",
//         message: "",
//         submit: "",
//       },
//       details: {
//         email: "",
//         phone: "",
//         address: "",
//         hours: "",
//       },
//     },
//     video: {
//       title: "",
//       subtitle: "",
//     },
//     stats: {
//       projects: "",
//       clients: "",
//       countries: "",
//       uptime: "",
//     },
//     cta: {
//       title: "",
//       description: "",
//       products: "",
//       about: "",
//     },
//     footer: {
//       description: "",
//       company: "",
//       products: "",
//       support: "",
//       copyright: "",
//     },
//   },
// };
