import { Metadata } from "next";
import { OurWay } from "@/app/components/OurWay";
import { LandingInfo } from "@/app/components/Landing"
import { CustomSeparator } from "@/app/components/CustomSeparator";
import { Founders } from "@/app/components/Founders";
import { LineSeparator } from '@/app/components/LineSeparator';
import { TrustedByCompanies } from "@/app/components/TrustedByCompanies";
import { WhyUs } from "@/app/components/WhyUs";
import { UsersOpinions } from "@/app/components/UsersOpinions";
import { FAQs } from "@/app/components/FAQs";
import { OurResults } from "@/app/components/OurResults";

export const metadata: Metadata = {
    title: "AsNeed - Transformamos tus ideas en realidad digital",
    description: "En AsNeed, transformamos tus ideas en realidad digital. Diseñamos y desarrollamos sistemas de gestión, aplicaciones móviles y plataformas web con IA, completamente personalizadas para cubrir las necesidades de tu negocio.",
    keywords: ['desarrollo web', 'aplicaciones móviles', 'inteligencia artificial', 'sistemas de gestión', 'diseño web', 'desarrollo de software'],
    openGraph: {
        title: "AsNeed - Transformamos tus ideas en realidad digital",
        description: "En AsNeed, transformamos tus ideas en realidad digital. Diseñamos y desarrollamos sistemas de gestión, aplicaciones móviles y plataformas web con IA.",
        images: [
            {
                url: 'https://tyvgqomjokwdofxjtxbc.supabase.co/storage/v1/object/sign/logos/LogoWeb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9Mb2dvV2ViLnBuZyIsImlhdCI6MTc0MzY4Mjk1MSwiZXhwIjoxOTAxMzYyOTUxfQ.HHn-uuKvP_5MCGsbowpwQ8_blSEWR9TBsOophML5vrQ',
                width: 1200,
                height: 630,
                alt: 'AsNeed - Soluciones Digitales',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "AsNeed - Transformamos tus ideas en realidad digital",
        description: "En AsNeed, transformamos tus ideas en realidad digital. Diseñamos y desarrollamos sistemas de gestión, aplicaciones móviles y plataformas web con IA.",
        images: ['https://tyvgqomjokwdofxjtxbc.supabase.co/storage/v1/object/sign/logos/LogoWeb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9Mb2dvV2ViLnBuZyIsImlhdCI6MTc0MzY4Mjk1MSwiZXhwIjoxOTAxMzYyOTUxfQ.HHn-uuKvP_5MCGsbowpwQ8_blSEWR9TBsOophML5vrQ'],
    },
};

export default function HomePage() {
    return (
        <>
            <LandingInfo />
            <CustomSeparator />
            <OurWay />
            <LineSeparator />
            <WhyUs />
            <LineSeparator />
            <OurResults />
            <CustomSeparator />
            <TrustedByCompanies />
            <LineSeparator />
            <UsersOpinions />
            <CustomSeparator />
            <Founders /> 
            <LineSeparator />
            <FAQs />
        </>
    )
}