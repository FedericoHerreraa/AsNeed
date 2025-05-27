import { Metadata } from "next"
import { StartNow } from "@/app/components/StartNow";
import { LineSeparator } from "@/app/components/LineSeparator";
import { FAQs } from "@/app/components/FAQs";
import {Header} from "@/app/components/Header"

export const metadata: Metadata = {
    title: "Agenda una Llamada | AsNeed",
    description: "Reserva una reunión con nuestro equipo en AsNeed para hablar sobre tu proyecto. Elige una sesión de 30 minutos o 1 hora y comencemos a trabajar en tu visión hoy mismo.",
    keywords: ['agendar llamada', 'consulta gratuita', 'asesoramiento digital', 'desarrollo de proyectos', 'consultoría tecnológica'],
    openGraph: {
        title: "Agenda una Llamada | AsNeed",
        description: "Reserva una reunión con nuestro equipo en AsNeed para hablar sobre tu proyecto. Elige una sesión de 30 minutos o 1 hora y comencemos a trabajar en tu visión hoy mismo.",
        images: [
            {
                url: 'https://tyvgqomjokwdofxjtxbc.supabase.co/storage/v1/object/sign/logos/LogoWeb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9Mb2dvV2ViLnBuZyIsImlhdCI6MTc0MzY4Mjk1MSwiZXhwIjoxOTAxMzYyOTUxfQ.HHn-uuKvP_5MCGsbowpwQ8_blSEWR9TBsOophML5vrQ',
                width: 1200,
                height: 630,
                alt: 'Agenda una Llamada con AsNeed',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Agenda una Llamada | AsNeed",
        description: "Reserva una reunión con nuestro equipo en AsNeed para hablar sobre tu proyecto. Elige una sesión de 30 minutos o 1 hora y comencemos a trabajar en tu visión hoy mismo.",
        images: ['https://tyvgqomjokwdofxjtxbc.supabase.co/storage/v1/object/sign/logos/LogoWeb.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9Mb2dvV2ViLnBuZyIsImlhdCI6MTc0MzY4Mjk1MSwiZXhwIjoxOTAxMzYyOTUxfQ.HHn-uuKvP_5MCGsbowpwQ8_blSEWR9TBsOophML5vrQ'],
    },
};

export default function StartNowPage() {
    return (
        <>
            <Header bgDark="bg-black" bgLight="bg-white"/>
            <StartNow />
            <LineSeparator />
            <FAQs />
        </>
    )
}