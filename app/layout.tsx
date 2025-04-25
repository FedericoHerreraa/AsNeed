
import "./globals.css";
import { LenguageProvider } from "@/app/context/LenguageContext";
import { NightModeProvider } from "@/app/context/NightModeContext";
import { MobileViewProvider } from "@/app/context/MobileViewContext";
// import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="nVV8ikXo8XJRDMFT3lBj37jJhx0dKodDvmukZSFMKzs" />
        <link rel="icon" href="https://tyvgqomjokwdofxjtxbc.supabase.co/storage/v1/object/sign/logos/LogoWeb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9Mb2dvV2ViLnBuZyIsImlhdCI6MTc0MzY4Mjk1MSwiZXhwIjoxOTAxMzYyOTUxfQ.HHn-uuKvP_5MCGsbowpwQ8_blSEWR9TBsOophML5vrQ"/>
      </head>
      <body>
        <LenguageProvider>
          <NightModeProvider>
            <MobileViewProvider>
              
              {children}
              <Footer />
              <BackToTop /> 
            </MobileViewProvider>
          </NightModeProvider>
        </LenguageProvider>
      </body>
    </html>
  );
}
