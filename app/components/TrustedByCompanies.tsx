'use client'

import { useLenguage } from "@/app/context/LenguageContext"
import { useNightMode } from "@/app/context/NightModeContext"
import { TitleSection } from "@/app/components/reusable/titleSection"

import christianSaadDark from '@/app/img/logos/ChristianSaad-dark.png'
import pinasco from '@/app/img/logos/LogoHorizontal@2x.png'
import pillowLogo from '@/app/img/logos/pillowLogo.png'
import buffaloCafe from '@/app/img/logos/buffalo.png'
import buffaloMusic from '@/app/img/logos/buffaloMusic.png'
import buffaloStrongDark from '@/app/img/logos/buffaloStrong-dark.png'
import ngDesinfecciones from '@/app/img/logos/ng-desinfecciones-logo.png'
import Image from "next/image"
import Marquee from "react-fast-marquee"

export const TrustedByCompanies = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()
    
    return (
        <div className={`py-10 ${nightMode ? 'bg-black' : ''} text-white md:min-h-[60vh] min-h-[45vh]`}>
            <TitleSection
                firstTitleEnglish="Trusted by the"
                secondTitleEnglish="Best Clients"
                firstTitleSpanish="Acompañados por los"
                secondTitleSpanish="Mejores Clientes"
                subTitleEnglish="Our Partners"
                subTitleSpanish="Nuestros Clientes"
                color="from-blue-500 to-violet-500"
                spanish={spanish}
                nightMode={nightMode}
            />

            <section className={`w-full ${nightMode ? 'bg-[#101011]' : 'bg-zinc-800'} mt-20 md:min-h-40 min-h-32 flex items-center justify-center gap-20 flex-wrap`}>
                <Marquee speed={100}>
                    {companies.map((company, index) => (
                        <Image
                            key={index}
                            src={company.img}
                            alt={company.name}
                            className={company.className}
                        />
                    ))}                
                </Marquee>
            </section>
        </div>
    )   
}


const companies = [
    {
        name: 'Christian Saad',
        img: christianSaadDark,
        className: 'md:w-[160px] md:h-[70px] w-[100px] h-[40px] md:mx-20 mx-7'
    },
    {
        name: 'Buffalo Strong',
        img: buffaloStrongDark,
        className: 'md:w-[100px] md:h-[90px] w-[70px] h-[60px] md:mx-20 mx-7'
    },
    {
        name: 'Pinasco',
        img: pinasco,
        className: 'md:w-[160px] md:h-[40px] w-[100px] h-[25px] md:mx-20 mx-7'
    },
    {
        name: 'Buffalo',
        img: buffaloCafe,
        className: 'md:w-[100px] md:h-[105px] w-[70px] h-[70px] md:mx-20 mx-7'
    },
    {
        name: 'Pillow',
        img: pillowLogo,
        className: 'md:w-[190px] md:h-[40px] w-[130px] h-[25px] md:mx-20 mx-7'
    },
    {
        name: 'Buffalo Music',
        img: buffaloMusic,
        className: 'md:w-[200px] md:h-[110px] w-[130px] h-[70px] md:mx-20 mx-7'
    },
    {
        name: 'NG Desinfecciones',
        img: ngDesinfecciones,
        className: 'md:w-[180px] md:h-[110px] w-[110px] h-[70px] md:mx-20 mx-7'
    },

]
