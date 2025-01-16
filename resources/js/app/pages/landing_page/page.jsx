import React from 'react'
import PlanListSection from './sections/plan-list-section'
import TopBarSection from './sections/top-bar-section'
import ParasatCoverSection from './sections/parasat-cover-section'

export default function LandingPage() {
    return (
        <div>
            <TopBarSection />
            <ParasatCoverSection />
            <PlanListSection />
        </div>
    )
}
