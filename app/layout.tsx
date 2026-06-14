import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgroIndustrial Peru | Innovación para el campo",
  description: "Líderes en soluciones agroindustriales sostenibles para el desarrollo del país. Tractores, cosechadoras y sistemas de riego inteligente.",
  keywords: "agroindustrial, peru, tractores, cosechadoras, agricultura, campo, riego inteligente",
  openGraph: {
    title: "AgroIndustrial Peru",
    description: "Líderes en soluciones agroindustriales sostenibles para el desarrollo del país.",
    url: "https://agroindustrialperu.com",
    siteName: "AgroIndustrial Peru",
    images: [
      {
        url: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AgroIndustrial Peru",
              "url": "https://agroindustrialperu.com",
              "logo": "https://agroindustrialperu.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+51-999-999-999",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
