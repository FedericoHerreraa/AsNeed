'use client'


import { useLenguage } from "@/app/context/LenguageContext"
import { useNightMode } from "@/app/context/NightModeContext"
import { useMobileView } from "@/app/context/MobileViewContext"
// import desktopPinasco from '@/app/img/projects/desktopPinasco.png'
// import desktopBuffalo from '@/app/img/projects/desktopBuffalo.png'
// import desktopRIE from '@/app/img/projects/desktopRIE.png'

import dektopRIETest from '@/app/img/projects/desktopRIE2.png'
import desktopBuffaloTest from '@/app/img/projects/desktopBuffalo2.png'
import desktopPinascoTest from '@/app/img/projects/desktopPinasco2.png'

import mobileBuffalo from '@/app/img/projects/mobileBuffalo.png'
import mobilePinasco from '@/app/img/projects/mobilePinasco.png'
import mobileRIE from '@/app/img/projects/mobileRIE.png'

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export const Projects = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()
    const { isMobile } = useMobileView()

    return (
        <div className="flex flex-col md:gap-5 gap-16 pb-20">
            {info.map((item, index) => (
                <div key={index} className="overflow-hidden">
                    <motion.section
                        initial={{ x: index % 2 === 0 ? -60 : 60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <section key={index} className={`md:mx-10 mt-32 md:min-h-[60vh] min-h-[100vh] ${index % 2 === 0 ? `md:border-l-4 ${nightMode ? 'border-l-blue-950' : 'border-l-blue-800'}` : `md:border-r-4 ${nightMode ? 'border-r-blue-950' : 'border-r-blue-800'} `}  ${nightMode ? 'bg-black' : ''}`}>
                            <div className="md:pl-10">
                                <h1 className={`md:text-5xl text-3xl md:text-left text-center pb-10 font-semibold bg-gradient-to-r ${nightMode ? 'text-zinc-300' : 'text-zinc-800'} ${index % 2 === 0
                                    ? ''
                                    : 'md:text-end md:mr-10'
                                    } bg-clip-text text-transparent`}>{spanish ? item.titleSpanish : item.titleEnglish} </h1>
                            </div>
                            <div className={`flex ${index % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'} gap-10 md:w-[95%] w-[90%] mx-auto`}>
                                <div className={`md:w-1/2 w-full md:min-h-96 min-h-[480px] md:${index % 2 === 0 ? 'mr-40' : 'ml-40 md:text-right'}`}>
                                    <p className={`mt-10  ${nightMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{spanish ? item.descriptionSpanish : item.descriptionEnglish}</p>
                                    <h2 className="mt-10 text-lg font-semibold">{spanish ? 'Nuestro desafío:' : 'Our Challenge:'}</h2>
                                    <p className="mt-5">{spanish ? item.desafioSpanish : item.desafioEnglish}</p>
                                    <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'} `}>
                                        <Link
                                            href={item.url}
                                            target="_blank"
                                            className={`flex items-center gap-2 ${index % 2 === 0 ? 'bg-gradient-to-r flex-row' : 'bg-gradient-to-l flex-row-reverse'} from-blue-900 to-blue-600 hover:bg-blue-700 md:hover:scale-110 transition-all duration-150 md:px-10 px-7 md:py-3 py-2 rounded-lg mt-14 w-fit`}
                                        >
                                            <p className={`${nightMode ? '' : 'text-zinc-200'}`}>{spanish ? 'Visitar' : 'Navigate'}</p>
                                            <ArrowRight size={20} className={`${nightMode ? '' : 'text-zinc-200'} ${index % 2 !== 0 && 'rotate-180'}`} />
                                        </Link>
                                    </div>
                                </div>
                                {!isMobile ? (
                                    <div className='w-full h-full'>
                                        <Image
                                            src={item.desktop}
                                            alt="vista computadora"
                                            width={800}
                                            height={600}
                                            className={`w-full`}
                                        />
                                    </div>
                                ) : (
                                    <div className='w-full'>
                                        <Image
                                            src={item.mobile}
                                            alt="foto de movil 1"
                                            width={300}
                                            height={800}
                                            className={`w-full h-full`}
                                        />
                                    </div>
                                )}
                            </div>
                        </section>
                    </motion.section>
                </div>
            ))}
        </div>
    )
}

const info = [
    {
        id: 1,
        titleSpanish: 'Red Integral Educativa',
        titleEnglish: 'Integral Educational Network',
        descriptionSpanish: 'Desarrollo de una plataforma web institucional diseñada para escuelas, jardines y centros educativos de cualquier nivel. RIE permite a las instituciones contar con una imagen web profesional, sistema de asistencias automatizado, y un registro organizado de mensajes entre la comunidad educativa.',
        descriptionEnglish: 'Development of an institutional web platform designed for schools, kindergartens, and educational centers of all levels. RIE provides institutions with a professional web presence, an automated attendance system, and an organized messaging log to enhance communication within the educational community.',
        desafioSpanish: 'El desafío fue crear un sistema centralizado y escalable que permitiera a cada institución gestionar su identidad digital, mantener un control eficiente de asistencias, y facilitar la comunicación interna. También se trabajó en un panel administrativo dinámico y adaptable.',
        desafioEnglish: 'The challenge was to create a centralized and scalable system that would allow each institution to manage its digital identity, efficiently track attendance, and facilitate internal communication. A dynamic and adaptable admin dashboard was also developed as part of the platform.',
        desktop: dektopRIETest,
        mobile: mobileRIE,
        url: 'https://www.somosrie.com'
    },
    {
        id: 2,
        titleSpanish: 'E-commerce de venta de instrumentos musicales',
        titleEnglish: 'E-commerce for musical instruments',
        descriptionSpanish: 'Desarrollo de una tienda online para la venta de instrumentos musicales. El proyecto incluye una sección de productos, un carrito de compras, autentificacion, roles de usuario y compras.',
        descriptionEnglish: 'Development of an online store for the sale of musical instruments. The project includes a product section, a shopping cart, authentication, user roles, and purchases.',
        desafioSpanish: 'El desafío fue implementar una experiencia de compra completa, asegurando que los usuarios pudieran navegar por las secciones, agregar productos al carrito, realizar compras y gestionar sus pedidos. También se trabajó en la autentificación y roles de usuario para garantizar la seguridad de la información.',
        desafioEnglish: 'The challenge was to implement a complete shopping experience, ensuring that users could navigate through sections, add products to the cart, make purchases, and manage their orders. Authentication and user roles were also key focuses to ensure information security.',
        desktop: desktopBuffaloTest,
        mobile: mobileBuffalo,
        url: 'https://www.sbmusic.ar'
    },
    {
        id: 3,
        titleSpanish: 'Consultorio Odontológico',
        titleEnglish: 'Dental Clinic Website',
        descriptionSpanish: 'Diseño de una página web para una clínica odontológica. El proyecto incluye un formulario de contacto, una galería de imágenes y una sección de servicios.',
        descriptionEnglish: 'Design of a website for a dental clinic. The project includes a contact form, an image gallery, and a services section.',
        desafioSpanish: 'El desafío principal fue lograr que el diseño transmita confianza y profesionalismo, asegurando que los pacientes se sientan cómodos al navegar por el sitio. Además, se trabajó en destacar los servicios clave de la clínica y proporcionar una experiencia amigable en dispositivos móviles.',
        desafioEnglish: 'The main challenge was to ensure that the design conveys trust and professionalism, while making patients feel comfortable browsing the site. Additionally, the focus was on highlighting the clinic\'s key services and providing a mobile-friendly experience.',
        desktop: desktopPinascoTest,
        mobile: mobilePinasco,
        url: 'https://www.odontologiapinasco.com'
    }
];