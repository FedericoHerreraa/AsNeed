import { Metadata } from "next";
import { OurWork } from "@/app/components/OurWork";
import { LineSeparator } from "@/app/components/LineSeparator";
import { UsersOpinions } from "@/app/components/UsersOpinions";
import { CustomSeparator } from "@/app/components/CustomSeparator";
import { FAQs } from "@/app/components/FAQs";
import { Header } from "@/app/components/Header";

export const metadata: Metadata = {
    title: "Our Best Projects | AsNeed",
    description: "At AsNeed, we showcase cutting-edge UI and technology solutions. Explore our best projects and discover how our expertise can bring your ideas to life.",
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