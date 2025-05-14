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
    title: "Hace Crecer Tu Negocio | AsNeed",
    description: "En AsNeed, ofrecemos soluciones personalizadas para ayudar a que tu negocio alcance nuevos niveles. Descubre cómo nuestra experiencia puede transformar tus ideas en realidad y comienza tu camino con nosotros hoy mismo.",
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