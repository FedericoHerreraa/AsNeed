'use client'

import { motion } from "framer-motion"

export const TitleSection = ({
    firstTitleSpanish,
    secondTitleSpanish,
    firstTitleEnglish,
    secondTitleEnglish,
    subTitleSpanish,
    subTitleEnglish,
    color,
    spanish,
} : {
    firstTitleSpanish: string
    secondTitleSpanish: string
    firstTitleEnglish: string
    secondTitleEnglish: string
    subTitleSpanish: string
    subTitleEnglish: string
    color: string
    spanish: boolean
}) => {
    return (
        <motion.div
                initial={{ y: -60, opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
        >
            <div>
                <div className="flex justify-center gap-2 mb-4">
                    <motion.div 
                        className="w-6 h-2 bg-blue-500 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    ></motion.div>
                    <motion.div 
                        className="w-3 h-2 bg-violet-500 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    ></motion.div>
                    <motion.div 
                        className="w-4 h-2 bg-blue-500 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                    ></motion.div>
                </div>
                <p className="text-zinc-500 text-center mb-3 md:text-xl ">
                    {spanish
                        ? subTitleSpanish
                        : subTitleEnglish
                    }
                </p>
                    
                <h1 className='dark:text-zinc-300 text-zinc-900 text-center md:text-6xl text-4xl md:w-[50%] w-[90%] mx-auto  font-semibold'>
                    {spanish ? firstTitleSpanish : firstTitleEnglish}{" "}
                    <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                        {spanish ? secondTitleSpanish : secondTitleEnglish}
                    </span>
                </h1>
            </div>
        </motion.div>
    )
}