import Button from "@/app/pages/_components/button";
import Input from "@/app/pages/_components/input";
import Modal from "@/app/pages/_components/modal";
import Select from "@/app/pages/_components/select";
import { search_item_service } from "@/app/pages/services/serial-number-item-service";
import store from "@/app/pages/store/store";
import {
    create_request_item_thunk,
    get_request_item_thunk,
} from "@/app/redux/request-item-thunk";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ReviewRequestSection({ data }) {
    const [open, setOpen] = useState(false);
    // const { items } = useSelector((store) => store.items);
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);
    console.log("data", data);

    async function submit_handler(e) {
        e.preventDefault();
        setLoading(true);
        try {
            await store.dispatch(create_request_item_thunk(form));
            await store.dispatch(get_request_item_thunk());
            setLoading(false);
            setForm({});
            setOpen(false);
        } catch (error) {
            setLoading(false);
        }
    }

    async function search_item(e) {
        e.preventDefault();
        try {
            const result = await search_item_service({
                ...data,
                search: search,
            });
            if (result?.data?.id) {
                const newData = Array.isArray(result.data)
                    ? result.data
                    : [result.data];

                setItems((prevItems) => {
                    const existingSerials = new Set(
                        prevItems.map((item) => item.serial_number)
                    );
                    const newItems = newData.filter(
                        (item) => !existingSerials.has(item.serial_number)
                    );
                    return [...prevItems, ...newItems];
                });
            }
        } catch (error) {
            console.error("Error searching item:", error);
        }
    }

    async function submit_items() {
        alert()
    }
    return (
        <div>
            
            <button
                disabled={data.status == "cancelled"}
                onClick={() => setOpen(!open)}
                className={`capitalize w-36 ${
                    data.status == "cancelled"
                        ? "bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600"
                        : "bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600"
                }  text-white font-bold py-2 px-4 rounded ml-2`}
            >
               {data.status == "cancelled"?data.status:"Review"} 
            </button>
            <Modal width="w-full" open={open} setOpen={setOpen}>
                <div
                    // onSubmit={submit_handler}
                    className="flex flex-col gap-3"
                >
                    <table className="min-w-full divide-y divide-gray-300">
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                                    Requested By
                                </td>
                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                                    {data.user.name}
                                </td>
                            </tr>

                            <tr>
                                <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                                    Item Name
                                </td>
                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                                    {data.item.name}
                                </td>
                            </tr>
                            <tr>
                                <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                                    Quantity
                                </td>
                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                                    {data.amount}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <form onSubmit={search_item}>
                        <Input
                            onChange={(e) => setSearch(e.target.value)}
                            value={search ?? ""}
                            name="search"
                            label="Search Serial #"
                            type="text"
                        />
                    </form>
                    <div className="flex items-center justify-end">
                        <div className="text-black font-black">
                            Count: {items.length}
                        </div>
                    </div>
                    <table className="min-w-full divide-y divide-gray-300">
                        <tbody className="divide-y divide-gray-200">
                            {items.map((res, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                                            Serial Number: {res.serial_number}
                                        </td>
                                        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-900">
                                            Quantity: 1
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <Button
                        onClick={submit_items}
                        variant={
                            data.amount != items.length ? "default" : "info"
                        }
                        disabled={data.amount != items.length || loading}
                        type="button"
                    >
                        {loading ? "Loading..." : "SUBMIT"}
                    </Button>
                </div>
            </Modal>
        </div>
    );
}
