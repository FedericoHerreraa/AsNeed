'use client'


import { MdNightlight } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { HiQueueList } from "react-icons/hi2";

import { useLenguage } from "@/app/context/LenguageContext";
import { useMobileView } from "@/app/context/MobileViewContext";

import logoDark from '@/app/img/logos/newDarkLogo.png'
import logoLight from '@/app/img/logos/newLightLogo.png'

import argFlag from '@/app/img/others/argentina.png'
import usaFlag from '@/app/img/others/usa.png'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select"  

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/app/components/ui/sheet"

interface TabProps {
    spanish: boolean
    setSpanish: (value: boolean) => void
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    theme: string | undefined
    setTheme: (value: string) => void
}


export const Header = ({ bgDark, bgLight } : { bgDark: string, bgLight: string }) => {
    const { spanish, setSpanish } = useLenguage()
    const { isMobile } = useMobileView()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null 
    }

    return (
        <header className={`dark:text-zinc-300  ${theme === 'dark' ? bgDark : bgLight } `}>
            <div className="flex justify-between items-center md:w-[80%] w-[90%] mx-auto my-auto md:py-3 py-8 ">
                <Link href='/' className="flex items-center gap-1">
                    <Image 
                        src={theme === 'dark' ? logoDark : logoLight} 
                        alt="logo" 
                        className="md:w-[85px] w-16" 
                    />
                    <div className="flex flex-col">    
                        <h1 className='dark:text-white text-black md:text-2xl text-lg'>AsNeed</h1>
                        <h4 className="text-zinc-500 md:text-sm text-xs">{spanish ? 'Tu Propio Negocio' : 'Own Your Business'}</h4>
                    </div>
                </Link>
                <nav className="flex gap-10 items-center">
                    {isMobile ? (
                        tabsMobileView({
                            setSpanish,
                            spanish,
                            isOpen,
                            setIsOpen,
                            theme,
                            setTheme,
                        })
                    ) : (
                        tabsDesktopView({
                            setSpanish,
                            spanish,
                            isOpen,
                            setIsOpen,
                            theme,
                            setTheme,
                        })
                    )}
                </nav>
            </div>
        </header>
    )
}

const tabsDesktopView = ({ 
    setSpanish,
    spanish,
    theme,
    setTheme,
} : TabProps ) => {
    return (
        <>
            {tabs.map((tab) => (
                <Link 
                    key={tab.id}
                    href={tab.url}
                    className="text-xl cursor-pointer hover:scale-105 duration-200"
                >
                    {spanish ? tab.titleSpanish : tab.titleEnglish}
                </Link>    
            ))}
            <div
                className="cursor-pointer"
                onClick={() =>  setTheme(theme === 'dark' ? 'light' : 'dark') } 
            >
                {theme === 'dark' 
                    ? <MdWbSunny size={20}/> 
                    : <MdNightlight size={20}/>}
            </div>
            <div>
                <Select 
                    defaultValue={spanish ? "spanish" : "english"} 
                    onValueChange={() => setSpanish(!spanish)}
                >
                    <SelectTrigger 
                        className='w-[125px] dark:bg-black dark:border-zinc-600 bg-white border-zinc-300 m-0 border'
                    >
                        <SelectValue placeholder={spanish ? spanish ? "Español" : "Spanish" : spanish ? "Inglés" : "English"} />
                    </SelectTrigger>
                    <SelectContent 
                        className='dark:bg-black dark:text-zinc-200 dark:border-zinc-800 bg-white text-zinc-800 border-zinc-200'
                    >
                        <SelectItem className="focus:bg-zinc-800 focus:text-zinc-200 " value="spanish">
                            <div className="flex items-center gap-2">
                                {spanish ? 'Español' : 'Spanish'}
                                <Image
                                    src={argFlag}
                                    alt="Argentine Flag"
                                    width={20}
                                />
                            </div>
                        </SelectItem>
                        <SelectItem className="focus:bg-zinc-800 focus:text-zinc-200" value="english">
                            <div className="flex items-center gap-2">
                                {spanish ? 'Inglés' : 'English'}    
                                <Image
                                    src={usaFlag}
                                    alt="USA Flag"
                                    width={20}
                                />
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </>
    )
}


const tabsMobileView = ({ 
    setSpanish,
    spanish,
    isOpen,
    setIsOpen,
    theme,
    setTheme,
} : TabProps ) => {
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
                <HiQueueList size={30}/>
            </SheetTrigger>
            <SheetContent className='dark:bg-black dark:border-zinc-800 pt-10 border-zinc-300'>
                <SheetHeader>
                    <SheetTitle className='text-2xl pb-10 text-start dark:text-zinc-200 text-zinc-800'>
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="absolute top-0 right-0 m-5 cursor-pointer text-lg"
                        >
                            {theme === 'dark' ? '❌' : '✖️'}
                        </button>
                        AsNeed
                    </SheetTitle>
                    <SheetDescription className="flex flex-col items-start gap-5">
                        {tabs.map((tab) => (
                            <Link 
                                key={tab.id}
                                onClick={() => setIsOpen(false) }
                                href={tab.url}
                                className="text-lg"
                            >
                                {spanish ? tab.titleSpanish : tab.titleEnglish}
                            </Link>    
                        ))}
                        <>
                            <Select 
                                defaultValue={spanish ? "spanish" : "english"} 
                                onValueChange={() => setSpanish(!spanish)}
                            >
                                <SelectTrigger 
                                    className='w-[125px] dark:bg-black dark:border-zinc-600 bg-white border-zinc-300 m-0 border'
                                >
                                    <SelectValue placeholder={spanish ? spanish ? "Español" : "Spanish" : spanish ? "Inglés" : "English"} />
                                </SelectTrigger>
                                <SelectContent 
                                    className='dark:bg-black dark:text-zinc-200 dark:border-zinc-800 bg-white text-zinc-800 border-zinc-200'
                                >
                                    <SelectItem className="focus:bg-zinc-800 focus:text-zinc-200" value="spanish">
                                        <div className="flex items-center gap-2">
                                            {spanish ? 'Español' : 'Spanish'}
                                            <Image
                                                src={argFlag}
                                                alt="Argentina Flag"
                                                width={15}
                                            />
                                        </div>
                                    </SelectItem>
                                    <SelectItem className="focus:bg-zinc-800 focus:text-zinc-200" value="english">
                                        <div className="flex items-center gap-2">
                                            {spanish ? 'Inglés' : 'English'}    
                                            <Image
                                                src={usaFlag}
                                                alt="USA Flag"
                                                width={15}
                                            />
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </>
                        <button
                            className="cursor-pointer"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark') }
                        >
                            {theme === 'dark' 
                                ? <MdWbSunny size={20}/>
                                : <MdNightlight size={20}/>}
                        </button>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

const tabs = [
    {
        id: 1,
        titleSpanish: 'Nuestro Trabajo',
        titleEnglish: 'Our Work',
        url: '/our-work'
    },
    {
        id: 2,
        titleSpanish: 'Planes',
        titleEnglish: 'Plans',
        url: '/plans'
    },
    {
        id: 3,
        titleSpanish: 'Empezar Ya',
        titleEnglish: 'Start Now',
        url: '/start-now'
    }
]