import Modal from '@/app/pages/_components/modal'
import store from '@/app/pages/store/store';
import { create_internet_plan_thunk, get_internet_plan_thunk, update_internet_plan_thunk } from '@/app/redux/internet-plan-thunk';
import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline'
import { message } from 'antd';
import React, { useEffect, useState } from 'react'

export default function UpdatePlanSection({data}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  useEffect(()=>{
    setForm(data)
  },[])

  const submitPlan = async (e) => {
    e.preventDefault()
    setLoading(true);
    try {
      await store.dispatch(
        update_internet_plan_thunk(form)
      );
      store.dispatch(get_internet_plan_thunk())
      // message.success("Successfully Added!"); 
      setIsModalOpen(false);
    } catch (error) {
      message.error("Failed to add department. Please try again."); // Show error message
    } finally {
      setLoading(false); // Always reset loading state
    }
  };

  return (
    <div className='flex justify-end mt-4'>
      <button className=" text-blue-500 font-bold " onClick={openModal}><PencilIcon className="h-5 w-5 inline-block" /></button>

      <Modal open={isModalOpen} setOpen={setIsModalOpen} width='w-1/4'>
        <h2 className="text-xl font-semibold mb-4">Create Internet Plan</h2>
        <form action="" onSubmit={submitPlan}>
          <div className="mb-4">
            <label htmlFor="planName" className="block text-sm font-medium text-gray-700">Plan Name</label>
            <input
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              value={form?.name}
              type="text"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="planSpeed" className="block text-sm font-medium text-gray-700">Plan Speed</label>
            <input
              onChange={(e) =>
                setForm({
                  ...form,
                  speed: e.target.value,
                })
              }
              value={form?.speed}
              type="text"
              name="speed"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="planPrice" className="block text-sm font-medium text-gray-700">Plan Price</label>
            <input
              onChange={(e) =>
                setForm({
                  ...form,
                  price: e.target.value,
                })
              }
              value={form?.price}
              type="text"
              name="price"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div className="flex mb-4">
            <input
              onChange={(e) =>
                setForm({
                  ...form,
                  [e.target.name]: JSON.stringify(
                    e.target.checked
                  ),
                })
              }
              checked={form?.popular == "true"}
              type="checkbox"
              name="popular"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2 " />
            <label htmlFor="isPopular" className="block text-sm font-medium text-gray-700">&nbsp;Popular Plan</label>
          </div>
          <div>
            <button type='submit' className='bg-blue-500 p-2 w-full rounded-md text-white hover:bg-blue-600'>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
