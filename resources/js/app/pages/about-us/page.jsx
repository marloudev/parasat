import React, { useEffect, useState } from 'react';
import TopBarSection from '../landing_page/sections/top-bar-section';
import FooterSection from '../landing_page/sections/footer-section';
import MissionVisionSection from './sections/mission-vision-section';
import ContactUsSection from '../landing_page/sections/contact-us-section';

export default function AboutUsPage() {
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
            <MissionVisionSection />
            <section id='contactsss'>
                <ContactUsSection />
            </section>
            <FooterSection />
        </div>
    );
}
