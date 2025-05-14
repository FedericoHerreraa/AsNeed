'use client'

import Lenis from 'lenis'
import { createContext, useContext, useEffect, useState } from 'react'

interface SmoothScrollContextType {
    lenis: Lenis | null
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null })

export const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null)
    
    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            infinite: false,
        })

        function raf(time: number) {
            lenisInstance.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
        setLenis(lenisInstance)

        return () => {
            lenisInstance.destroy()
        }
    }, [])

    return (
        <SmoothScrollContext.Provider value={{ lenis }}>
            {children}
        </SmoothScrollContext.Provider>
    )
}

export const useSmoothScroll = () => {
    const context = useContext(SmoothScrollContext)
    if (!context) {
        throw new Error('useSmoothScroll must be used within a SmoothScrollProvider')
    }
    return context
}