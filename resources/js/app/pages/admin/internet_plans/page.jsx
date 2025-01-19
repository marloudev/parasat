import React from 'react'
import AdminLayout from '../layout'
import PlansSection from './_sections/plans-section'
import CreateInternetPlanSection from './_sections/create-internet-plan-section'

export default function InternetPlansPage() {
  return (
    <AdminLayout>
      <div>
        <div>
          <CreateInternetPlanSection />
        </div>
        <PlansSection />
      </div>
    </AdminLayout>
  )
}
