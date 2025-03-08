import React, { useState } from 'react'
import Input from '../../_components/input'
import { LoadingOutlined, SendOutlined } from '@ant-design/icons'
import region from "@/app/address/region.json"
import province from "@/app/address/province.json"
import city from "@/app/address/city.json"
import barangay from "@/app/address/barangay.json"
import Select from '../../_components/select'
import InputPrice from '../../_components/inputprice'
import { useDispatch, useSelector } from 'react-redux'
import store from '../../store/store'
import { create_application_thunk } from '@/app/redux/application-thunk'
import { message } from 'antd'
import { setApplication } from '@/app/redux/application-slice'
import moment from 'moment';
import UploadElectricBillSection from './upload-electric-bill-section'
import UploadLocationSection from './upload-location-section'
import UploadValidIDSection from './upload-valid-id-section'
import ContactUsSection from '../../landing_page/sections/contact-us-section'

export default function ApplicationFormSection() {
    const { internet_plan } = useSelector((state) => state.internet_plans);
    const [loading, setLoading] = useState(null);
    const [newProvince, setNewProvince] = useState([])
    const [newCity, setNewCity] = useState([])
    const [newBarangay, setNewBarangay] = useState([])
    const { application } = useSelector((state) => state.applications);
    const [uploadedFile1, setUploadedFile1] = useState(null);
    const [uploadedFile2, setUploadedFile2] = useState(null);
    const [uploadedFile3, setUploadedFile3] = useState(null);

    const dispatch = useDispatch()

    console.log('uploadedFile1', uploadedFile1)
    console.log('uploadedFile2', uploadedFile2)
    console.log('uploadedFile3', uploadedFile3)

    function data_handler(e) {
        if (e.target.name === 'region') {
            const region = JSON.parse(e.target.value);
            if (region && region.region_code) {
                const prov = province.filter(obj => obj.region_code === region.region_code);
                setNewProvince(prov);
                dispatch(setApplication({
                    ...application,
                    [e.target.name]: region.name,
                }));

            }
        } else if (e.target.name === 'province') {
            const province = JSON.parse(e.target.value);
            if (province && province.province_code) {
                const ct = city.filter(obj => obj.province_code === province.province_code);
                setNewCity(ct);
                dispatch(setApplication({
                    ...application,
                    [e.target.name]: province.name,
                }));

            }
        } else if (e.target.name === 'city') {
            const city = JSON.parse(e.target.value);
            if (city && city.city_code) {
                const brgy = barangay.filter(obj => obj.city_code === city.city_code);
                setNewBarangay(brgy);
                dispatch(setApplication({
                    ...application,
                    [e.target.name]: city.name,
                }));

            }
        } else {
            dispatch(setApplication({
                ...application,
                [e.target.name]: e.target.value,
            }));

        }
    }


    console.log('applicationss', application)

    const [isSubmitted, setIsSubmitted] = useState(false);


    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const fd = new FormData();
        fd.append('app_id', application.id ?? '');
        fd.append('file_name', application.file_name ?? '');
        fd.append('fname', application.fname ?? '');
        fd.append('mname', application.mname ?? '');
        fd.append('lname', application.lname ?? '');
        fd.append('suffix', application.suffix ?? '');
        fd.append('bdate', application.dob ?? moment().format('YYYY-MM-DD'));
        fd.append('email', application.email ?? '');
        fd.append('contact', application.contact ?? '');
        fd.append('lot', application.lot ?? '');
        fd.append('region', application.region ?? '');
        fd.append('city', application.city ?? '');
        fd.append('barangay', application.barangay ?? '');
        fd.append('province', application.province ?? '');
        fd.append('sfname', application.sfname ?? '');
        fd.append('smname', application.smname ?? '');
        fd.append('slname', application.slname ?? '');
        fd.append('ssuffix', application.ssuffix ?? '');
        fd.append('semail', application.semail ?? '');
        fd.append('scontact', application.scontact ?? '');
        fd.append('status', "Pending" ?? '');
        fd.append('plan_name', internet_plan.name ?? '');
        fd.append('plan_speed', internet_plan.speed ?? '');
        fd.append('plan_price', internet_plan.price ?? '');

        if (uploadedFile1 && uploadedFile1.length > 0) {
            Array.from(uploadedFile1).forEach((file) => {
                fd.append('electric_bills[]', file); // Append each file as part of an array
            });
        }

        if (uploadedFile2 && uploadedFile2.length > 0) {
            Array.from(uploadedFile2).forEach((file) => {
                fd.append('valid_id[]', file); // Append each file as part of an array
            });
        }
        if (uploadedFile3 && uploadedFile3.length > 0) {
            Array.from(uploadedFile3).forEach((file) => {
                fd.append('locations[]', file); // Append each file as part of an array
            });
        }
        try {
            setLoading(true);
            await store.dispatch(create_application_thunk(fd));
            message.success("Application Successfully Submitted!");
            setOpen(false);
        } catch (error) {
            // message.error("Failed to submit Application. Please try again.");
        } finally {
            setLoading(false);
            // setIsSubmitted(true) 
        }
    }


    return (
        <div className='bg-sky-500 h-screen'>
            {isSubmitted ? (
                <div className="fixed inset-10 sm:inset-20 md:inset-32 lg:inset-40 flex items-center justify-center mb-40 sm:mb-20 md:mb-32 lg:mb-40 z-50">
                    <div className="popup-message animate-pop-up text-xl text-white bg-sky-800 text-center p-5 rounded-2xl border-2 border-black">
                        <b><i>Thank you for submitting your application for our plan. Please ensure that you check your email regularly for any updates regarding your application.</i></b>
                    </div>
                </div>
            ) : (
                <div className=''>
                    <div className="h-screen overflow-hidden ">
                        <div className="bg-cover bg-[url('/images/SCemp.jpg')] transition-colors duration-300 h-full overflow-y-scroll">
                            <div className="container mx-auto px-10 flex justify-center">
                                <div className="bg-white shadow-2xl shadow-black rounded-lg p-6 mt-12 w-full">
                                    <div className='flex text-2xl items-center justify-center'>
                                        <h1><b>APPLICATION FORM</b></h1>
                                    </div>
                                    <form
                                        className="border rounded-lg p-4 md:p-6 lg:p-8"
                                        onSubmit={handleSubmit}
                                    >
                                        <h1 className="text-xl font-semibold mb-4 text-gray-900">Personal Information</h1>

                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                            <Input onChange={(event) => data_handler(event)} value={application?.fname ?? ""} name="fname" label="First Name" type="text" />
                                            <Input onChange={(event) => data_handler(event)} value={application?.mname ?? ""} name="mname" label="Middle Name" type="text" />
                                            <Input onChange={(event) => data_handler(event)} value={application?.lname ?? ""} name="lname" label="Last Name" type="text" />
                                            <select onChange={(event) => data_handler(event)} value={application?.suffix ?? ""} name="suffix" className="border p-2 rounded w-full">
                                                <option disabled selected>Suffix</option>
                                                <option></option>
                                                <option>Sr.</option>
                                                <option>Jr.</option>
                                                <option>II</option>
                                                <option>III</option>
                                                <option>IV</option>
                                                <option>V</option>
                                                <option>VI</option>
                                                <option>VII</option>
                                                <option>VIII</option>
                                            </select>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                            <Input onChange={(event) => data_handler(event)} value={application?.bdate ?? ""} name="bdate" label="Date of Birth" type="date" />
                                            <Input onChange={(event) => data_handler(event)} value={application?.contact ?? ""} name="contact" label="Phone number" type="number" />
                                            <Input onChange={(event) => data_handler(event)} value={application?.email ?? ""} name="email" label="Email" type="email" />
                                        </div>

                                        <div className="mt-4">
                                            <h1 className="text-xl font-semibold mb-4 text-gray-900">Address Information</h1>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <Select
                                                    onChange={(event) => data_handler(event)}
                                                    // value={application.region ?? ""}
                                                    options={region.map(res => ({
                                                        label: res.region_name,
                                                        value: JSON.stringify({ name: res.region_name, region_code: res.region_code }),
                                                    }))}
                                                    name="region"
                                                    label="Region"
                                                    placeholder="Select Region"
                                                />
                                                <Select
                                                    onChange={(event) => data_handler(event)}
                                                    // value={application.province ?? ""}
                                                    options={newProvince.map(res => ({
                                                        label: res.province_name,
                                                        value: JSON.stringify({ name: res.province_name, province_code: res.province_code }),
                                                    }))}
                                                    name="province"
                                                    label="Province"
                                                    placeholder="Select Province"
                                                />
                                                <Select
                                                    onChange={(event) => data_handler(event)}
                                                    // value={application.city ?? ""}
                                                    options={newCity.map(res => ({
                                                        label: res.city_name,
                                                        value: JSON.stringify({ name: res.city_name, city_code: res.city_code }),
                                                    }))}
                                                    name="city"
                                                    label="City/Municipality"
                                                    placeholder="Select City"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                <Select
                                                    onChange={(event) => data_handler(event)}
                                                    // value={application.barangay ?? ""}
                                                    options={newBarangay.map(res => ({
                                                        label: res.brgy_name,
                                                        value: res.brgy_name,
                                                    }))}
                                                    name="barangay"
                                                    label="Barangay"
                                                    placeholder="Select Barangay"
                                                />
                                                <Input
                                                    onChange={(event) => data_handler(event)}
                                                    value={application.lot ?? ""}
                                                    name="lot"
                                                    label="House/Lot No., Street, Purok/Sitio"
                                                    type="text"
                                                />
                                            </div>
                                        </div>

                                        <h1 className="text-xl font-semibold mb-3 text-gray-900  mt-6">
                                            Second Contact Person
                                        </h1>
                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                            <Input
                                                onChange={(event) => data_handler(event)}
                                                value={application?.sfname ?? ""}
                                                // required={error?.fname ? true : false}
                                                name="sfname"
                                                label="First Name"
                                                type="text"
                                            />
                                            <Input
                                                onChange={(event) => data_handler(event)}
                                                value={application?.smname ?? ""}
                                                // required={error?.mname ? true : false}
                                                name="smname"
                                                label="Middle Name"
                                                type="text"
                                            />
                                            <Input
                                                onChange={(event) => data_handler(event)}
                                                value={application?.slname ?? ""}
                                                // required={error?.lname ? true : false}
                                                name="slname"
                                                label="Last Name"
                                                type="text"
                                            />
                                            <select
                                                onChange={(event) => data_handler(event)}
                                                value={application?.ssuffix ?? ""}
                                                name="ssuffix"
                                                className="border p-2 rounded  w-full"
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
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                            <div className=" w-full">
                                                <Input
                                                    onChange={(event) => data_handler(event)}
                                                    value={application?.semail ?? ""}
                                                    // required={error?.email ? true : false}
                                                    name="semail"
                                                    label="Email"
                                                    type="email"
                                                // errorMessage={error?.email}
                                                />
                                            </div>

                                            <div className="flex w-full">
                                                <div className="flex flex-col gap-4 mb-4 w-full">
                                                    <div className="w-full">
                                                        <Input
                                                            onChange={(event) => data_handler(event)}
                                                            value={application?.scontact ?? ""}
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

                                        <div className="mt-4">
                                            <h1 className="text-xl font-semibold mb-4 text-gray-900">Plan Details</h1>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <Input oonChange={(event) => data_handler(event)} value={internet_plan?.name ?? ""} name="plan_name" label="Plan Name" type="text" />
                                                <Input oonChange={(event) => data_handler(event)} value={internet_plan?.speed ?? ""} name="plan_speed" label="Plan Speed" type="text" />
                                                <InputPrice oonChange={(event) => data_handler(event)} value={internet_plan?.price ?? ""} name="plan_price" label="Plan Price" type="text" />
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <UploadElectricBillSection files={uploadedFile1} setFiles={setUploadedFile1} />
                                            <UploadValidIDSection files={uploadedFile2} setFiles={setUploadedFile2} />
                                            <UploadLocationSection files={uploadedFile3} setFiles={setUploadedFile3} />
                                        </div>

                                        <div className="flex justify-end mt-4">
                                            <button
                                                type="submit"
                                                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full ${loading ? "cursor-not-allowed opacity-75" : ""
                                                    }`}
                                                disabled={isSubmitted || loading}
                                            >
                                                {loading ? (
                                                    <span className="flex items-center space-x-2">
                                                        <LoadingOutlined className="animate-spin" />
                                                        <span>PROCESSING APPLICATION...</span>
                                                    </span>
                                                ) : (
                                                    "SUBMIT APPLICATION"
                                                )}
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            <div className='mt-10'>
                                <section id='contactsss'>
                                    <ContactUsSection />
                                </section>
                            </div>
                        </div>
                    </div>
                </div >
            )
            }

        </div >
    )
}
