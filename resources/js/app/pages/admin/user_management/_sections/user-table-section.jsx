import React from 'react'
import EditUserSection from './edit-user-section'

const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
]

export default function UserTableSection() {
    
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
                        <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-6">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                        <tr key={person.email}>
                            <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6">
                                {person.name}
                            </td>
                            <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.email}</td>
                            <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.role}</td>
                            <td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-6">
                                <EditUserSection />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
