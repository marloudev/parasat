import Modal from "@/app/pages/_components/modal";
import store from "@/app/pages/store/store";
import { delete_application_thunk, get_application_thunk } from "@/app/redux/application-thunk";
import { TrashIcon } from "@heroicons/react/24/outline";
import { message, Tooltip } from "antd";
import React, { useState } from "react";

export default function DeleteApplicationSection({ data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const [loading, setLoading] = useState(false);

    const deleteApplication = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await store.dispatch(
                delete_application_thunk(data.id)
            );
            store.dispatch(get_application_thunk())
            message.success("Application Deleted Successfully!");
            setIsModalOpen(false);
        } catch (error) {
            message.error("Failed to Delete Application. Please try again."); // Show error message
        } finally {
            setLoading(false); // Always reset loading state
        }
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <Tooltip title="Delete Application">
                <button
                    type="button"
                    onClick={openModal}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                >
                    <TrashIcon className='h-5' />
                </button>
            </Tooltip>
            <Modal open={isModalOpen} setOpen={setIsModalOpen} width="w-1/2">
                <h2 className="text-xl font-semibold mb-4">
                    Are you sure you want to delete this Application?
                </h2>
                <form action="" onSubmit={deleteApplication}>
                    <div className="flex w-full gap-5">
                        <button
                            type="button"
                            onClick={handleClose}
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
                                loading ? 'Loading...' : 'Confirm'
                            }
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
}
