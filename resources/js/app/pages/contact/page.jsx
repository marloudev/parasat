import React, { useEffect, useState } from 'react'
import TopBarSection from '../landing_page/sections/top-bar-section'
import FooterSection from '../landing_page/sections/footer-section'
import ContactSection from './sections/contact-section'

export default function ContactPage() {
    const [flashing, setFlashing] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFlashing(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className={flashing ? 'animate-flash' : ''}>
            <TopBarSection />
            <ContactSection />
            <FooterSection />
        </div>
    )
}
