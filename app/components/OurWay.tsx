"use client";

import { useLenguage } from "@/app/context/LenguageContext";
import { useNightMode } from "@/app/context/NightModeContext";
import { TitleSection } from "@/app/components/reusable/titleSection";
import { MdOutlineCancel } from "react-icons/md";
import { motion } from "framer-motion";


export const OurWay = () => {
  const { nightMode } = useNightMode();
  const { spanish } = useLenguage();

  return (
    <div
      className={`${nightMode ? "bg-[url('/img/bg-black.jpg')]" : "bg-[url('/img/bg-white.jpg')]"} md:min-h-[100vh] min-h-[70vh] w-full bg-cover bg-center `}
    >
      <TitleSection
        firstTitleEnglish="Our Way Of "
        secondTitleEnglish="Working"
        firstTitleSpanish="Nuestra Forma de "
        secondTitleSpanish="Trabajar"
        subTitleEnglish="First of all we will show you our philosophy"
        subTitleSpanish="Primero que nada te mostramos nuestra filosofía"
        color="from-green-600 to-green-400"
        spanish={spanish}
        nightMode={nightMode}
      />

      <div className="mt-20 md:px-10 px-4">
        <section>
          <div className="flex flex-col justify-center gap-10 text-white">
            {arrowsInfo.map((arrow, index) => (
              <div
                key={index}
                className="flex gap-5 md:w-[35%] w-[80%] mx-auto items-center"
              >
                <div className="flex flex-col items-start">
                  <h1
                    className={`md:text-3xl font-semibold mb-3 ${nightMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                  >
                    {spanish ? arrow.titleSpanish : arrow.titleEnglish}
                  </h1>
                  <motion.section
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-3 ml-5">
                      <MdOutlineCancel size={25} className="text-red-500 w-1/8" />
                      <p className="md:text-base text-sm text-zinc-500 w-full">
                        {spanish ? arrow.spanishCancel : arrow.englishCancel}
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ x: 60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 ml-5">
                      <p className={`md:text-lg text-sm bg-gradient-to-r bg-clip-text text-transparent ${nightMode ? 'from-orange-400 to-violet-400' : 'from-orange-600 to-violet-600'} w-full`}>
                        {spanish ? arrow.spanishOk : arrow.englishOk}
                      </p>
                    </div>
                  </motion.section>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const arrowsInfo = [
  {
    titleSpanish: "Desarrollo personalizado",
    titleEnglish: "Custom Development",
    spanishCancel: "No usamos plantillas prediseñadas. ",
    spanishOk: "Diseñamos y desarrollamos todo desde cero para lograr soluciones únicas y escalables.",
    englishCancel: "We don’t use pre-made templates.",
    englishOk: " We design and build everything from scratch to deliver unique, scalable solutions."
  },
  {
    titleSpanish: "Identidad auténtica",
    titleEnglish: "Authentic Identity",
    spanishCancel: "Nada genérico.",
    spanishOk: "Creamos sitios con estilo propio, fieles a la esencia de tu marca y con una experiencia personalizada.",
    englishCancel: "Nothing generic.",
    englishOk: "We build sites with original style, true to your brand’s essence and offering a custom experience.",
  },
  {
    titleSpanish: "Código real, resultados reales",
    titleEnglish: "Real Code, Real Results",
    spanishCancel: "No usamos Shopify ni editores visuales.",
    spanishOk: "Programamos con tecnologías modernas para lograr mayor control y rendimiento.",
    englishCancel: "We don’t use Shopify or visual editors.",
    englishOk: "We code with modern technologies to achieve better control and performance.",
  },
];
