'use client'

import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Header } from "./Header";

import { HiCursorArrowRays } from "react-icons/hi2";
import { FaHandshake } from 'react-icons/fa';

import imgLanding from "@/public/img/background.png"
import { useLenguage } from '@/app/context/LenguageContext';

export const LandingInfo = () => {
    const { spanish } = useLenguage()
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                spanish ? "Digital" : "Business", 
                spanish ? "Hoy" : "Startup", 
                spanish ? "Online" : "Brand",
                spanish ? "Con IA" : "IA Business",
            ], 
            typeSpeed: 100,  
            backSpeed: 50,  
            backDelay: 1500,
            loop: true, 
        });

        return () => typed.destroy();
    }, [spanish]);

    return (
        <div className="relative min-h-[100vh] h-screen w-full isolate z-0 bg-[url('/')]">
            <Image
                src={imgLanding}
                alt="Landing Image"
                className="object-cover"
                priority
                fill
            />

            <div className='absolute inset-0 bg-gradient-to-r dark:from-black/100 dark:via-black/80 dark:to-transparent dark:z-10 from-white/100 via-white/80 to-transparent z-10' />
            <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent dark:to-black z-10 to-white' />
            <div className="absolute top-0 left-0 w-full z-30">
                <Header bgDark="transparent" bgLight="transparent" />
            </div>
            <div className="relative z-20 w-[80%] mx-auto flex justify-between gap-10 h-full items-center">
                <div className="flex flex-col md:gap-10 gap-7 md:w-1/2 md:items-start items-center">
                    <h1 className='md:text-6xl text-4xl md:text-left text-center font-semibold dark:text-white text-black'>
                        {spanish ? 'Comenzá tu' : 'Start Your Own'}{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                            {spanish ? 'Negocio' : 'Digital'}{' '}
                        </span>
                        <span ref={typedRef}></span>
                    </h1>
                    <p className="md:text-xl text-md md:text-left text-center dark:text-zinc-300 text-zinc-700">
                        {spanish 
                            ? 'En "AsNeed", transformamos tus ideas en realidad digital. Diseñamos y desarrollamos aplicaciones móviles, plataformas web con IA y redes sociales, completamente personalizadas para cubrir las necesidades de tu negocio.'
                            : 'At "AsNeed", we turn your ideas into digital reality. We design and develop mobile applications, web platforms with AI, and social media, fully customized to meet your business needs.'
                        }
                    </p>
                    <div className="flex items-center gap-3">
                        <FaHandshake size={25} className="dark:text-white text-zinc-700"/>
                        <p className="md:text-lg text-md md:text-left text-center dark:text-zinc-200 text-zinc-700">
                            {spanish ? '' : 'Trusted by '}<span className="font-bold">10+</span> {spanish ? 'compañías confían en nosotros' : 'companies'}
                        </p>
                    </div>
                    <Link 
                        href='/start-now'
                        className={`bg-gradient-to-r from-blue-700 to-violet-600 text-white md:py-5 py-3 md:px-7 px-5 shadow-2xl rounded-xl w-fit hover:scale-110 hover:bg-blue-700 transform transition duration-300 ease-in-out`}
                    >
                        <div className="flex gap-2 items-center">
                            <p className="md:text-xl font-semibold">{spanish ? 'Comencemos Hoy' : `Let${`'`}s Start Now`}</p>
                            <HiCursorArrowRays size={25}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}