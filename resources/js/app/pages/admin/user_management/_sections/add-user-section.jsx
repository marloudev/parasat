import Button from '@/app/pages/_components/button';
import InputField from '@/app/pages/_components/inputfield';
import Modal from '@/app/pages/_components/modal';
import Select from '@/app/pages/_components/select';
import React, { useState } from 'react'

export default function AddUserSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const roleOptions = [
        { value: '1', label: 'Admin' },
        { value: '2', label: 'Tech Team' },
        { value: '3', label: 'CSR' },
    ];

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
                <div className='m-4'>
                    <InputField
                        type="text"
                        label='Name'
                        placeholder="Name"
                    />
                </div>

                <div className='m-4'>
                    <InputField
                        type="text"
                        label='Email'
                        placeholder="Email"
                    />
                </div>

                <div className='m-4'>
                    <InputField
                        type="password"
                        label='Password'
                        placeholder="Password"
                    />
                </div>

                <div className='m-4'>
                    <InputField
                        type="password"
                        label='Confirm Password'
                        placeholder="Confirm Password"
                    />
                </div>

                <div className='m-4 mt-8'>
                    <Select
                        name="role"
                        label="Role"
                        options={roleOptions}
                    />
                </div>

                <div className='flex justify-end'>
                    <Button 
                    variant='info'>
                        Save
                    </Button>
                </div>
            </Modal>
        </div>
    )
}
