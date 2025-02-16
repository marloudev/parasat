import React from 'react'
import TopNaveSection from '../../tech_team/request_item/_sections/top-nav-section'
import ApplicationTableSection from '../../admin/application/section/application-table-section'

export default function CustomerServicePage() {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className='pb-8'>
        <TopNaveSection />
      </div>

      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Applications</h1>
          <p className="mt-2 text-sm text-gray-700">

          </p>
        </div>
      </div>

      <div className="-mx-4 mt-4 p-4 sm:-mx-0">
        <ApplicationTableSection />
      </div>
    </div>
  )
}
