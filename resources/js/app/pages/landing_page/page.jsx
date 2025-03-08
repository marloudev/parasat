import React, { useEffect, useState } from 'react'
import PlanListSection from './sections/plan-list-section'
import TopBarSection from './sections/top-bar-section'
import ParasatCoverSection from './sections/parasat-cover-section'
import FooterSection from './sections/footer-section'
import ContactUsSection from './sections/contact-us-section'
import store from '../store/store'
import { get_internet_plan_thunk } from '@/app/redux/internet-plan-thunk'

export default function LandingPage() {

    const [flashing, setFlashing] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFlashing(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        store.dispatch(get_internet_plan_thunk())
    }, []);
    return (
        <div className={flashing ? 'animate-flash' : ''}>
            <TopBarSection />
            <ParasatCoverSection />
            <PlanListSection />
            <div className='w-screen text-center ps-4 font-semibold flex items-center justify-center mb-4'>
                <h1 className='text-xl'>
                    <i>Note: For <b>Plan Upgrade</b>, please visit Parasat Office</i>
                </h1>
            </div>
            <section id='contactsss'>
                <ContactUsSection />
            </section>
            <FooterSection />
        </div>
    )
}
