'use client'

import { useEffect, useState } from "react";
import { useLenguage } from "@/app/context/LenguageContext";
import { ContactUsView } from "./ContactUsView";

export const ContactUsController = () => {
    const { spanish } = useLenguage()
    const [showConfetti, setShowConfetti] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [date, setDate] = useState<Date>()
    const [time, setTime] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)
    const [formData, setFormData] = useState({
        to: '',
        name: '',
        text: '',
    })

    const [today, setToday] = useState<Date | null>(null);
    const [twoMonthsAhead, setTwoMonthsAhead] = useState<Date | null>(null);

    useEffect(() => {
        const now = new Date();
        setToday(now);
        const future = new Date();
        future.setMonth(now.getMonth() + 2);
        setTwoMonthsAhead(future);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!date) {
            if (spanish) setError("Por favor selecciona una fecha antes de enviar el formulario.")
            else setError("Please select a date before submitting the form.")
            
            setTimeout(() => setError(''), 3000)
            return;
        }

        const dataToSend = {
            ...formData,
            date: date?.toLocaleDateString() || '',
            time: time || '',
            lenguage: spanish ? 'es' : 'en',
        }

        setLoading(true)
    
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });
    
            const result = await response.json();
            if (response.ok) {
                setLoading(false)
                setShowConfetti(true)
                setFormData({
                    to: '',
                    name: '',
                    text: '',
                });
                setDate(undefined)
                setTime('')
            } else {
                setLoading(false)
                console.error('Error: ' + result.message);
            }
        } catch (error) {
            setLoading(false)
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        if (showConfetti) {
            const timer = setTimeout(() => {
                setShowConfetti(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
        if (error) {
            const timeout = setTimeout(() => setError(''), 3000);
            return () => clearTimeout(timeout);
        }
    }, [showConfetti, error])

    return (
        <ContactUsView
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            loading={loading}
            showConfetti={showConfetti}
            spanish={spanish}
            error={error}
            today={today}
            twoMonthsAhead={twoMonthsAhead}
            setError={setError}
        />
    )
}