import React, { useEffect, useState } from 'react'
import ApplicationFormSection from './sections/application-form-section'
import TopBarSection from '../landing_page/sections/top-bar-section'

export default function ApplicationPage() {
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
            <ApplicationFormSection />
        </div>
    )
}
