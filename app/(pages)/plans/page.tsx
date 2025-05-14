import { Metadata } from "next";
import { PlansComponent } from "@/app/components/Plans";
import { CustomSeparator } from "@/app/components/CustomSeparator";
import { FAQs } from "@/app/components/FAQs";
import { UsersOpinions } from "@/app/components/UsersOpinions";
import { LineSeparator } from "@/app/components/LineSeparator";
import {Header} from "@/app/components/Header"

export const metadata: Metadata = {
    title: "Elegí Tu Plan | AsNeed",
    description: "En AsNeed, ofrecemos planes flexibles adaptados a tus necesidades. Explora nuestros planes Básico, Premium y Gold para encontrar la solución perfecta para ti.",
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