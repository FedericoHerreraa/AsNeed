"use client";

import { useLenguage } from "@/app/context/LenguageContext";
import { TitleSection } from "@/app/components/reusable/titleSection";
import { Projects } from "./Projects";
import { UITechnologyComponent } from "./UITechnology";

export const OurWork = () => {
  const { spanish } = useLenguage();

  return (
    <div
      className='dark:bg-black dark:text-zinc-300 min-h-[150vh] md:pt-20 pt-10'
    >
      <TitleSection
        firstTitleEnglish="Look At Our"
        secondTitleEnglish="Best Projects"
        firstTitleSpanish="Mirá Nuestros"
        secondTitleSpanish="Mejores Proyectos"
        subTitleEnglish="Before starting you should know what we do"
        subTitleSpanish="Antes de comenzar debes conocer qué hacemos"
        color="from-orange-500 to-orange-400"
        spanish={spanish}
      />

      <UITechnologyComponent />

      <Projects />
    </div>
  );
};
