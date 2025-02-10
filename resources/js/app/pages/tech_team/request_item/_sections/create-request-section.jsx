import Button from "@/app/pages/_components/button";
import Input from "@/app/pages/_components/input";
import Modal from "@/app/pages/_components/modal";
import Select from "@/app/pages/_components/select";
import store from "@/app/pages/store/store";
import { create_request_item_thunk, get_request_item_thunk } from "@/app/redux/request-item-thunk";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function CreateRequestSection() {
    const [open, setOpen] = useState(false);
    const { items } = useSelector((store) => store.items);
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);
    console.log("form", form);

    async function submit_handler(e) {
        e.preventDefault();
        setLoading(true);
        try {
            await store.dispatch(create_request_item_thunk(form));
            await store.dispatch(get_request_item_thunk())
            setLoading(false);
            setForm({})
            setOpen(false)
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <div>
            <button
                onClick={() => setOpen(!open)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Request
            </button>
            <Modal open={open} setOpen={setOpen}>
                <form onSubmit={submit_handler} className="flex flex-col gap-3">
                    <Select
                        options={items.map((res) => ({
                            value: JSON.stringify(res),
                            label: res.name,
                        }))}
                        value={null}
                        onChange={(e) => setForm(JSON.parse(e.target.value))}
                        label="Select Item"
                        name="name"
                    />
                    <Input
                        onChange={(e) =>
                            setForm({
                                ...form,
                                [e.target.name]: e.target.value,
                            })
                        }
                        value={form?.amount ?? ""}
                        required="true"
                        name="amount"
                        label="Amount"
                        type="number"
                    />
                    <Button
                    disabled={loading}
                    type="submit" variant="info">
                     {
                        loading?"Loading...":"SUBMIT"
                     }   
                    </Button>
                </form>
            </Modal>
        </div>
    );
}
