import React, { useEffect, useState } from 'react'
import { CheckBadgeIcon, ListBulletIcon, UserGroupIcon, UsersIcon, XCircleIcon } from '@heroicons/react/24/outline'
import DashboardCardComponents from '../components/dashboard-card-components'
import { dashboard_service } from '@/app/pages/services/dashboard-service';

export default function DashboardSection() {
    const [data, setData] = useState({});
    useEffect(() => {
        async function get_tile(params) {
            const res = await dashboard_service();
            setData(res);
        }
        get_tile();
    }, []);

    console.log('qqqqqqq', data)
    return (
        <div>
            <div className=''>
                {/* Flex container with responsive layout */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full m-4 p-2'>
                    <div className='w-full'>
                        <DashboardCardComponents
                            name="Approved Application"
                            icon={<CheckBadgeIcon className='h-10 text-green-500' />}
                            total={data?.application?.approved}
                            bgColor="bg-green-500"
                        />
                    </div>
                    <div className='w-full'>
                        <DashboardCardComponents
                            name="Declined Application"
                            icon={<XCircleIcon className='h-10 text-red-500' />}
                            total={data?.application?.declined}
                            bgColor="bg-red-500"
                        />
                    </div>
                    <div className='w-full'>
                        <DashboardCardComponents
                            name="Pending Application"
                            icon={<CheckBadgeIcon className='h-10 text-orange-500' />}
                            total={data?.application?.pending}
                            bgColor="bg-orange-500"
                        />
                    </div>
                    <div className='w-full'>
                        <DashboardCardComponents
                            name="Total Number of Applications"
                            icon={<UserGroupIcon className='h-10 text-blue-500' />}
                            total={data?.application?.total}
                            bgColor="bg-blue-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
