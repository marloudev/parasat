import InputField from '@/app/pages/_components/inputfield';
import Modal from '@/app/pages/_components/modal';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

export default function RestockSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [serialNumbers, setSerialNumbers] = useState(['']);

    const serial_number = 0;

    const handleAddSerialNumber = () => {
        setSerialNumbers([...serialNumbers, '']);
    };

    const handleSerialNumberChange = (index, value) => {
        const newSerialNumbers = [...serialNumbers];
        newSerialNumbers[index] = value;
        setSerialNumbers(newSerialNumbers);
    };

    const handleRemoveSerialNumber = (index) => {
        const newSerialNumbers = serialNumbers.filter((_, i) => i !== index);
        setSerialNumbers(newSerialNumbers);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };


    return (
        <div>
            <a href="#" onClick={openModal} className='text-indigo-600 hover:text-indigo-900'>Restock</a>

            {serial_number === 1 && (
                <Modal open={isModalOpen} setOpen={setIsModalOpen} width='w-1/4'>
                    <h2 className='text-lg text-black'>Restock Item</h2>
                    <div className='max-h-[700px] overflow-y-auto'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <InputField
                                label='Quantity'
                                placeholder='Enter Quantity'
                                name='quantity'
                                type='number'
                                required
                            />
                        </div>

                        {serialNumbers.map((serialNumber, index) => (
                            <div className='flex mb-4' key={index}>
                                <InputField
                                    label={`Serial Number ${index + 1}`}
                                    placeholder='Enter SN'
                                    name={`serial_number_${index}`}
                                    type='text'
                                    value={serialNumber}
                                    onChange={(e) => handleSerialNumberChange(index, e.target.value)}
                                    required
                                />
                                <button
                                    type='button'
                                    onClick={() => handleRemoveSerialNumber(index)}
                                    className='ml-2 px-2 mt-7 h-10 bg-red-500 text-white rounded hover:bg-red-600'
                                >
                                    <XMarkIcon className='h-4 w-4' />
                                </button>
                            </div>
                        ))}
                        <div className='mb-4'>
                            <button type='button' onClick={handleAddSerialNumber} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
                                <PlusIcon className='h-4 w-4' />
                            </button>
                        </div>
                        <div className='flex justify-end gap-4'>
                            <button type='submit' className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>Restock</button>
                        </div>
                    </form>
                    </div>
                </Modal>
            )}

            {serial_number === 0 && (
                <Modal open={isModalOpen} setOpen={setIsModalOpen} width='w-1/4'>
                    <h2 className='text-lg text-black'>Restock Item</h2>
                    <div>
                        <form>
                            <div className='mb-4'>
                                <InputField
                                    label='Quantity'
                                    placeholder='Enter Quantity'
                                    name='quantity'
                                    type='number'
                                    required
                                />
                            </div>
                            <div className='flex justify-end gap-4'>
                                <button type='submit' className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>Restock</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
        </div>
    );
}