'use client'


import { useLenguage } from "@/app/context/LenguageContext";
import { useMobileView } from "@/app/context/MobileViewContext";
import argFlag from '@/app/img/others/argentina.png'

import { FaRegCopyright } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

import Image from "next/image";

import logoDark from '@/app/img/logos/newDarkLogo.png'
import logoLight from '@/app/img/logos/newLightLogo.png'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Footer = () => {
    const { spanish } = useLenguage()
    const { isMobile } = useMobileView()
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null 
    }

    return (
        <footer className='h-[70vh] dark:bg-black pt-20'>
            <div className='dark:bg-zinc-950 bg-zinc-100 flex flex-col gap-5 items-center h-full w-full'>
                <div className="flex gap-1 items-center justify-center pt-20">
                    <Image src={theme === 'dark' ? logoDark : logoLight} alt="" className="md:w-[85px] w-16 h-auto" />
                    <h1 className='dark:text-zinc-300 text-black md:text-4xl text-2xl'>AsNeed</h1>
                </div>
                <p className='bg-gradient-to-r bg-clip-text text-transparent dark:from-zinc-200 dark:via-zinc-400 dark:to-zinc-200 from-zinc-600 via-zinc-500 to-zinc-600 md:text-lg text-base text-center'>{spanish ? 'Transformamos tus ideas en realidad digital.' : 'We turn your ideas into digital reality.'}</p>
                <div className='flex items-center gap-3 md:text-base text-sm dark:text-zinc-400 text-zinc-600 mt-5'>
                    <FaRegCopyright />
                    <p>2025 AsNeed - {spanish ? 'Todos los derechos reservados' : 'All rights reserved'}</p>
                </div>
                <div className="flex justify-center items-center gap-3 md:text-base text-sm">
                    <Image
                        src={argFlag}
                        alt="Argentina Flag"
                        width={isMobile ? 15 : 25}
                    />
                    <p className='dark:text-zinc-400 text-zinc-600'>{spanish ? 'Hecho en ' : 'Made in '}Buenos Aires, Argentina</p>
                </div>
                <div>
                    <div className="flex gap-5 mt-5">
                        <a href="https://www.linkedin.com/company/asneed/?viewAsMember=true" target="_blank">
                            <SiLinkedin size={isMobile ? 20 : 30} className='text-zinc-500 dark:hover:text-zinc-300 hover:text-zinc-700 transition-all duration-150'/>
                        </a>
                        <a href="https://www.instagram.com/asneedsolutions/" target="_blank">
                            <SiInstagram size={isMobile ? 20 : 30} className='text-zinc-500 dark:hover:text-zinc-300 hover:text-zinc-700 transition-all duration-150'/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}