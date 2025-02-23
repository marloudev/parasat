import React from 'react'
import AdminLayout from '../layout'
import { CheckBadgeIcon, ListBulletIcon, UserGroupIcon, UsersIcon, XCircleIcon } from '@heroicons/react/24/outline'

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className=''>
        <div className='flex gap-4 justify-between m-4'>
          <div className="divide-y w-full divide-gray-200 overflow-hidden rounded-lg bg-green-400 shadow-lg">
            <div className="px-4 py-5 sm:p-6 h-80 text-center ">
              <div className=' text-[11rem] text-white'>
                0
              </div>

            </div>
            <div className="px-4 py-4 sm:px-6 text-center bg-white">
              <div className=' flex text-4xl '>
                <CheckBadgeIcon className='h-10 text-green-500' /> Approved Applications
              </div>
            </div>
          </div>

          <div className="divide-y w-full divide-gray-200 overflow-hidden rounded-lg bg-red-400 shadow-lg">
            <div className="px-4 py-5 sm:p-6 h-80 text-center ">
              <div className=' text-[11rem] text-white'>
                0
              </div>

            </div>
            <div className="px-4 py-4 sm:px-6 text-center bg-white">
              <div className='flex text-4xl'>
                <XCircleIcon className='h-10 text-red-500' /> Declined Applications
              </div>
            </div>
          </div>
        </div>

        <div className='flex gap-4 justify-between m-4'>
          <div className="divide-y w-full divide-gray-200 overflow-hidden rounded-lg bg-blue-400 shadow-lg">
            <div className="px-4 py-5 sm:p-6 h-80 text-center ">
              <div className=' text-[11rem] text-white'>
                0
              </div>

            </div>
            <div className="px-4 py-4 sm:px-6 text-center bg-white">
              <div className=' flex text-4xl '>
                <UserGroupIcon className='h-10 text-blue-500' /> Total Number of Applications
              </div>
            </div>
          </div>

          <div className="divide-y w-full divide-gray-200 overflow-hidden rounded-lg bg-yellow-400 shadow-lg">
            <div className="px-4 py-5 sm:p-6 h-80 text-center ">
              <div className=' text-[11rem] text-white'>
                0
              </div>

            </div>
            <div className="px-4 py-4 sm:px-6 text-center bg-white">
              <div className='flex text-4xl'>
                <ListBulletIcon className='h-10 text-yellow-500' /> Total Registered Items
              </div>
            </div>
          </div>
        </div>
      </div>

    </AdminLayout>
  )
}
