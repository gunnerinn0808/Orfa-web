import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { site } from "@/lib/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Slátturóbot á leigu`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "slátturóbot á leigu",
    "slátturóbot",
    "leiga á slátturóbot",
    "grassláttur",
    "garðþjónusta",
    "garðþjónusta Akureyri",
    "Orfa",
  ],
  openGraph: {
    title: `${site.name} | Slátturóbot á leigu`,
    description: site.description,
    siteName: site.name,
    locale: "is_IS",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#123822",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="is"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream-50 text-ink-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest-800 focus:px-4 focus:py-2 focus:text-cream-0"
        >
          Fara beint í efni
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
