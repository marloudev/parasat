import React, { useEffect, useState } from 'react'
import ApplicationFormSection from './sections/application-form-section'
import TopBarSection from '../landing_page/sections/top-bar-section'
import store from '../store/store';
import { get_internet_plan_by_id_thunk } from '@/app/redux/internet-plan-thunk';

export default function ApplicationPage() {
    const [flashing, setFlashing] = useState(true);
    const id = window.location.pathname.split('/')[2]

    useEffect(() => {
        const timer = setTimeout(() => {
            setFlashing(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        store.dispatch(get_internet_plan_by_id_thunk(id))
    }, []);
    return (
        <div className={flashing ? 'animate-flash' : ''}>
            <TopBarSection />
            <ApplicationFormSection />
        </div>
    )
}
