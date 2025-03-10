import React from 'react'

export default function DashboardCardComponents({ name, icon, total, bgColor }) {
    return (
        <div className={`divide-y w-full divide-gray-200 overflow-hidden rounded-2xl shadow-xl ${bgColor}`}>
            <div className="px-4 py-5 sm:p-6 h-80 text-center">
                <div className='text-[8rem] sm:text-[11rem] text-white'>
                    <b>{total}</b>
                </div>
            </div>
            <div className="px-4 py-4 sm:px-6 text-center bg-white">
                <div className='flex text-xl sm:text-3xl justify-center items-center'>
                    <div className="mr-2">{icon}</div>
                    <b>{name}</b>
                </div>
            </div>
        </div>
    )
}
