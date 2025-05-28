import "./globals.css";
import { LenguageProvider } from "@/app/context/LenguageContext";
import { MobileViewProvider } from "@/app/context/MobileViewContext";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://asneedsolutions.com'),
  title: {
    default: 'AsNeed - Transformamos tus ideas en realidad digital',
    template: '%s | AsNeed'
  },
  description: 'En AsNeed, transformamos tus ideas en realidad digital. Diseñamos y desarrollamos sistemas de gestión, aplicaciones móviles y plataformas web con IA, completamente personalizadas para cubrir las necesidades de tu negocio.',
  keywords: ['desarrollo web', 'aplicaciones móviles', 'inteligencia artificial', 'sistemas de gestión', 'diseño web', 'desarrollo de software', 'web development', 'mobile apps', 'AI', 'management systems'],
  authors: [{ name: 'AsNeed' }],
  creator: 'AsNeed',
  publisher: 'AsNeed',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    alternateLocale: 'en_US',
    url: 'https://asneedsolutions.com',
    siteName: 'AsNeed',
    title: 'AsNeed - Transformamos tus ideas en realidad digital',
    description: 'En AsNeed, transformamos tus ideas en realidad digital. Diseñamos y desarrollamos sistemas de gestión, aplicaciones móviles y plataformas web con IA.',
    images: [
      {
        url: 'https://tyvgqomjokwdofxjtxbc.supabase.co/storage/v1/object/sign/logos/LogoWeb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9Mb2dvV2ViLnBuZyIsImlhdCI6MTc0MzY4Mjk1MSwiZXhwIjoxOTAxMzYyOTUxfQ.HHn-uuKvP_5MCGsbowpwQ8_blSEWR9TBsOophML5vrQ',
        width: 1200,
        height: 630,
        alt: 'AsNeed Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AsNeed - Transformamos tus ideas en realidad digital',
    description: 'En AsNeed, transformamos tus ideas en realidad digital. Diseñamos y desarrollamos sistemas de gestión, aplicaciones móviles y plataformas web con IA.',
    images: ['https://tyvgqomjokwdofxjtxbc.supabase.co/storage/v1/object/sign/logos/LogoWeb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9Mb2dvV2ViLnBuZyIsImlhdCI6MTc0MzY4Mjk1MSwiZXhwIjoxOTAxMzYyOTUxfQ.HHn-uuKvP_5MCGsbowpwQ8_blSEWR9TBsOophML5vrQ'],
    creator: '@asneed',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'nVV8ikXo8XJRDMFT3lBj37jJhx0dKodDvmukZSFMKzs',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <LenguageProvider>
          <MobileViewProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <Footer />
              <BackToTop />
            </ThemeProvider>
          </MobileViewProvider>
        </LenguageProvider>
      </body>
    </html>
  );
}
