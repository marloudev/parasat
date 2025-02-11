import Button from "@/app/pages/_components/button";
import Input from "@/app/pages/_components/input";
import Modal from "@/app/pages/_components/modal";
import Select from "@/app/pages/_components/select";
import { search_item_service } from "@/app/pages/services/serial-number-item-service";
import store from "@/app/pages/store/store";
import {
    create_request_item_thunk,
    get_request_item_thunk,
    update_request_item_thunk,
} from "@/app/redux/request-item-thunk";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RequestItemSection({ data }) {
    const [open, setOpen] = useState(false);
    // const { items } = useSelector((store) => store.items);
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState("");
    const [items, setItems] = useState([]);
    console.log("data", data);

    useEffect(() => {
        setAmount(data.amount)
    }, [])

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

    async function submit_items() {
        setLoading(true);
        try {
            await store.dispatch(
                update_request_item_thunk({
                    ...data,
                    items,
                    amount: amount,
                    status: "released",
                    type: "no_serial",
                })
            );
            await store.dispatch(get_request_item_thunk());
            setLoading(false);
            setOpen(false);
            setItems([]);
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <div>
            <button
                disabled={data.status == "cancelled"}
                onClick={() => setOpen(!open)}
                className={`capitalize w-36 ${data.status == "cancelled"
                    ? "bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600"
                    : "bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600"
                    }  text-white font-bold py-2 px-4 rounded ml-2`}
            >
                {data.status == "cancelled" ? data.status : "Review"}
            </button>
            <Modal width="w-1/4" open={open} setOpen={setOpen}>
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
                    {/* 
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
                    </table> */}
                    {data.status != "released" && (
                        <>

                            <Input
                                onChange={(e) => setAmount(e.target.value)}
                                value={amount ?? ""}
                                name="amount"
                                label="Amount"
                                type="text"
                            />

                            <div className="flex gap-4 justify-end">
                                <Button
                                    onClick=""
                                    variant="error"
                                    disabled={loading}
                                    type="button"
                                >
                                    {loading ? "Loading..." : "Disapprove"}
                                </Button>
                                <Button
                                    onClick={submit_items}
                                    variant="info"
                                    disabled={loading}
                                    type="button"
                                >
                                    {loading ? "Loading..." : "Approve"}
                                </Button>
                            </div>

                        </>
                    )}
                </div>
            </Modal>
        </div>
    );
}
