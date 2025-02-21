import { EyeIcon, ViewfinderCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import ViewApplicationSection from './view-application-section'
import { useSelector } from 'react-redux';

export default function ApplicationTableSection() {

    const { applications } = useSelector((state) => state.applications);

    const people = [
        { name: 'Skyworth ONT', title: 'ONT', email: '200', role: 'Headend' },
        // More people...
    ]

    console.log('aappppp', applications)

    return (
        <div className="-mx-4 mt-8 p-8 sm:-mx-0 bg-white rounded-md shadow-md">
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                            Name of Subscriber
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                        >
                            Internet Plan
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                        >
                            Email
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                        >
                            Address
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                        >
                            Status
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Action
                        </th>

                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {applications && applications.map((application, index) => (
                        <tr key={application.email}>
                            <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                                {application.fname} {application.mname} {application.lname} {application.suffix}
                            </td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{application.plan_name}</td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{application.email}</td>
                            <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{application.lot} {application.barangay}, {application.city}, {application.province}</td>
                            <td className="py-4 text-sm font-medium sm:pr-0 ">
                                <p className={`py-2 items-center justify-center flex rounded-md w-24 text- text-sm font-medium sm:pr-0 
                                    ${application?.status === 'Pending' ? 'bg-orange-400' :
                                        application?.status === 'Approved' ? 'bg-green-500' :
                                            application?.status === 'Declined' ? 'bg-red-500' : ''
                                    }`}>{application?.status}</p>
                            </td>
                            <td className="flex py-4 text-sm font-medium sm:pr-0 ">
                                <ViewApplicationSection data={application} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
