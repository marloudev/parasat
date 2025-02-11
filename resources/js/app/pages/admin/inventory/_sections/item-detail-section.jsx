import InputField from "@/app/pages/_components/inputfield";
import Modal from "@/app/pages/_components/modal";
import store from "@/app/pages/store/store";
import { get_item_thunk, update_item_thunk } from "@/app/redux/item-thunk";
import moment from "moment";
import React, { useEffect, useState } from "react";

export default function ItemDetailSection({ data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const serial_number = 1;
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setForm(data);
    }, []);
    async function edit_handler(e) {
        e.preventDefault();
        setLoading(true);

        try {
            await store.dispatch(update_item_thunk(form));
            await store.dispatch(get_item_thunk());
            setLoading(false);
            setIsModalOpen(false);
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
                View Details
            </a>
            <Modal open={isModalOpen} setOpen={setIsModalOpen}>
                <h2 className="text-lg text-black">
                    Full Item Details and History
                </h2>
                <div className="max-h-[700px] overflow-y-auto">
                    <form onSubmit={edit_handler}>
                        <div className="mb-4">
                            <InputField
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                value={form.name}
                                label="Item Name"
                                placeholder="Enter Item Name"
                                name="name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <InputField
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                value={form.classification}
                                label="Classification"
                                placeholder="Classification"
                                name="classification"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="Stock"
                                className="text-sm font-semibold text-gray-700 mb-2"
                            >
                                Stock : {data?.total}
                            </label>
                        </div>

                        {serial_number === 1 && (
                            <div>
                                <h2 className="text-lg text-black -mb-8 mt-10">
                                    {data.isSerial == "true" &&
                                        "Serial Numbers"}
                                    {data.isSerial != "true" &&
                                        "Delivery History"}
                                </h2>
                                {data.isSerial == "true" && (
                                    <div className="mt-8">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        SN
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Status
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        DR Date
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {data?.serial_numbers?.map(
                                                    (sn, index) => (
                                                        <tr key={index}>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-700">
                                                                {
                                                                    sn.serial_number
                                                                }
                                                            </td>
                                                            <td className="capitalize px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-700">
                                                                <div
                                                                    className={` rounded-xl text-center text-white p-1 ${
                                                                        sn.status ==
                                                                        "available"
                                                                            ? "bg-blue-700"
                                                                            : "bg-red-700"
                                                                    } `}
                                                                >
                                                                    {sn.status}
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-700">
                                                                {moment(
                                                                    sn.created_at
                                                                ).format("LLL")}
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                                 {data.isSerial != "true" &&
                                        <div className="mt-8">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        SN
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Delivery Date
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {data?.stock_items?.map(
                                                    (sn, index) => (
                                                        <tr key={index}>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-700">
                                                                {
                                                                    sn.amount
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-700">
                                                                {moment(
                                                                    sn.created_at
                                                                ).format("LLL")}
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>}
                            </div>
                        )}

                        {serial_number === 0 && (
                            <div>
                                <h2 className="text-lg text-black -mb-8 mt-10">
                                    Serial Numbers : N/A
                                </h2>
                            </div>
                        )}

                        {/* <h2 className="text-lg text-black -mb-8 mt-10">
                            Item History
                        </h2>

                        <div className="-mx-4 mt-8 p-8 sm:-mx-0 bg-blue-100 rounded-md shadow-md">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                        >
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
                                                    <dt className="sr-only">
                                                        Title
                                                    </dt>
                                                    <dd className="mt-1 truncate text-gray-700">
                                                        {person.email}
                                                    </dd>
                                                </dl>
                                            </td>
                                            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                                                {person.email}
                                            </td>
                                            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"></td>
                                            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"></td>
                                            <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                                                {person.role}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div> */}

                        <div className="flex justify-end gap-4">
                            <button
                                disabled={loading}
                                type="submit"
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                {loading ? "Loading..." : "Save"}
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
