import React from 'react'
import AdminLayout from '../layout'
import UserTableSection from './_sections/user-table-section'
import AddUserSection from './_sections/add-user-section'

export default function UserManagementPage() {
    return (
        <AdminLayout>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold text-gray-900">Users</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the users in your account including their name, title, email and role.
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <AddUserSection />
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className="overflow-hidden ring-1 shadow-sm ring-black/5 sm:rounded-lg">
                                <UserTableSection />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}
