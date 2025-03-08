import React, { useEffect, useState } from 'react'
import TopBarSection from '../../landing_page/sections/top-bar-section';

export default function TermsConditionPage() {
    const [flashing, setFlashing] = useState(true);
    // const id = window.location.pathname.split('/')[2]

    useEffect(() => {
        const timer = setTimeout(() => {
            setFlashing(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    // useEffect(() => {
    //     store.dispatch(get_internet_plan_by_id_thunk(id))
    // }, []);
    return (
        <div className={flashing ? 'animate-flash' : ''}>
            <TopBarSection />
        </div>
    )
}
