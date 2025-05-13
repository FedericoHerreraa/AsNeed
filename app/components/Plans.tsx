'use client'

import Link from "next/link"

import { TitleSection } from "@/app/components/reusable/titleSection"
import { useLenguage } from "@/app/context/LenguageContext"
import { useNightMode } from "@/app/context/NightModeContext"

import { FaApple, FaRocket, FaBuilding, FaShoppingCart } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useMobileView } from "../context/MobileViewContext"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion"


export const PlansComponent = () => {
    const { spanish } = useLenguage()
    const { nightMode } = useNightMode()
    const { isMobile } = useMobileView()

    return (
        <div className={`${nightMode ? 'bg-black text-zinc-300' : 'text-zinc-700'} min-h-[100vh] md:pt-20 pt-10`}>
            <TitleSection
                firstTitleEnglish="Our"
                secondTitleEnglish="Plans"
                firstTitleSpanish="Nuestros"
                secondTitleSpanish="Planes"
                subTitleEnglish="We have a plan for you"
                subTitleSpanish="Tenemos un plan para ti"
                color="from-blue-500 to-violet-600"
                spanish={spanish}
                nightMode={nightMode}
            />

            <section className="md:w-[90%] w-[95%] mx-auto mt-20">
                <div>
                    <div className="mb-7 md:py-2 py-1 w-fit rounded-lg">
                        <h1 className="md:text-4xl font-extralight bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-violet-600 text-lg">{spanish ? 'Desarrollo Web' : 'Web Development'}</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {webPlans.map(plan => (
                            <div key={plan.id} className={`border min-h-[50vh] transition-all duration-200 rounded-xl py-7 px-5 ${nightMode ? 'text-zinc-300 bg-zinc-900 border-blue-900 hover:border-blue-500' : 'text-zinc-700 bg-zinc-100 border-blue-300 hover:border-blue-500'}`}>
                                <div className={nightMode ? 'text-zinc-300' : 'text-zinc-600'}>
                                    <div className="flex items-center justify-center gap-5">
                                        <h2 className={`md:text-2xl text-xl font-bold border-b-[0.5px] ${nightMode ? 'border-b-zinc-300' : 'border-b-zinc-800'} w-fit pb-1`}>{spanish ? plan.title.spanish : plan.title.english}</h2>
                                        <plan.icon className="text-zinc-400" size={isMobile ? 15 : 25}/>
                                    </div>
                                    <p className={`mt-6 mb-2 ${nightMode ? 'text-zinc-400' : 'text-zinc-500'}`}>{spanish ? plan.description.spanish : plan.description.english}</p>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem 
                                            value="item-1"
                                            className='border-none rounded-lg'
                                        >
                                            <AccordionTrigger className={`font-bold text-lg ${nightMode ? 'text-zinc-300' : 'text-zinc-500'} w-fit`}>
                                                Ver Caracteristicas
                                            </AccordionTrigger>
                                            
                                            <AccordionContent className="my-2">
                                                <div className="mt-2">
                                                    <h3 className={`${nightMode ? 'text-zinc-300' : 'text-zinc-600'} md:text-lg`}>{spanish ? 'Caracteristicas:' : 'Features:'}</h3>
                                                    {(spanish ? plan.features.spanish : plan.features.english).map((feature, index) => (
                                                        <p key={index} className="flex items-center text-sm gap-2 ml-1 mb-2 mt-2">
                                                            <IoIosCheckmarkCircle className="text-yellow-500"/>
                                                            {feature}
                                                        </p>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                                <div className="flex flex-col items-center gap-5 mt-10 w-fit mx-auto">
                                    <div>
                                        <p className={`bg-gradient-to-r bg-clip-text text-transparent ${nightMode ? 'from-violet-300 to-blue-300' : 'from-violet-500 to-blue-500'} text-xl`}><span className="text-sm">{spanish ? 'a partir de  ' : 'starting at  '}</span> ${Number(plan.price).toLocaleString()} USD</p>
                                    </div>
                                    <div>   
                                        <Link href='/start-now' className={`w-full mt-5 py-2 px-4 transition-all duration-100 rounded-md ${nightMode ? 'bg-blue-950 hover:bg-blue-800 text-zinc-300' : 'bg-blue-300 hover:bg-blue-500 text-zinc-700'}`}>
                                            {spanish ? 'Quiero saber mas' : 'I want to know more'}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-20">
                    <div className="mb-7 md:py-2 py-1 w-fit rounded-lg">
                        <h1 className="md:text-4xl font-extralight bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-violet-600 text-lg">{spanish ? 'Desarrollo Movil' : 'Mobile Development'}</h1>
                    </div>
                    <div className={`p-7 border  min-h-40 w-full rounded-xl transition-all duration-200 ${nightMode ? 'bg-zinc-900 border-blue-900 hover:border-blue-500' : 'bg-zinc-100 border-blue-300 hover:border-blue-600'}`}>
                        <div className="flex items-center gap-2">
                            <h1 className={`md:text-2xl text-xl border-b-[0.5px] ${nightMode ? 'border-b-zinc-300' : 'border-b-zinc-700'} w-fit pb-1`}>{spanish ? 'Desarrollo Multiplataforma' : 'Multiplatform Development'}</h1>
                            <FaApple size={isMobile ? 25 : 35} className="text-zinc-400"/>
                            <IoLogoAndroid size={isMobile ? 25 : 35} className="text-zinc-400"/>
                        </div>
                        <p className={`mt-3 ${nightMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                            {spanish 
                                ? 'Desarrollamos aplicaciones móviles optimizadas para iOS y Android con un solo código, reduciendo costos y tiempos de desarrollo. Utilizamos tecnologías avanzadas como React Native y Flutter, garantizando un alto rendimiento, compatibilidad y una experiencia de usuario fluida en todos los dispositivos. Gracias a un enfoque multiplataforma, las actualizaciones y mejoras se aplican simultáneamente en ambas plataformas, asegurando eficiencia y escalabilidad para el crecimiento del negocio.'
                                : 'We develop optimized mobile applications for iOS and Android with a single codebase, reducing costs and development time. Using advanced technologies like React Native and Flutter, we ensure high performance, compatibility, and a smooth user experience across all devices. With a multiplatform approach, updates and improvements are applied simultaneously on both platforms, ensuring efficiency and scalability for business growth.'
                            }
                        </p>
                        <div className="w-fit mt-10">
                            <Link href='/start-now' className={`w-full mt-5 py-2 px-4 transition-all duration-100 rounded-md ${nightMode ? 'bg-blue-950 hover:bg-blue-800 text-zinc-300' : 'bg-blue-300 hover:bg-blue-500 text-zinc-700'}`}>
                                {spanish ? 'Quiero saber mas' : 'I want to know more'}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <div className="mb-7 md:py-2 py-1 w-fit rounded-lg">
                        <h1 className="md:text-4xl font-extralight bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-violet-600 text-lg">{spanish ? 'Extras' : 'Extras'}</h1>
                    </div>
                    <div className={`p-7 border  min-h-40 w-full rounded-xl transition-all duration-200 ${nightMode ? 'bg-zinc-900 border-blue-900 hover:border-blue-500' : 'bg-zinc-100 border-blue-300 hover:border-blue-600'}`}>
                        <div className="flex items-center gap-2">
                            <h1 className={`md:text-2xl text-xl border-b-[0.5px] ${nightMode ? 'border-b-zinc-300' : 'border-b-zinc-700'} w-fit pb-1`}>{spanish ? 'Mantenimiento de aplicaciones' : 'Apps maintenance'}</h1>
                        </div>
                        <p className={`mt-3 ${nightMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                            {spanish 
                                ? 'Ofrecemos un servicio de mantenimiento mensual para proyectos web y móviles por $30.000, que incluye actualizaciones de código para mantener el sistema seguro y al día, modificaciones leves según las necesidades del cliente, gestión completa de dominio y hosting, corrección de errores técnicos, y soporte continuo para resolver dudas o consultas. Este servicio garantiza el correcto funcionamiento y evolución del proyecto a largo plazo.'
                                : 'We offer a monthly maintenance service for web and mobile projects for 30 USD, which includes code updates to keep the system secure and up to date, minor modifications based on client needs, full domain and hosting management, bug fixes, and ongoing support to address any questions or issues. This service ensures the long-term functionality and growth of the project.'
                            }
                        </p>
                        <div className="w-fit mt-10">
                            <Link href='/start-now' className={`w-full mt-5 py-2 px-4 transition-all duration-100 rounded-md ${nightMode ? 'bg-blue-950 hover:bg-blue-800 text-zinc-300' : 'bg-blue-300 hover:bg-blue-500 text-zinc-700'}`}>
                                {spanish ? 'Quiero saber mas' : 'I want to know more'}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const webPlans = [
    {
        id: 1,
        icon: FaRocket,
        title: {
            english: "Landing Page",
            spanish: "Landing Page"
        },
        description: {
            english: "An ideal choice for professionals, entrepreneurs, and small businesses that need a visually appealing and effective online presence. Includes a modern, mobile-responsive design, clear call-to-action buttons, contact forms, service or product highlights, and basic SEO to enhance visibility and engagement.",
            spanish: "Una opción ideal para profesionales, emprendedores y pequeñas empresas que buscan una presencia en línea atractiva y efectiva. Incluye un diseño moderno y adaptable a dispositivos móviles, botones de llamada a la acción claros, formularios de contacto, presentación de servicios o productos y SEO básico para mejorar la visibilidad y el engagement."
        },
        features: {
            english: [
                "Highly customized and visually appealing design.",
                "Optimized for mobile and desktop devices.",
                "Includes images and videos for better engagement.",
                "Storytelling format to present your brand or business.",
                "SEO implementation to improve search ranking.",
                "Fast loading speed for a better user experience.",
                "Contact forms for easy communication.",
                "Clear call-to-action (CTA) to drive conversions.",
                "Hosting and domain NOT included."
            ],
            spanish: [
                "Diseño altamente personalizado y visualmente atractivo.",
                "Optimizado para dispositivos móviles y computadoras.",
                "Incluye imágenes y videos para mayor impacto.",
                "Formato de storytelling para presentar tu marca o negocio.",
                "SEO implementado para mejorar el posicionamiento en buscadores.",
                "Velocidad de carga rápida para mejor experiencia de usuario.",
                "Formularios de contacto para facilitar la comunicación.",
                "Botones de llamada a la acción (CTA) claros para impulsar conversiones.",
                "No incluye hosting ni dominio."
            ]
        },
        price: '400',
    },
    {
        id: 2,
        icon: FaBuilding,
        title: {
            english: "Corporate Website",
            spanish: "Web Corporativa"
        },
        description: {
            english: "A complete online solution for companies that need a structured and informative website. Includes multiple pages such as 'About Us', 'Services', 'Portfolio', and 'Contact'. Optimized for search engines, with content management capabilities, interactive elements, and a professional design to enhance credibility and customer trust.",
            spanish: "Una solución completa para empresas que requieren un sitio web estructurado e informativo. Incluye múltiples secciones como 'Quiénes Somos', 'Servicios', 'Portafolio' y 'Contacto'. Optimizado para motores de búsqueda, con capacidad de gestión de contenidos, elementos interactivos y un diseño profesional para aumentar la credibilidad y la confianza del cliente."
        },
        features: {
            english: [
                "Multiple sections and custom pages.",
                "Advanced SEO optimization for better visibility.",
                "Content management system (CMS) for easy updates.",
                "Professional and dynamic design to reflect your brand.",
                "Blog or news section for fresh content.",
                "Interactive elements like animations and transitions.",
                "Contact and inquiry forms.",
                "Scalable architecture for future growth."
            ],
            spanish: [
                "Múltiples secciones y páginas personalizadas.",
                "Optimización SEO avanzada para mayor visibilidad.",
                "Sistema de gestión de contenidos (CMS) para actualizaciones fáciles.",
                "Diseño profesional y dinámico que refleja tu marca.",
                "Sección de blog o noticias para contenido actualizado.",
                "Elementos interactivos como animaciones y transiciones.",
                "Formularios de contacto y consulta.",
                "Arquitectura escalable para crecimiento futuro."
            ]
        },
        price: '600'
    },
    {
        id: 3,
        icon: FaShoppingCart,
        title: {
            english: "E-commerce",
            spanish: "E-commerce"
        },
        description: {
            english: "Ideal for businesses that want to sell products online. Includes an intuitive e-commerce platform, shopping cart, secure payment integration, inventory management, order tracking, and an easy-to-manage admin panel.",
            spanish: "Ideal para negocios que desean vender productos en línea. Incluye una plataforma de e-commerce intuitiva, carrito de compras, integración con pagos seguros, gestión de inventario, seguimiento de pedidos y un panel de administración fácil de usar."
        },
        features: {
            english: [
                "Fully functional online store with shopping cart.",
                "Secure payment gateway integration (PayPal, Stripe, etc.).",
                "Product catalog with categories and filters.",
                "Stock and inventory management system.",
                "User-friendly admin panel for managing products and orders.",
                "Automated order tracking and notifications.",
                "Discounts, promotions, and coupon management.",
                "Multi-user roles (Admin, Seller, Customer).",
                "SEO and performance optimization for better rankings.",
                "Mobile-optimized for seamless shopping experience."
            ],
            spanish: [
                "Tienda online completamente funcional con carrito de compras.",
                "Integración con pasarelas de pago seguras (PayPal, Stripe, etc.).",
                "Catálogo de productos con categorías y filtros.",
                "Sistema de gestión de stock e inventario.",
                "Panel de administración intuitivo para gestionar productos y pedidos.",
                "Envio de notificaciones.",
                "Gestión de descuentos, promociones y cupones.",
                "Roles multiusuario (Administrador, Vendedor, Cliente).",
                "Optimización SEO y de rendimiento para mejorar el posicionamiento.",
                "Optimizado para móviles para una experiencia de compra fluida."
            ]
        },
        price: '1500'
    }
]