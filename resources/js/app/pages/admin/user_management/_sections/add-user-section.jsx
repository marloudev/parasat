import Button from '@/app/pages/_components/button';
import InputField from '@/app/pages/_components/inputfield';
import Modal from '@/app/pages/_components/modal';
import Select from '@/app/pages/_components/select';
import store from '@/app/pages/store/store';
import { create_user_thunk, get_users_thunk } from '@/app/redux/app-thunk';
import React, { useState } from 'react'

export default function AddUserSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [form, setForm] = useState({})
    const [loading, setLoading] = useState(false)
    const roleOptions = [
        { value: '1', label: 'Admin' },
        { value: '2', label: 'Tech Team' },
        { value: '3', label: 'CSR' },
    ];
    async function submit_form(e) {
        e.preventDefault()
        setLoading(true)
        try {
            await store.dispatch(create_user_thunk(form))
            await store.dispatch(get_users_thunk())
            setLoading(false)
            closeModal()
            setForm({})
        } catch (error) {
            setLoading(false)
        }
    }
    return (
        <div>
            <button
                onClick={openModal}
                type="button"
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Add user
            </button>

            <Modal open={isModalOpen} setOpen={closeModal}>
                <form onSubmit={submit_form}>
                    <div className='m-4'>
                        <InputField
                            type="text"
                            label='Name'
                            name="name"
                            placeholder="Name"
                            onChange={(e) => setForm({
                                ...form,
                                [e.target.name]: e.target.value
                            })}
                        />
                    </div>

                    <div className='m-4'>
                        <InputField
                            type="text"
                            name="email"
                            label='Email'
                            placeholder="Email"
                            onChange={(e) => setForm({
                                ...form,
                                [e.target.name]: e.target.value
                            })}
                        />
                    </div>

                    <div className='m-4'>
                        <InputField
                            type="password"
                            label='Password'
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setForm({
                                ...form,
                                [e.target.name]: e.target.value
                            })}
                        />
                    </div>


                    <div className='m-4 mt-8'>
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

                    <div className='flex justify-end'>
                        <Button
                            type='submit'
                            disabled={loading}
                            variant='info'>
                            {loading ? "Loading..." : "Save"}
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}
