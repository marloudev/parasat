import React from 'react'
import AdminLayout from '../layout'
import RequestsTableSection from './_sections/requests-table-section'

export default function RequestsPage() {
  return (
    <AdminLayout>
        <div>
            <h1>Requests</h1>
        </div>
        <RequestsTableSection/>
    </AdminLayout>
  )
}
