import React from 'react'
import EditUserSection from './edit-user-section'
import { useSelector } from 'react-redux'
import DeleteUserSection from './delete-user-section'

const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
]

export default function UserTableSection() {
    const { users } = useSelector((store) => store.app)
    console.log('users', users)
    return (
        <div>
            <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            Name
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Email
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Role
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {users.map((person) => (
                        <tr key={person.email}>
                            <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6">
                                {person.name}
                            </td>
                            <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.email}</td>
                            <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                                {person.user_type === '1' ? 'Administrator'
                                    : person.user_type === '2' ? 'Tech Team'
                                        : person.user_type === '3' ? 'CSR'
                                            : person.user_type === '4' ? 'Inventory Custodian'
                                                : 'Unknown'}
                            </td>
                            <td className="flex gap-2 py-5 px-2 text-sm font-medium sm:pr-0 ">
                                <EditUserSection data={person} />
                                <DeleteUserSection data={person} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
