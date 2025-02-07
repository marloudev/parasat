import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import PlansSection from './_sections/plans-section'
import CreateInternetPlanSection from './_sections/create-internet-plan-section'
import store from '../../store/store';
import { get_internet_plan_thunk } from '@/app/redux/internet-plan-thunk';

export default function InternetPlansPage() {
  useEffect(() => {
    store.dispatch(get_internet_plan_thunk())
  }, []);
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
