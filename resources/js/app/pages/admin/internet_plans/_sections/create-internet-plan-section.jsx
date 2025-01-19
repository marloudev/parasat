import Modal from '@/app/pages/_components/modal'
import { PlusIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

export default function CreateInternetPlanSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  return (
    <div className='flex justify-end mt-4'>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}><PlusIcon className="h-5 w-5 inline-block" /> Create Internet Plan</button>

      <Modal open={isModalOpen} setOpen={setIsModalOpen} width='w-1/4'>
        <h2 className="text-xl font-semibold mb-4">Create Internet Plan</h2>

        <div className="mb-4">
          <label htmlFor="planName" className="block text-sm font-medium text-gray-700">Plan Name</label>
          <input type="text" name="planName" id="planName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="planSpeed" className="block text-sm font-medium text-gray-700">Plan Speed</label>
          <input type="text" name="planSpeed" id="planSpeed" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="planPrice" className="block text-sm font-medium text-gray-700">Plan Price</label>
          <input type="text" name="planPrice" id="planPrice" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div className="flex mb-4">
          <input type="checkbox" name="isPopular" id="isPopular" className="mr-2" />
          <label htmlFor="isPopular" className="block text-sm font-medium text-gray-700">Popular Plan</label>
        </div>
      </Modal>
    </div>
  )
}
