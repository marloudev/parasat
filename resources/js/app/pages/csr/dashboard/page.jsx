import React from 'react'
import AdminLayout from '../layout'
import DashboardSection from './sections/dashboard-section'
import CSRLayout from '../layout'


export default function AdminDashboardPage() {
  return (
    <CSRLayout>
      <DashboardSection />
    </CSRLayout>
  )
}
