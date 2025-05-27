import { Metadata } from "next";
import { OurWork } from "@/app/components/OurWork";
import { LineSeparator } from "@/app/components/LineSeparator";
import { UsersOpinions } from "@/app/components/UsersOpinions";
import { CustomSeparator } from "@/app/components/CustomSeparator";
import { FAQs } from "@/app/components/FAQs";
import { Header } from "@/app/components/Header";

export const metadata: Metadata = {
    title: "Nuestros Proyectos | AsNeed",
    description: "Explora nuestro portafolio de proyectos en AsNeed. Descubre cómo hemos ayudado a empresas a transformar sus ideas en soluciones digitales exitosas, desde aplicaciones móviles hasta sistemas de gestión con IA.",
    keywords: ['portafolio', 'proyectos digitales', 'casos de éxito', 'desarrollo web', 'aplicaciones móviles', 'sistemas de gestión'],
    openGraph: {
        title: "Nuestros Proyectos | AsNeed",
        description: "Explora nuestro portafolio de proyectos en AsNeed. Descubre cómo hemos ayudado a empresas a transformar sus ideas en soluciones digitales exitosas.",
        images: [
            {
                url: 'https://tyvgqomjokwdofxjtxbc.supabase.co/storage/v1/object/sign/logos/LogoWeb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9Mb2dvV2ViLnBuZyIsImlhdCI6MTc0MzY4Mjk1MSwiZXhwIjoxOTAxMzYyOTUxfQ.HHn-uuKvP_5MCGsbowpwQ8_blSEWR9TBsOophML5vrQ',
                width: 1200,
                height: 630,
                alt: 'Portafolio de Proyectos AsNeed',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Nuestros Proyectos | AsNeed",
        description: "Explora nuestro portafolio de proyectos en AsNeed. Descubre cómo hemos ayudado a empresas a transformar sus ideas en soluciones digitales exitosas.",
        images: ['https://tyvgqomjokwdofxjtxbc.supabase.co/storage/v1/object/sign/logos/LogoWeb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9Mb2dvV2ViLnBuZyIsImlhdCI6MTc0MzY4Mjk1MSwiZXhwIjoxOTAxMzYyOTUxfQ.HHn-uuKvP_5MCGsbowpwQ8_blSEWR9TBsOophML5vrQ'],
    },
};


export default function OurWorkPage() {
    return (
        <>
            <Header bgDark="bg-black" bgLight="bg-white"/>
            <OurWork/>
            <CustomSeparator />
            <UsersOpinions />
            <LineSeparator />
            <FAQs />
        </>
    )
}