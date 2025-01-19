import React, { useState } from "react";
import { Button, message, Modal } from "antd";
import { CheckIcon, EyeIcon } from "@heroicons/react/24/outline";
import { LoadingOutlined, SendOutlined } from "@ant-design/icons";
import Input from "@/app/pages/_components/input";
import Select from "@/app/pages/_components/select";
import { XMarkIcon } from "@heroicons/react/16/solid";

const ViewApplicationSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate a form submission (e.g., API call)
        setTimeout(() => {
            setLoading(false);
            setIsSubmitted(true);
        }, 2000); // 2-second delay to simulate submission
    };

    return (
        <>
            <button
                type="button"
                onClick={showModal}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
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
                        onSubmit={handleSubmit}
                    >
                        <h1 className="text-xl font-semibold mb-3 text-gray-900  mt-6">
                            Personal Information
                        </h1>
                        <div className="flex flex-1 gap-4">
                            <div className="flex flex-col w-full mb-4">
                                <div className="flex flex-1 gap-3">
                                    <Input
                                        // onChange={(event) => data_handler(event)}
                                        // value={applicantForm.fname ?? ""}
                                        // required={error?.fname ? true : false}
                                        name="fname"
                                        label="First Name"
                                        type="text"
                                    />
                                    <Input
                                        // onChange={(event) => data_handler(event)}
                                        // value={applicantForm.mname ?? ""}
                                        // required={error?.mname ? true : false}
                                        name="mname"
                                        label="Middle Name"
                                        type="text"
                                    />
                                    <Input
                                        // onChange={(event) => data_handler(event)}
                                        // value={applicantForm.lname ?? ""}
                                        // required={error?.lname ? true : false}
                                        name="lname"
                                        label="Last Name"
                                        type="text"
                                    />
                                    <select
                                        // onChange={(event) => data_handler(event)}
                                        name="suffix"
                                        className="border p-2 rounded  w-1/5"
                                    >
                                        <option disabled selected>
                                            Suffix
                                        </option>
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
                                    <div className="flex flex-col w-full">
                                        <select
                                            // onChange={(event) => data_handler(event)}
                                            // value={applicantForm.gender ?? ""}
                                            name="gender"
                                            className="border p-2 rounded w-full"
                                        >
                                            <option className="" disabled selected>&nbsp; Gender</option>
                                            <option> Male</option>
                                            <option> Female</option>
                                        </select>
                                        {/* {
                                                        error?.gender && <span className="text-red-500 text-sm mt-1">
                                                            This field is required.
                                                        </span>
                                                    } */}

                                    </div>

                                    <div className="flex flex-col w-full">
                                        <Input
                                            // onChange={(event) =>
                                            //     data_handler(event)
                                            // }
                                            // value={applicantForm.dob ?? ""}
                                            // required={error?.dob ? true : false}
                                            name="dob"
                                            label="Date of Birth"
                                            type="date"
                                        // errorMessage={error?.dob}
                                        />
                                    </div>
                                    <div className=" w-full">
                                        <Input
                                            // onChange={(event) => data_handler(event)}
                                            // value={applicantForm.email ?? ""}
                                            // required={error?.email ? true : false}
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
                                    <div className="flex flex-col w-full">
                                        <select
                                            // onChange={(event) => data_handler(event)}
                                            name="marital"
                                            className="border p-2 rounded w-full"
                                        >
                                            <option disabled selected>&nbsp; Marital Status</option>
                                            <option> Single</option>
                                            <option> Married</option>
                                            <option> Widowed</option>
                                            <option> Divorced</option>
                                        </select>
                                        {/* {
                                                        error?.marital && <span className="text-red-500 text-sm mt-1">
                                                            This field is required.
                                                        </span>
                                                    } */}
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <Input
                                            // onChange={(event) =>
                                            //     data_handler(event)
                                            // }
                                            // value={applicantForm.nationality ?? ""}
                                            // required={error?.nationality ? true : false}
                                            name="nationality"
                                            label="Nationality"
                                            type="text"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <Input
                                            // onChange={(event) => data_handler(event)}
                                            // value={applicantForm.phone ?? ""}
                                            // required={error?.phone ? true : false}
                                            name="phone"
                                            label="Phone Number"
                                            type="number"
                                        // errorMessage={error?.email}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex flex-1 gap-4 mb-4">
                                        <div className="w-full">
                                            <select
                                                name="educ"
                                                className="border p-2.5 rounded w-full"
                                            // onChange={(event) => data_handler(event)}
                                            >
                                                <option disabled selected>&nbsp; Highest Educational Attainment</option>
                                                <option> Elementary Undergraduate</option>
                                                <option> Elementary Graduate</option>
                                                <option> Highschool/K-12 Undergraduate</option>
                                                <option> Highschool/K-12 Graduate</option>
                                                <option> College Level</option>
                                                <option> College Graduate</option>
                                                <option> Vocational Graduate</option>
                                                <option> Masteral Degree</option>
                                                <option> Doctoral Degree</option>
                                            </select>
                                        </div>
                                    </div> */}
                        <h1 className="text-xl font-semibold mb-3 text-gray-900  mt-5">
                            Address Information
                        </h1>
                        {/* <div className="flex flex-1 gap-4 mb-4 w-full">
                            <div className="flex flex-col w-full">
                                <Select
                                    onChange={(event) => data_handler(event)}
                                    // value={applicantForm.region ?? ""}
                                    options={region.map(res => ({
                                        label: res.region_name,
                                        value: JSON.stringify({ name: res.region_name, region_code: res.region_code }),
                                    }))}
                                    name="region"
                                    label="Region"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <Select
                                    onChange={(event) => data_handler(event)}
                                    // value={applicantForm.province ?? ""}
                                    options={newProvince.map(res => ({
                                        label: res.province_name,
                                        value: JSON.stringify({ name: res.province_name, province_code: res.province_code }),
                                    }))}
                                    name="province"
                                    label="Province"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <Select
                                    onChange={(event) => data_handler(event)}
                                    // value={applicantForm.city ?? ""}
                                    options={newCity.map(res => ({
                                        label: res.city_name,
                                        value: JSON.stringify({ name: res.city_name, city_code: res.city_code }),
                                    }))}
                                    name="city"
                                    label="City/Municipality"
                                />
                            </div>
                        </div>
                        <div className="flex flex-1 gap-4 mb-4">
                            <div className="flex flex-col  w-1/2">
                                <Select
                                    onChange={(event) => data_handler(event)}
                                    // value={applicantForm.barangay ?? ""}
                                    options={newBarangay.map(res => ({
                                        label: res.brgy_name,
                                        value: res.brgy_name,
                                    }))}
                                    name="brgy"
                                    label="Barangay"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <Input
                                    onChange={(event) => data_handler(event)}
                                    // value={applicantForm.lot ?? ""}
                                    name="lot"
                                    label="House/Lot No., Street, Purok/Sitio"
                                    type="text"
                                />
                            </div>
                        </div> */}
                        <h1 className="text-xl font-semibold mb-3 text-gray-900  mt-7">
                            Plan Details
                        </h1>
                        <div className="mb-4 w-full">
                            <Input
                                // onChange={(event) => data_handler(event)}
                                // value={applicantForm.ename ?? ""}
                                name="ename"
                                label="Emergency Contact Fullname"
                                type="text"
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <Input
                                // onChange={(event) => data_handler(event)}
                                // value={applicantForm.eaddress ?? ""}
                                name="eaddress"
                                label="Address"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-1 gap-4 mb-4">
                            <div className="w-full">
                                <Input
                                    // onChange={(event) => data_handler(event)}
                                    // value={applicantForm.relationship ?? ""}
                                    name="relationship"
                                    label="Relationship"
                                    type="text"
                                />
                            </div>
                            <div className="w-full">
                                <Input
                                    // onChange={(event) => data_handler(event)}
                                    // value={applicantForm.ephone ?? ""}
                                    name="ephone"
                                    label="Contact No."
                                    type="number"
                                />
                            </div>
                        </div>
                        <div className="flex flex-1 items-center justify-end gap-2 mt-8">

                            <button
                                type="submit"
                                className={`flex bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg ${loading ? "cursor-not-allowed opacity-75" : ""
                                    }`}
                                // onClick={submitApplicant}
                                disabled={loading}
                            >
                                {loading ? (
                                    <LoadingOutlined spin />
                                ) : (
                                    <CheckIcon className="h-6" />
                                )}
                                {loading ? " SUBMITTING..." : " ACCEPT"}
                            </button>
                            <button
                                type="submit"
                                className={` flex bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ${loading ? "cursor-not-allowed opacity-75" : ""
                                    }`}
                                // onClick={submitApplicant}
                                disabled={loading}
                            >
                                {loading ? (
                                    <LoadingOutlined spin />
                                ) : (
                                    <XMarkIcon className="h-6" />
                                )}
                                {loading ? " SUBMITTING..." : "DECLINE"}
                            </button>
                        </div>
                    </form>
                </>
            </Modal>
        </>
    );
};

export default ViewApplicationSection;
