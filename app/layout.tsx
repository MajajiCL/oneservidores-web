import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TopBar } from "@/components/topbar";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://oneservidores.cl"),
  title: {
    default: `${site.name} — Datacenter, VPS, Dedicados y Hosting en Chile`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  icons: {
    icon: [
      { url: `${process.env.NODE_ENV === "production" ? "/oneservidores-web" : ""}/favicon-32x32.png`, sizes: "32x32" },
      { url: `${process.env.NODE_ENV === "production" ? "/oneservidores-web" : ""}/favicon-192x192.png`, sizes: "192x192" }
    ],
    apple: `${process.env.NODE_ENV === "production" ? "/oneservidores-web" : ""}/apple-touch-icon.png`
  },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: "https://oneservidores.cl",
    siteName: site.name,
    locale: "es_CL",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-ink-900 antialiased">
        <SmoothScroll />
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
