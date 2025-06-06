"use client";

import { useLenguage } from "@/app/context/LenguageContext";

import imageFede from "@/app/img/founders/fede.jpg";
import imageCami from "@/app/img/founders/cami.jpeg";

import { ImArrowRight2 } from "react-icons/im";
import { BsArrow90DegDown } from "react-icons/bs";

import Image from "next/image";
import { useMobileView } from "@/app/context/MobileViewContext";
import { TitleSection } from "@/app/components/reusable/titleSection";

export const Founders = () => {
  const { spanish } = useLenguage();
  const { isMobile } = useMobileView();

  return (
    <div className='dark:bg-black min-h-[75vh]'>
      <TitleSection
        firstTitleEnglish="Meet Our"
        secondTitleEnglish="Founders"
        firstTitleSpanish="Conocé a Nuestros "
        secondTitleSpanish="Fundadores"
        subTitleEnglish="Those who bring the magic to life"
        subTitleSpanish="Los que llevan la magia adelante"
        color="from-violet-700 to-violet-500"
        spanish={spanish}
      />

      <section
        className='dark:bg-zinc-900 bg-zinc-100 md:p-10 p-5 flex flex-col md:gap-2 gap-10 min-h-96 rounded-xl shadow-xl mt-20 md:w-[80%] w-[95%] mx-auto'
      >
        <div className="md:mx-10 mx-2 flex md:flex-row flex-col md:items-center md:gap-0 gap-5 items-start">
          <div className="md:w-1/4 flex flex-row items-center gap-5">
            <Image
              src={imageCami}
              alt="foto perfile de Cami"
              className="rounded-full object-cover w-[150px] h-[150px] shadow-2xl"
            />
            {isMobile ? (
              <BsArrow90DegDown
                color="gray"
                size={25}
                className="w-1/6 animate-pulse transform -scale-x-100"
              />
            ) : (
              <ImArrowRight2
                color="gray"
                size={20}
                className="w-1/6 animate-pulse"
              />
            )}
          </div>
          <div
            className='md:text-lg dark:text-zinc-300 text-zinc-800 md:w-3/4'
          >
            {spanish ? (
              <p>
                Mi nombre es{" "}
                <span className='font-bold bg-gradient-to-r dark:from-blue-500 dark:to-blue-200 from-blue-700 to-blue-400 bg-clip-text text-transparent'>
                  Camila Aznar
                </span>{" "}
                y soy desarrolladora Front-end. Actualmente, me dedico a crear
                soluciones visuales innovadoras, aportando creatividad y diseño
                a cada proyecto. Hoy trabajo en "AsNeed" como{" "}
                <span className="font-bold">Co-Fundadora</span>, desarrollando
                ideas que conectan con las necesidades de nuestros clientes.
              </p>
            ) : (
              <p>
                My name is{" "}
                <span className='font-bold bg-gradient-to-r dark:from-blue-500 dark:to-blue-200 from-blue-700 to-blue-400 bg-clip-text text-transparent'>
                  Camila Aznar
                </span>
                , and I am a Front-end Developer. I specialize in creating
                innovative visual solutions, bringing creativity and design to
                every project. Currently, I work at "AsNeed" as a{" "}
                <span className="font-bold">Co-Founder</span>, developing ideas
                that align with the needs of our clients.
              </p>
            )}
          </div>
        </div>

        <div className="md:mx-10 mx-2 flex md:flex-row flex-col-reverse md:items-center md:gap-0 gap-5 items-end">
          <div className='md:text-lg dark:text-zinc-300 text-zinc-800 md:w-3/4'>
            {spanish ? (
              <p>
                Mi nombre es{" "}
                <span className='font-bold bg-gradient-to-r dark:from-blue-500 dark:to-blue-200 from-blue-700 to-blue-400 bg-clip-text text-transparent'>
                  Federico Herrera
                </span>{" "}
                y soy programador Full Stack. Con conocimientos profesionales
                adquiridos de la Licenciatura en Sistemas en la "Universidad
                Argentina de la Empresa" y trabajando en proyectos de software
                en "AsNeed" como{" "}
                <span className="font-bold">Co-Fundador.</span>
              </p>
            ) : (
              <p>
                My name is{" "}
                <span className='font-bold bg-gradient-to-r dark:from-blue-500 dark:to-blue-200 from-blue-700 to-blue-400 bg-clip-text text-transparent'>
                  Federico Herrera
                </span>
                , and I am a Full Stack Developer. Currently, I&#39;m pursuing a
                Bachelor&#39;s degree in Computer Science at the "Argentine
                University of Enterprise" and working on software projects at
                "AsNeed" as a <span className="font-bold">Co-Founder.</span>
              </p>
            )}
          </div>
          <div className="md:w-1/4 flex items-center gap-5">
            {isMobile ? (
              <BsArrow90DegDown
                color="gray"
                size={25}
                className="w-1/6 animate-pulse"
              />
            ) : (
              <ImArrowRight2
                color="gray"
                size={20}
                className="w-1/6 animate-pulse rotate-180"
              />
            )}
            <Image
              src={imageFede}
              alt="foto perfile de Fede"
              className="rounded-full object-cover w-[150px] h-[150px] shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
