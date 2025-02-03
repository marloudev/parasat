import Modal from '@/app/pages/_components/modal';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'

const people = [
  { name: 'Skyworth ONT', title: 'ONT', email: '200', role: 'Headend' },
  // More people...
]

export default function RequestsTableSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const initialOptions = [
    '29138219',
    '20u542343',
    'sdv31423',
    'ndsvks93043'
  ];

  const [options, setOptions] = useState(initialOptions);
  const [selectedValue, setSelectedValue] = useState('');
  const [inputList, setInputList] = useState([]);

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleAddToList = () => {
    if (selectedValue) {
      setInputList([...inputList, selectedValue]);
      setOptions(options.filter((option) => option !== selectedValue));
      setSelectedValue('');
    }
  };

  const handleDeleteFromList = (value) => {
    setInputList(inputList.filter((item) => item !== value));
    setOptions([...options, value]);
  };


  return (
    <div className="-mx-4 mt-8 p-8 sm:-mx-0 bg-white rounded-md shadow-md">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Requested By
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Item Name
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Quantity
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Status
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Action
            </th>

          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {people.map((person) => (
            <tr key={person.email}>
              <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                {person.name}
                <dl className="font-normal lg:hidden">
                  <dt className="sr-only">Title</dt>
                  <dd className="mt-1 truncate text-gray-700">{person.title}</dd>
                  <dt className="sr-only sm:hidden">Email</dt>
                  <dd className="mt-1 truncate text-gray-500 sm:hidden">{person.email}</dd>
                </dl>
              </td>
              <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{person.title}</td>
              <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.email}</td>
              <td className="py-4 text-sm font-medium sm:pr-0 ">
                Pending
              </td>
              <td className="flex py-4 text-sm font-medium sm:pr-0 ">
                <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Approve</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal open={isModalOpen} setOpen={setIsModalOpen} width=' w-1/4'>
        <h2 className="text-xl font-semibold mb-4">Review Request</h2>
        <div className=''>
          <div className='flex flex-col mb-4'>
            <label htmlFor='team_name'>Requested By </label>
            <input type='text' id='team_name' value='Alex/Jully' readOnly />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='item_name'>Item Name </label>
            <input type='text' id='item_name' value='ONT' readOnly />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='item_quantity'>Quantity </label>
            <input type='number' id='item_quantity' value='200' readOnly />
          </div>

          <div className='mt-6'>
            <div>
              <select value={selectedValue} onChange={handleSelectChange}>
                <option value="" disabled>Select an option</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button onClick={handleAddToList} disabled={!selectedValue} className=' bg-blue-600 text-white p-2 rounded-md m-2'>
                <PlusIcon className='h-5 text-white' />
              </button>
            </div>

            <div>
              {/* <h3>Input List</h3> */}
              <ul className='flex flex-wrap border border-black rounded-md p-4 m-2 w-[600px] gap-1'>
                {inputList.map((item, index) => (
                  <li key={index} className='border rounded-2xl w-fit flex items-center'>
                    <input
                      type='text'
                      value={item}
                      readOnly
                      className='border-none w-fit min-w-[100px] p-1 text-center'
                      style={{ width: `${item.length + 1}ch` }} // Dynamically adjust the width based on the length of the text
                    />
                    <button
                      onClick={() => handleDeleteFromList(item)}
                      className='bg-red-600 text-white p-2 rounded-full w-9 m-2'
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          <div className='flex w-full items-center justify-end'>
            <button type='submit' name='save' className=' bg-green-600 text-white p-2 rounded-md w-20'>Save</button>
          </div>

        </div>
      </Modal>
    </div>
  )
}
