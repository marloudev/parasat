import Button from '@/app/pages/_components/button';
import InputField from '@/app/pages/_components/inputfield';
import Modal from '@/app/pages/_components/modal';
import store from '@/app/pages/store/store';
import { create_item_thunk } from '@/app/redux/item-thunk';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'

export default function AddItemSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [form,setForm]=useState({})
    const handleSubmit = (event) => {
        event.preventDefault();
        store.dispatch(create_item_thunk())
    };
    return (
        <div>
            <Button
                variant="info"
                onClick={openModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Add Item
            </Button>
            <Modal open={isModalOpen} setOpen={setIsModalOpen} width=' w-1/4'>
                <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <InputField
                            label="Item Name"
                            placeholder="Enter Item Name"
                            name="name"
                            required
                            value={form.name??''}
                            onChange={(e)=>setForm({
                                ...form,
                                [e.target.name]:e.target.value
                            })}
                        />
                    </div>

                    <div className="mb-4">
                        <InputField
                            label="Classification"
                            placeholder="Classification"
                            name="classification"
                            required
                            value={form.classification??''}
                            onChange={(e)=>setForm({
                                ...form,
                                [e.target.name]:e.target.value
                            })}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type='checkbox'
                            id='isSerial'
                            name='isSerial'
                            value={form.isSerial??''}
                            onChange={(e)=>setForm({
                                ...form,
                                [e.target.name]:e.target.checked
                            })}
                            className='appearance-none w-5 h-5 bg-white border-2 border-gray-400 rounded-none checked:bg-black checked:border-black'
                        />
                        <label htmlFor='isSerial' className='ml-2'>With Serial Number</label>
                    </div>

                    <div className="flex justify-end gap-4-4">
                        <Button
                            type="submit"
                            variant="info"
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                            Add
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}
