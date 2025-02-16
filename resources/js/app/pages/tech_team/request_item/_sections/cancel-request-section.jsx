import Modal from "@/app/pages/_components/modal";
import store from "@/app/pages/store/store";
import {
    get_request_item_thunk,
    update_change_status_thunk,
} from "@/app/redux/request-item-thunk";
import { DialogTitle } from "@headlessui/react";
import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function CancelRequestSection({ data }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    async function cancel_handler(params) {
        setLoading(true);
        try {
            await store.dispatch(
                update_change_status_thunk({
                    id: data.id,
                    status: "cancelled",
                })
            );
            await store.dispatch(get_request_item_thunk());
            setLoading(false);
            setOpen(false);
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <div>
            <button
                disabled={data.status == "cancelled" || data.status == "declined"}
                onClick={() => setOpen(!open)}
                className={` ${
                    data.status == "cancelled" || data.status == "declined"
                        ? "bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600"
                        : "bg-red-600 hover:bg-red-500 focus-visible:outline-red-600"
                }  text-white font-bold py-2 px-4 rounded ml-2`}
            >
                Cancel Request
            </button>
            <Modal open={open} width="w-20" setOpen={setOpen}>
                <div>
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
                        <TrashIcon
                            aria-hidden="true"
                            className="size-6 text-red-600"
                        />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                        <DialogTitle
                            as="h3"
                            className="text-base font-semibold text-gray-900"
                        >
                            Are you sure you want to cancel this request?
                        </DialogTitle>
                        {/* <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eius aliquam laudantium
                                explicabo pariatur iste dolorem animi vitae
                                error totam. At sapiente aliquam accusamus
                                facere veritatis.
                            </p>
                        </div> */}
                    </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                        type="button"
                        disabled={loading}
                        onClick={() => cancel_handler(false)}
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:col-start-2"
                    >
                        {loading ? "Loading..." : "Cancel Request"}
                    </button>
                    <button
                        type="button"
                        data-autofocus
                        onClick={() => setOpen(false)}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                    >
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );
}
