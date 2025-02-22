import React, { useState } from "react";
import { Button, message, Modal } from "antd";
import { CheckIcon, EyeIcon } from "@heroicons/react/24/outline";
import { LoadingOutlined, SendOutlined } from "@ant-design/icons";
import Input from "@/app/pages/_components/input";
import Select from "@/app/pages/_components/select";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useSelector } from "react-redux";
import InputPrice from "@/app/pages/_components/inputprice";
import store from "@/app/pages/store/store";
import { get_application_thunk, update_application_thunk } from "@/app/redux/application-thunk";
import ApprovedApplicationSection from "./approved-application-section";
import DeclineApplicationSection from "./decline-application-section";
import ElectricBillSection from "./electric-bill-section";
import ValidIDSection from "./valid-id-section";
import LocationSection from "./location-section";

export default function ViewApplicationSection({ data, item }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [isSubmitted, setIsSubmitted] = useState(false);
    // async function send_approved_application(e) {
    //     e.preventDefault();
    //     setLoading(true);
    //     try {
    //         await store.dispatch(
    //             update_application_thunk({
    //                 // ...form,
    //                 ...data,
    //                 status: 'Approved',
    //             })
    //         );
    //         await store.dispatch(get_application_thunk());
    //         message.success("Email has been sent!");
    //         setOpen(false);
    //         setLoading(false);
    //     } catch (error) {
    //         setLoading(false);
    //     }
    // }

    console.log('daraaa', data)

    return (
        <>
            <button
                type="button"
                onClick={showModal}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
            >
                <EyeIcon className='h-5' />
            </button>
            <Modal
                title="View Application Details"
                width={1000}
                open={isModalOpen}
                onCancel={handleCancel}
                confirmLoading={loading}
                okText="Save"
                footer={null}
            >
                <>
                    <form
                        className="border rounded-lg p-3.5"
                    // onSubmit={send_approved_application}
                    >
                        <h1 className="text-xl font-semibold mb-3 text-gray-900">
                            Personal Information
                        </h1>
                        <div className="flex flex-1 gap-4">
                            <div className="flex flex-col w-full mb-4">
                                <div className="flex flex-1 gap-3">
                                    <Input
                                        value={data?.fname ?? ""}
                                        name="fname"
                                        label="First Name"
                                        type="text"
                                    />
                                    <Input
                                        value={data?.mname ?? ""}
                                        name="mname"
                                        label="Middle Name"
                                        type="text"
                                    />
                                    <Input
                                        value={data?.lname ?? ""}
                                        name="lname"
                                        label="Last Name"
                                        type="text"
                                    />
                                    <input
                                        name="suffix"
                                        className="border p-2 rounded  w-1/5"
                                        value={data?.suffix ?? ""}
                                        placeholder="----"
                                    >
                                    </input>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-4">
                            <div className="flex w-full">
                                <div className="flex flex-col gap-4 mb-4 w-full">
                                    <div className="flex flex-col w-full">
                                        <Input
                                            value={data?.bdate ?? ""}
                                            name="dob"
                                            label="Date of Birth"
                                            type="date"
                                        // errorMessage={error?.dob}
                                        />
                                    </div>
                                    <div className=" w-full">
                                        <Input
                                            value={data?.email ?? ""}
                                            name="email"
                                            label="Email"
                                            type="email"
                                        // errorMessage={error?.email}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full">
                                <div className="flex flex-col gap-4 mb-4 w-full">
                                    <div className="w-full">
                                        <Input
                                            value={data?.contact ?? ""}
                                            name="phone"
                                            label="Phone Number"
                                            type="number"
                                        // errorMessage={error?.email}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-xl font-semibold mb-3 text-gray-900  mt-5" >
                            Address Information
                        </h1>
                        <div className="flex flex-1 gap-4 mb-4 w-full">
                            <div className="flex flex-col w-full">
                                <Input
                                    value={`${data?.lot ?? ""}, ${data?.barangay ?? ""}, ${data?.city ?? ""}, ${data?.province ?? ""}`}
                                    name="address"
                                    label="Address"
                                />
                            </div>
                        </div>
                        <h1 className="text-xl font-semibold mb-3 text-gray-900  mt-6">
                            Second Contact Person
                        </h1>
                        <div className="flex flex-1 gap-4">
                            <div className="flex flex-col w-full mb-4">
                                <div className="flex flex-1 gap-3">
                                    <Input
                                        value={data?.sfname ?? ""}
                                        // required={error?.fname ? true : false}
                                        name="sfname"
                                        label="First Name"
                                        type="text"
                                    />
                                    <Input
                                        value={data?.smname ?? ""}
                                        // required={error?.mname ? true : false}
                                        name="smname"
                                        label="Middle Name"
                                        type="text"
                                    />
                                    <Input
                                        value={data?.slname ?? ""}
                                        // required={error?.lname ? true : false}
                                        name="slname"
                                        label="Last Name"
                                        type="text"
                                    />
                                    <select
                                        value={data?.ssuffix ?? ""}
                                        name="ssuffix"
                                        className="border p-2 rounded  w-1/5"
                                    >
                                        <option disabled selected>
                                            Suffix
                                        </option>
                                        <option></option>
                                        <option> Sr.</option>
                                        <option> Jr.</option>
                                        <option> II</option>
                                        <option> III</option>
                                        <option> IV</option>
                                        <option> V</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 gap-4">
                            <div className="flex w-full">
                                <div className="flex flex-col gap-4 mb-4 w-full">
                                    <div className=" w-full">
                                        <Input
                                            value={data?.semail ?? ""}
                                            // required={error?.email ? true : false}
                                            name="semail"
                                            label="Email"
                                            type="email"
                                        // errorMessage={error?.email}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full">
                                <div className="flex flex-col gap-4 mb-4 w-full">
                                    <div className="w-full">
                                        <Input
                                            value={data?.scontact ?? ""}
                                            // required={error?.phone ? true : false}
                                            name="scontact"
                                            label="Phone Number"
                                            type="number"
                                        // errorMessage={error?.email}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-xl font-semibold mb-3 text-gray-900  mt-7">
                            Plan Details
                        </h1>
                        <div className="mb-4 w-full">
                            <Input
                                value={data?.plan_name ?? ""}
                                name="plan_name"
                                label="Plan Name"
                                type="text"
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <Input
                                value={data?.plan_speed ?? ""}
                                name="plan_speed"
                                label="Plan Speed"
                                type="text"
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <InputPrice
                                value={data?.plan_price ?? ""}
                                name="plan_price"
                                label="Plan Price"
                                type="text"
                            />
                        </div>
                        <div>
                            <ElectricBillSection data={data} />
                        </div>
                        <div>
                            <ValidIDSection data={data} />
                        </div>
                        <div>
                            <LocationSection data={data} />
                        </div>
                        <div>
                            {/* <FileUploadSection /> */}
                        </div>
                        <div className="flex flex-1 items-center justify-end gap-2 mt-8">
                            {data?.status === 'Pending' && (
                                <>
                                    <ApprovedApplicationSection data={data} />
                                    <DeclineApplicationSection data={data} />
                                </>
                            )}
                        </div>


                    </form>
                </>
            </Modal >
        </>
    );
};

