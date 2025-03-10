import React, { useEffect, useState } from 'react'
import { CheckBadgeIcon, ListBulletIcon, UserGroupIcon, UsersIcon, XCircleIcon } from '@heroicons/react/24/outline'
import DashboardCardComponents from '../components/dashboard-card-components'
import { dashboard_service } from '@/app/pages/services/dashboard-service';
import { QuestionCircleOutlined } from '@ant-design/icons';

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
                            name="Total Registered Items"
                            icon={<CheckBadgeIcon className='h-10 text-green-500' />}
                            total={data?.items?.total_item}
                            bgColor="bg-green-500"
                        />
                    </div>
                    <div className='w-full'>
                        <DashboardCardComponents
                            name="Total Requested Items"
                            icon={<QuestionCircleOutlined className='h-10 text-yellow-500' />}
                            total={data?.items?.total_request_item}
                            bgColor="bg-yellow-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
