import InputField from "@/app/pages/_components/inputfield";
import Modal from "@/app/pages/_components/modal";
import store from "@/app/pages/store/store";
import { get_item_thunk } from "@/app/redux/item-thunk";
import { create_serial_number_item_thunk } from "@/app/redux/serial-number-item-thunk";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function RestockSection({ data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [serialNumbers, setSerialNumbers] = useState([""]);
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState(0);
    // const serial_number = 1;

    console.log('datadatadata',data)

    const handleAddSerialNumber = () => {
        setSerialNumbers([...serialNumbers, ""]);
    };

    const handleSerialNumberChange = (index, value) => {
        const newSerialNumbers = [...serialNumbers];
        newSerialNumbers[index] = value;
        setSerialNumbers(newSerialNumbers);
    };
    console.log("serialNumbers", serialNumbers);

    const handleRemoveSerialNumber = (index) => {
        const newSerialNumbers = serialNumbers.filter((_, i) => i !== index);
        setSerialNumbers(newSerialNumbers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await store.dispatch(
                create_serial_number_item_thunk({
                    ...data,
                    serials: serialNumbers,
                    status: "available",
                    isSerial: true,
                })
            );
            await store.dispatch(get_item_thunk())
            setLoading(false);
            setIsModalOpen(false);
            setSerialNumbers([""]);
        } catch (error) {
            setLoading(false);
        }
    };

    async function handleSubmit2(e) {
        e.preventDefault();
        setLoading(true);
        try {
            await store.dispatch(
                create_serial_number_item_thunk({
                    ...data,
                    isSerial: false,
                    amount: amount,
                })
            );
           await store.dispatch(get_item_thunk())
            setLoading(false);
            setIsModalOpen(false);
            setAmount(0);
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <div>
            <a
                href="#"
                onClick={openModal}
                className="text-indigo-600 hover:text-indigo-900"
            >
                Restock
            </a>

            {data.isSerial == "true" && (
                <Modal
                    open={isModalOpen}
                    setOpen={setIsModalOpen}
                    width="w-1/4"
                >
                    <h2 className="text-lg text-black">Restock Item</h2>
                    <div className="max-h-[700px] overflow-y-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4"></div>

                            {serialNumbers.map((serialNumber, index) => (
                                <div className="flex mb-4" key={index}>
                                    <InputField
                                        label={`Serial Number ${index + 1}`}
                                        placeholder="Enter SN"
                                        name={`serial_number_${index}`}
                                        type="text"
                                        value={serialNumber}
                                        onChange={(e) =>
                                            handleSerialNumberChange(
                                                index,
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleRemoveSerialNumber(index)
                                        }
                                        className="ml-2 px-2 mt-7 h-10 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        <XMarkIcon className="h-4 w-4" />
                                    </button>
                                </div>
                            ))}
                            <div className="mb-4">
                                <button
                                    type="button"
                                    onClick={handleAddSerialNumber}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    <PlusIcon className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                    {loading ? "Loading..." : "Restock"}
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}

            {data.isSerial === "false" && (
                <Modal
                    open={isModalOpen}
                    setOpen={setIsModalOpen}
                    width="w-1/4"
                >
                    <h2 className="text-lg text-black">Restock Item</h2>
                    <div>
                        <form onSubmit={handleSubmit2}>
                            <div className="mb-4">
                                <InputField
                                    onChange={(e) => setAmount(e.target.value)}
                                    label="Quantity"
                                    placeholder="Enter Quantity"
                                    name="amount"
                                    type="number"
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                    {loading ? "Loading..." : "Restock"}
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
        </div>
    );
}
