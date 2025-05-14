import { Metadata } from "next";
import { OurWork } from "@/app/components/OurWork";
import { LineSeparator } from "@/app/components/LineSeparator";
import { UsersOpinions } from "@/app/components/UsersOpinions";
import { CustomSeparator } from "@/app/components/CustomSeparator";
import { FAQs } from "@/app/components/FAQs";
import { Header } from "@/app/components/Header";

export const metadata: Metadata = {
    title: "Nuestros Mejores Proyectos | AsNeed",
    description: "En AsNeed, mostramos soluciones de interfaz y tecnología de vanguardia. Explora nuestros mejores proyectos y descubrí cómo nuestra experiencia puede dar vida a tus ideas.",
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