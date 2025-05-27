import { Metadata } from "next";
import { PlansComponent } from "@/app/components/Plans";
import { CustomSeparator } from "@/app/components/CustomSeparator";
import { FAQs } from "@/app/components/FAQs";
import { UsersOpinions } from "@/app/components/UsersOpinions";
import { LineSeparator } from "@/app/components/LineSeparator";
import {Header} from "@/app/components/Header"

export const metadata: Metadata = {
    title: "Planes y Servicios | AsNeed",
    description: "Descubre nuestros planes personalizados en AsNeed. Desde soluciones básicas hasta paquetes premium con IA, encuentra el plan perfecto para impulsar tu negocio digital.",
    keywords: ['planes digitales', 'precios', 'servicios web', 'desarrollo personalizado', 'soluciones empresariales', 'paquetes premium'],
    openGraph: {
        title: "Planes y Servicios | AsNeed",
        description: "Descubre nuestros planes personalizados en AsNeed. Desde soluciones básicas hasta paquetes premium con IA, encuentra el plan perfecto para impulsar tu negocio digital.",
        images: [
            {
                url: 'https://tyvgqomjokwdofxjtxbc.supabase.co/storage/v1/object/sign/logos/LogoWeb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9Mb2dvV2ViLnBuZyIsImlhdCI6MTc0MzY4Mjk1MSwiZXhwIjoxOTAxMzYyOTUxfQ.HHn-uuKvP_5MCGsbowpwQ8_blSEWR9TBsOophML5vrQ',
                width: 1200,
                height: 630,
                alt: 'Planes y Servicios AsNeed',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Planes y Servicios | AsNeed",
        description: "Descubre nuestros planes personalizados en AsNeed. Desde soluciones básicas hasta paquetes premium con IA, encuentra el plan perfecto para impulsar tu negocio digital.",
        images: ['https://tyvgqomjokwdofxjtxbc.supabase.co/storage/v1/object/sign/logos/LogoWeb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9Mb2dvV2ViLnBuZyIsImlhdCI6MTc0MzY4Mjk1MSwiZXhwIjoxOTAxMzYyOTUxfQ.HHn-uuKvP_5MCGsbowpwQ8_blSEWR9TBsOophML5vrQ'],
    },
};

export default function Plans() {
    return (
        <>
            <Header bgDark="bg-black" bgLight="bg-white"/>
            <PlansComponent />
            <CustomSeparator />
            <UsersOpinions />
            <LineSeparator />
            <FAQs />
        </>
    )
}