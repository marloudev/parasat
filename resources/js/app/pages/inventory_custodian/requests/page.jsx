import React, { useEffect } from 'react'
import AdminLayout from '../layout'
import RequestsTableSection from './_sections/requests-table-section'
import store from '../../store/store'
import { get_request_item_thunk } from '@/app/redux/request-item-thunk'
import InventoryCustodianLayout from '../layout'

export default function RequestsPage() {

  useEffect(() => {
    store.dispatch(get_request_item_thunk())
  }, [])
  return (
    <InventoryCustodianLayout>
      <div>
        <h1>Requests</h1>
      </div>
      <RequestsTableSection />
    </InventoryCustodianLayout>
  )
}
