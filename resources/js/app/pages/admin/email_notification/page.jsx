import React from 'react'
import AdminLayout from '../layout'
import Select from '../../_components/select'
import Button from '../../_components/button';
import { MailFilled } from '@ant-design/icons';

export default function EmailNotificationPage() {
    const typeOptions = [
        { value: 'Alert', label: 'Alert' },
        { value: 'Maintenance', label: 'Maintenance' },
        { value: 'Disconnection', label: 'Disconnection' },
        { value: 'E-Bill', label: 'E-Bill' },
        { value: 'Offers / Promos', label: 'Offers / Promos' },
    ];

    const areaOptions = [
        { value: 'OLT 1', label: 'OLT 1' },
        { value: 'OLT 2', label: 'OLT 2' },
        { value: 'OLT 3', label: 'OLT 3' },
        { value: 'OLT 4', label: 'OLT 4' },
        { value: 'All', label: 'All' },
        { value: 'Brgy. 1', label: 'Brgy. 1' },
        { value: 'Brgy. 2', label: 'Brgy. 2' },
        { value: 'Brgy. 3', label: 'Brgy. 3' },
        { value: 'Brgy. 4', label: 'Brgy. 4' },
        { value: 'Brgy. 5', label: 'Brgy. 5' },
        { value: 'Brgy. 6', label: 'Brgy. 6' },
        { value: 'Brgy. Rizal', label: 'Brgy. Rizal' },
    ];

    return (
        <AdminLayout>
            <div className=' mb-4 text-2xl'>
                <h1><MailFilled/> Email Notifications</h1>
            </div>
            <div className=' bg-white p-4 rounded-lg shadow-xl'>
                <div className='m-4'>
                    <Select
                        name="type"
                        label="Type"
                        options={typeOptions}
                    />
                </div>

                <div className='m-4'>
                    <Select
                        name="area"
                        label="Area"
                        options={areaOptions}
                    />
                </div>

                <div className='m-4'>
                    <label htmlFor="comment" className="block text-sm/6 font-medium text-gray-900">
                        Email content
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="comment"
                            name="comment"
                            rows={4}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            defaultValue={''}
                        />
                    </div>

                    <div className='mt-4 flex justify-end'>
                        <Button
                        variant='info'
                        >
                            Send
                        </Button>
                    </div>
                </div>

            </div>

        </AdminLayout>
    )
}
