import { Metadata } from "next"
import { StartNow } from "@/app/components/StartNow";
import { LineSeparator } from "@/app/components/LineSeparator";
import { FAQs } from "@/app/components/FAQs";
import {Header} from "@/app/components/Header"

export const metadata: Metadata = {
    title: "Agenda una Llamada | AsNeed",
    description: "Reserva una reunión con nuestro equipo en AsNeed para hablar sobre tu proyecto. Elige una sesión de 30 minutos o 1 hora y comencemos a trabajar en tu visión hoy mismo.",
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