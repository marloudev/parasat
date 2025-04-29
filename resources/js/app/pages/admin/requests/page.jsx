import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import RequestsTableSection from './_sections/requests-table-section'
import store from '../../store/store'
import { get_request_item_thunk } from '@/app/redux/request-item-thunk'
import RequestPaginateSection from './_sections/request-paginate-section'

export default function RequestsPage() {

  useEffect(()=>{
    store.dispatch(get_request_item_thunk())
  },[])
  return (
    <AdminLayout>
        <div>
            <h1>Requests</h1>
        </div>
        <div className='flex flex-col gap-5'>
        <RequestsTableSection/>
        <div className='bg-white p-3'>
        <RequestPaginateSection />
        </div>
        </div>
    </AdminLayout>
  )
}
