'use client'


import { useLenguage } from "@/app/context/LenguageContext"
import { TitleSection } from "@/app/components/reusable/titleSection"

import Autoplay from "embla-carousel-autoplay"

import Image from "next/image"

import chrisLogo from '@/app/img/logos/christian-only-logo.png'
import buffaloLogo from '@/app/img/logos/buffalo.png'
import pinascoLogo from '@/app/img/logos/pinasco-only-logo.png'
import nonnomingoLogo from '@/app/img/logos/nonnomingo-logo.jpg'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/app/components/ui/carousel"  

import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

export const UsersOpinions = () => {
    const { spanish } = useLenguage()

    return (
        <div className='dark:bg-black dark:text-white min-h-[60vh]'>
            <TitleSection
                firstTitleEnglish="What our users"
                secondTitleEnglish="are saying"
                firstTitleSpanish="Que dicen"
                secondTitleSpanish="nuestros clientes"
                subTitleEnglish="Listen to the best clients"
                subTitleSpanish="Escucha a los mejores clientes"
                color={'from-yellow-500 to-red-500'}
                spanish={spanish}
            />
            
            {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-20 md:w-[75%] w-[70%] mx-auto bg-gradient-to-br from-black via-zinc-900/80 to-black rounded-full">
                {testimonials.map((testi, idx) => (
                    <div key={idx} className="bg-black text-zinc-200 border border-zinc-800 shadow rounded-2xl p-6 flex flex-col gap-4 max-w-sm">
                        <div className="flex items-center gap-4">
                            <Image
                                src={testi.img}
                                alt={"Imagen"}
                                width={48}
                                height={48}
                                className="rounded-full"
                            />
                            <div>
                                <p className="font-semibold text-zinc-200">{testi.name.es}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{testi.work?.es}</p>
                            </div>
                        </div>
                        <p className="text-zinc-300 text-sm">{testi.review.es}</p>
                    </div>
                ))}
            </div> */}
            <section className="mt-20 md:w-[80%] w-[70%] mx-auto">
                <Carousel 
                    opts={{
                        loop: true
                    }}
                    plugins={[
                        Autoplay({
                          delay: 3500,
                        }),
                    ]}
                >
                    <CarouselContent>
                        {Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, index) => {
                            const items = testimonials.slice(index * 2, index * 2 + 2);
                            return (
                                <CarouselItem key={index}>
                                    <div className="flex md:flex-row flex-col items-center justify-center gap-5">
                                        {items.map((testimonial) => (
                                            <div
                                                key={testimonial.id}
                                                className='dark:bg-zinc-900 border dark:border-zinc-800 dark:text-zinc-300 bg-zinc-50 border-zinc-200 text-zinc-800 md:p-7 p-4 rounded-lg'
                                            >
                                                <p className="text-lg font-bold flex items-center gap-2">
                                                    <Image
                                                        src={testimonial.img}
                                                        alt="Christian Saad Odontología"
                                                        width={50}
                                                        height={50}
                                                        className={testimonial.className}
                                                    />
                                                    {spanish ? testimonial.name.es : testimonial.name.en}
                                                </p>
                                                <p className="mt-2">
                                                    <RiDoubleQuotesL size={20} className="inline mr-1" />
                                                    {spanish ? testimonial.review.es : testimonial.review.en}
                                                    <RiDoubleQuotesR size={20} className="inline ml-1" />
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <CarouselPrevious className='dark:bg-black dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900 hover:text-white bg-zinc-200 border-zinc-200 hover:bg-zinc-600'/>
                    <CarouselNext className='dark:bg-black dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900 hover:text-white bg-zinc-200 border-zinc-200 hover:bg-zinc-600'/>
                </Carousel>
            </section>
        </div>
    )
}

const testimonials = [
    {
        id: 1,
        name: { es: "Pinasco Odontología", en: "Pinasco Dental Clinic" },
        review: {
            es: "Muchas gracias Fede y Cami por la paciencia y la profesionalidad. Quedamos muy conformes con su trabajo!",
            en: "Thank you very much Fede and Cami for your patience and professionalism. We are very satisfied with your work!"
        },
        work: {
            es: "Odontología",
            en: "Dentistry"
        },
        img: pinascoLogo,
        className: 'h-10 w-9'
    },
    {
        id: 2,
        name: { es: "Buffalo Café", en: "Buffalo Café" },
        review: {
            es: "Desde que implementamos nuestra plataforma web desarrollada por AsNeed, nuestras reservas han aumentado un 40%. La interfaz es intuitiva, rápida y completamente adaptada a nuestras necesidades. Su equipo siempre estuvo disponible para cualquier ajuste que necesitamos. ¡100% recomendados!",
            en: "Since implementing our web platform developed by AsNeed, our bookings have increased by 40%. The interface is intuitive, fast, and fully adapted to our needs. Their team was always available for any adjustments we needed. 100% recommended!"
        },
        work: {
            es: "Odontología",
            en: "Dentistry"
        },
        img: buffaloLogo,
        className: 'h-10 w-9'
    },
    {
        id: 3,
        name: { es: "Christian Saad Odontología", en: "Christian Saad Dental Clinic" },
        review: {
            es: "Soy cliente (odontólogo), han desarrollado mi página web de manera precisa y eficaz, rápidamente entendieron cuál era mi objetivo y necesidad de comunicación y llevaron a cabo mi web bien ordenada  y dinámica",
            en: "I am a client (dentist), they have developed my website precisely and effectively, quickly understood what my goal and communication need was and carried out my website well organized and dynamic"
        },
        work: {
            es: "Odontología",
            en: "Dentistry"
        },
        img: chrisLogo,
        className: 'rounded-xl h-10 w-10'
    },
    {
        id: 4,
        name: { es: "Pizzería NonnoMingo", en: "NonnoMingo Pizzeria" },
        review: {
            es: "Gracias a AsNeed, ahora tenemos una plataforma donde nuestros clientes pueden hacer pedidos en línea de manera fácil y rápida. La experiencia del usuario es impecable, y la velocidad del sitio ha mejorado significativamente. ¡Una inversión que valió la pena!",
            en: "Thanks to AsNeed, we now have a platform where our customers can place online orders easily and quickly. The user experience is flawless, and the website speed has improved significantly. A worthwhile investment!"
        },
        work: {
            es: "Odontología",
            en: "Dentistry"
        },
        img: nonnomingoLogo,
        className: 'rounded-xl h-10 w-10'
    },
    // {
    //     id: 4,
    //     name: { es: "Pizzería NonnoMingo", en: "NonnoMingo Pizzeria" },
    //     review: {
    //         es: "Gracias a AsNeed, ahora tenemos una plataforma donde nuestros clientes pueden hacer pedidos en línea de manera fácil y rápida. La experiencia del usuario es impecable, y la velocidad del sitio ha mejorado significativamente. ¡Una inversión que valió la pena!",
    //         en: "Thanks to AsNeed, we now have a platform where our customers can place online orders easily and quickly. The user experience is flawless, and the website speed has improved significantly. A worthwhile investment!"
    //     },
    //     work: {
    //         es: "Odontología",
    //         en: "Dentistry"
    //     },
    //     img: nonnomingoLogo,
    //     className: 'rounded-xl h-10 w-10'
    // },
    // {
    //     id: 4,
    //     name: { es: "Pizzería NonnoMingo", en: "NonnoMingo Pizzeria" },
    //     review: {
    //         es: "Gracias a AsNeed, ahora tenemos una plataforma donde nuestros clientes pueden hacer pedidos en línea de manera fácil y rápida. La experiencia del usuario es impecable, y la velocidad del sitio ha mejorado significativamente. ¡Una inversión que valió la pena!",
    //         en: "Thanks to AsNeed, we now have a platform where our customers can place online orders easily and quickly. The user experience is flawless, and the website speed has improved significantly. A worthwhile investment!"
    //     },
    //     work: {
    //         es: "Odontología",
    //         en: "Dentistry"
    //     },
    //     img: nonnomingoLogo,
    //     className: 'rounded-xl h-10 w-10'
    // }
];

