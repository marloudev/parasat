import Modal from '@/app/pages/_components/modal'
import Select from '@/app/pages/_components/select';
import store from '@/app/pages/store/store';
import { create_internet_plan_thunk, get_internet_plan_thunk, update_internet_plan_thunk } from '@/app/redux/internet-plan-thunk';
import { PencilIcon, PencilSquareIcon, PlusIcon } from '@heroicons/react/24/outline'
import { message, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react'

export default function EditUserSection({ data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({});

    const roleOptions = [
        { value: '1', label: 'Admin' },
        { value: '2', label: 'Tech Team' },
        { value: '3', label: 'CSR' },
        { value: '4', label: 'Inventory Custodian' },
    ];

    useEffect(() => {
        setForm(data)
    }, [])

    const updateUser = async (e) => {
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
        <>
            <Tooltip title="Update User">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                    onClick={openModal}
                >
                    <PencilSquareIcon className="h-5 " />
                </button>
            </Tooltip>
            <Modal open={isModalOpen} setOpen={setIsModalOpen}>
                <h2 className="text-xl font-semibold mb-4">Update User</h2>
                <form action="" onSubmit={updateUser}>
                    <div className="mb-4">
                        <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Name</label>
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
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    email: e.target.value,
                                })
                            }
                            value={form?.email}
                            type="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    password: e.target.value,
                                })
                            }
                            value={form?.password}
                            type="text"
                            name="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <div className='mb-4 mt-8'>
                        <Select
                            name="user_type"
                            label="Role"
                            onChange={(e) => setForm({
                                ...form,
                                [e.target.name]: e.target.value
                            })}
                            options={roleOptions}
                        />
                    </div>
                    <div>
                        <button type='submit' className='bg-blue-500 p-2 w-full rounded-md text-white hover:bg-blue-600'>
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    )
}
