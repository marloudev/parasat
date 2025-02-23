import React, { useEffect } from 'react'
import TopNaveSection from '../../tech_team/request_item/_sections/top-nav-section'
import ApplicationTableSection from '../../admin/application/section/application-table-section'
import store from '../../store/store';
import { get_application_thunk } from '@/app/redux/application-thunk';

export default function CustomerServicePage() {
  useEffect(() => {
    store.dispatch(get_application_thunk())
  }, []);
  return (
    <div className="py-8">
      <div className='pb-8'>
        <TopNaveSection />
      </div>

      <div className="text-center px-2">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">LIST OF APPLICATIONS</h1>
          <p className="mt-2 text-sm text-gray-700">

          </p>
        </div>
      </div>

      <div className="-mx-4 px-4 sm:-mx-0">
        <ApplicationTableSection />
      </div>
    </div>
  )
}
