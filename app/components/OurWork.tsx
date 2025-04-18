"use client";

import { useLenguage } from "@/app/context/LenguageContext";
import { useNightMode } from "@/app/context/NightModeContext";
import { TitleSection } from "@/app/components/reusable/titleSection";
import { Projects } from "./Projects";
import { UITechnologyComponent } from "./UITechnology";

export const OurWork = () => {
  const { nightMode } = useNightMode();
  const { spanish } = useLenguage();

  return (
    <div
      className={`${nightMode ? "bg-black text-zinc-300" : ""} min-h-[150vh] md:pt-20 pt-10`}
    >
      <TitleSection
        firstTitleEnglish="Look At Our"
        secondTitleEnglish="Best Projects"
        firstTitleSpanish="Mirá Nuestros"
        secondTitleSpanish="Mejores Proyectos"
        subTitleEnglish="Before starting you should know what we do"
        subTitleSpanish="Antes de comenzar debes conocer qué hacemos"
        color="from-orange-400 to-orange-800"
        spanish={spanish}
        nightMode={nightMode}
      />

      <UITechnologyComponent />

      <Projects />
    </div>
  );
};
