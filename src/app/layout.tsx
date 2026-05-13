import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFab from "@/components/layout/WhatsAppFab";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlackDev | Desenvolvimento Web Profissional em LEM",
  description:
    "BlackDev cria sites modernos, rápidos e focados em conversão para empresas de Luís Eduardo Magalhães e região oeste da Bahia. Sites institucionais, landing pages e sistemas web.",
  keywords: "desenvolvimento web LEM, criação de sites Luís Eduardo Magalhães, desenvolvedor web Bahia, sites profissionais, landing pages, sistemas web",
  openGraph: {
    title: "BlackDev | Sites Profissionais que Geram Resultados",
    description: "Transforme sua presença digital com sites modernos, rápidos e focados em conversão.",
    url: "https://blackdev.com.br",
    siteName: "BlackDev",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        {/* LocalBusiness Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BlackDev",
              image: "https://blackdev.com.br/logo.png",
              "@id": "https://blackdev.com.br",
              url: "https://blackdev.com.br",
              telephone: "+5577999999999", // Replace with real
              address: {
                "@type": "PostalAddress",
                addressLocality: "Luís Eduardo Magalhães",
                addressRegion: "BA",
                addressCountry: "BR"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -12.0963, // LEM Lat
                longitude: -45.7806 // LEM Lng
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                opens: "08:00",
                closes: "18:00"
              },
              sameAs: [
                "https://instagram.com/blackdev.lem"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col selection:bg-accent/30 selection:text-white">
        <Header />
        <main className="flex-grow pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
