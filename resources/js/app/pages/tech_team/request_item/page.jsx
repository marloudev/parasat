import React, { useEffect } from 'react'
import TopNaveSection from './_sections/top-nav-section'
import CreateRequestSection from './_sections/create-request-section'
import store from '../../store/store'
import { get_request_item_thunk } from '@/app/redux/request-item-thunk'
import RequestItemTableSection from './_sections/request-item-table-section'
import { get_item_thunk } from '@/app/redux/item-thunk'
import { get_user_thunk } from '@/app/redux/app-thunk'

const people = [
    { name: '252', title: 'ONT', email: '200', role: 'Headend' },
    // More people...
  ]


export default function RequestItemPage() {

  useEffect(()=>{
    store.dispatch(get_item_thunk())
    store.dispatch(get_request_item_thunk())
    store.dispatch(get_user_thunk())
  },[])
  return (
    
    <div className="px-4 py-8 sm:px-6 lg:px-8">
        <div className='pb-8'>
            <TopNaveSection/>
        </div>
        
        <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
                <h1 className="text-base font-semibold text-gray-900">Request Item</h1>
                <p className="mt-2 text-sm text-gray-700">
                    
                </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <CreateRequestSection />
           </div>
        </div>

        <div className="-mx-4 mt-8 p-8 sm:-mx-0 bg-white rounded-md shadow-md">
             <RequestItemTableSection />
            </div>
    </div>
  )
}
