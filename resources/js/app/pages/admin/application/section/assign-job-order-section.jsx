import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";

import Button from "@/app/pages/_components/button";
import Modal from "@/app/pages/_components/modal";
import Select from "@/app/pages/_components/select";
import store from "@/app/pages/store/store";
import { create_job_order_thunk } from "@/app/redux/job-order-thunk";
import Swal from "sweetalert2";
import { get_application_thunk } from "@/app/redux/application-thunk";
import { useEffect } from "react";

export default function AssignJobOrderSection({ data }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        tech_id: "",
        job_type: "Survey",
    });

    useEffect(() => {
        setForm({
            ...form,
            ...data,
        });
    }, [open]);
    const { users } = useSelector((store) => store.app);
    const tech = users.filter((res) => res.user_type === "2");

    function handleInputChange(e) {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    }

    async function form_submit() {
        setLoading(true);
        try {
            await store.dispatch(
                create_job_order_thunk({
                    ...form,
                    ...data,
                })
            );
            await store.dispatch(get_application_thunk());

            await Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
            });
            setOpen(false);
            setLoading(false);
            // setForm(
            //     ...{
            //         tech_id: "",
            //         job_type: "Survey",
            //     },
            //     ...data
            // );
            window.location.reload();
        } catch (error) {
            setLoading(false);
        }
    }

    return (
        <div>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
                <ArrowsRightLeftIcon className="h-5" />
            </button>

            <Modal open={open} setOpen={setOpen}>
                <div className="text-xl pb-3">Assign Job Order</div>

                <Select
                    name="tech_id"
                    label="Select Tech"
                    onChange={handleInputChange}
                    options={tech.map((res) => ({
                        label: res.name,
                        value: res.id,
                    }))}
                    value={form.tech_id}
                />

                <div className="flex gap-3 py-4 items-center justify-evenly">
                    {(data.status == "Pending" ||
                        application?.status != "Approved Survey") && (
                        <div className="flex items-center">
                            <input
                                id="radio-survey"
                                type="radio"
                                name="job_type"
                                value="Survey"
                                checked={form.job_type === "Survey"}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            />
                            <label
                                htmlFor="radio-survey"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Survey
                            </label>
                        </div>
                    )}
                    <div className="flex items-center">
                        <input
                            id="radio-installation"
                            type="radio"
                            name="job_type"
                            value="Installation"
                            checked={form.job_type === "Installation"}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                            htmlFor="radio-installation"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Installation
                        </label>
                    </div>
                </div>

                <div className="flex items-center justify-end">
                    <Button
                        disabled={loading || !form.tech_id}
                        onClick={form_submit}
                        variant="info"
                        className="w-full"
                    >
                        {loading ? "Loading..." : "CREATE JO"}
                    </Button>
                </div>
            </Modal>
        </div>
    );
}
