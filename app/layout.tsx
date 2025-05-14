
import "./globals.css";
import { LenguageProvider } from "@/app/context/LenguageContext";
import { MobileViewProvider } from "@/app/context/MobileViewContext";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { SmoothScrollProvider } from "./context/SmoothScrollContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="nVV8ikXo8XJRDMFT3lBj37jJhx0dKodDvmukZSFMKzs" />
        <link rel="icon" href="https://tyvgqomjokwdofxjtxbc.supabase.co/storage/v1/object/sign/logos/LogoWeb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9Mb2dvV2ViLnBuZyIsImlhdCI6MTc0MzY4Mjk1MSwiZXhwIjoxOTAxMzYyOTUxfQ.HHn-uuKvP_5MCGsbowpwQ8_blSEWR9TBsOophML5vrQ" />
      </head>
      <body>
        <LenguageProvider>
          <MobileViewProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <SmoothScrollProvider>
                {children}
                <Footer />
                <BackToTop />
              </SmoothScrollProvider>
            </ThemeProvider>
          </MobileViewProvider>
        </LenguageProvider>
      </body>
    </html>
  );
}
