import InputField from '@/app/pages/_components/inputfield';
import Modal from '@/app/pages/_components/modal';
import React, { useState } from 'react'

export default function ItemDetailSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);

    const people = [
        { name: 'Add Item', email: 'N/A', role: '01/012/2024' },
        { name: 'Restock', email: '100', role: '04/11/2025' },
        { name: 'Used', email: '10', role: '11/11/2026' },
        { name: 'Released', email: '50', role: '11/11/2026' },
        // More people...
    ]

    const serial_number = 1;

    const snList = ['SN1', 'SN2', 'SN3', 'SN4', 'SN5'];
    return (
        <div>
            <a href='#' onClick={openModal} className='text-indigo-600 hover:text-indigo-900'>View Details</a>
            <Modal open={isModalOpen} setOpen={setIsModalOpen}>
                <h2 className='text-lg text-black'>Full Item Details and History</h2>
                <div className='max-h-[700px] overflow-y-auto'>
                    <form>
                        <div className='mb-4'>
                            <InputField
                                label='Item Name'
                                placeholder='Enter Item Name'
                                name='itemName'
                                required />
                        </div>
                        <div className='mb-4'>
                            <InputField
                                label='Classification'
                                placeholder='Classification'
                                name='classification'
                                required />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="Stock" className='text-sm font-semibold text-gray-700 mb-2'>Stock : 100</label>
                        </div>

                        {serial_number === 1 && (
                            <div>
                                <h2 className='text-lg text-black -mb-8 mt-10'>Serial Numbers</h2>
                                <div className='mt-8'>
                                    <table className='min-w-full divide-y divide-gray-200'>
                                        <thead className='bg-gray-50'>
                                            <tr>
                                                <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                                    SN
                                                </th>
                                                <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                                    DR Date
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='bg-white divide-y divide-gray-200'>
                                            {snList.map((sn, index) => (
                                                <tr key={index}>
                                                    <td className='px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-700'>
                                                        {sn}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {serial_number === 0 && (
                            <div>
                                <h2 className='text-lg text-black -mb-8 mt-10'>Serial Numbers : N/A</h2>
                            </div>
                        )}

                        <h2 className='text-lg text-black -mb-8 mt-10'>Item History</h2>

                        <div className="-mx-4 mt-8 p-8 sm:-mx-0 bg-blue-100 rounded-md shadow-md">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            Legend
                                        </th>
                                        <th
                                            scope="col"
                                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                        >
                                            Quantity
                                        </th>
                                        <th
                                            scope="col"
                                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                        >
                                            Requested By
                                        </th>
                                        <th
                                            scope="col"
                                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                                        >
                                            Date
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-blue-100">
                                    {people.map((person) => (
                                        <tr key={person.email}>
                                            <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                                                {person.name}
                                                <dl className="font-normal lg:hidden">
                                                    <dt className="sr-only">Title</dt>
                                                    <dd className="mt-1 truncate text-gray-700">{person.email}</dd>
                                                </dl>
                                            </td>
                                            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{person.email}</td>
                                            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"></td>
                                            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"></td>
                                            <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.role}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className='flex justify-end gap-4'>
                            <button type='submit' className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>Save</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}
