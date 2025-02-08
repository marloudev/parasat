import Modal from "@/app/pages/_components/modal";
import store from "@/app/pages/store/store";
import { create_internet_plan_thunk, delete_internet_plan_thunk, get_internet_plan_thunk } from "@/app/redux/internet-plan-thunk";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { message, Tooltip } from "antd";
import React, { useState } from "react";

export default function DeletePlanSection({ data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const [loading, setLoading] = useState(false);

    const submitPlan = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await store.dispatch(
                delete_internet_plan_thunk(data.id)
            );
            store.dispatch(get_internet_plan_thunk())
            message.success("Successfully Added!");
            setIsModalOpen(false);
        } catch (error) {
            message.error("Failed to add department. Please try again."); // Show error message
        } finally {
            setLoading(false); // Always reset loading state
        }
    };

    return (
        <div className="flex justify-end mt-4">
            <Tooltip title="Remove Plan">
            <button
                className="text-white font-bold py-2 px-4 rounded"
                onClick={openModal}
            >
                <TrashIcon className="h-5 w-5 inline-block text-red-600" />
            </button>
            </Tooltip>
            <Modal open={isModalOpen} setOpen={setIsModalOpen} width="w-1/4">
                <h2 className="text-xl font-semibold mb-4">
                    Are you sure you want to delete your plan?
                </h2>
                <form action="" onSubmit={submitPlan}>
                    <div className="flex w-full gap-5">
                    <button
                            type="button"
                            className="bg-blue-500 p-2 w-full rounded-md text-white hover:bg-blue-600"
                        >
                            Cancel
                        </button>
                        <button
                        disabled={loading}
                            type="submit"
                            className="bg-red-500 p-2 w-full rounded-md text-white hover:bg-red-600"
                        >
                            
                            {
                                loading?'Loading...':'Confirm'
                            }
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
