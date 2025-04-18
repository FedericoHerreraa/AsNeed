import { Metadata } from "next";
import { PlansComponent } from "@/app/components/Plans";
import { CustomSeparator } from "@/app/components/CustomSeparator";
import { FAQs } from "@/app/components/FAQs";
import { UsersOpinions } from "@/app/components/UsersOpinions";
import { LineSeparator } from "@/app/components/LineSeparator";
import {Header} from "@/app/components/Header"

export const metadata: Metadata = {
    title: "Choose Your Plan | AsNeed",
    description: "At AsNeed, we offer flexible plans tailored to your needs. Explore our Basic, Premium, and Gold plans to find the perfect solution for you.",
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