import React, { useEffect } from 'react'
import TopNaveSection from './_sections/top-nav-section'
import CreateRequestSection from './_sections/create-request-section'
import store from '../../store/store'
import { get_request_item_thunk } from '@/app/redux/request-item-thunk'
import RequestItemTableSection from './_sections/request-item-table-section'
import { get_item_thunk } from '@/app/redux/item-thunk'
import { get_user_thunk, get_users_thunk } from '@/app/redux/app-thunk'
import TechTeamLayout from '../layout'

const people = [
  { name: '252', title: 'ONT', email: '200', role: 'Headend' },
  // More people...
]


export default function RequestItemPage() {

  useEffect(() => {
    store.dispatch(get_item_thunk())
    store.dispatch(get_request_item_thunk())
    store.dispatch(get_user_thunk())
    store.dispatch(get_users_thunk())
  }, [])
  return (
    <TechTeamLayout>
      <div className="flex items-center justify-between px-4">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Request Item</h1>
          <p className="mt-2 text-sm text-gray-700">

          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <CreateRequestSection />
        </div>
      </div>

      <div className="-mx-4 px-4 sm:-mx-0">
        <RequestItemTableSection />
      </div>
    </TechTeamLayout>
  )
}
