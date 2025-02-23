import React from 'react'
import DeletePlanSection from '../_sections/delete-plan-section'
import UpdatePlanSection from '../_sections/update-plan-section'

export default function PlanCardComponent({ name, price, speed, href, popular, data }) {

    return (
        <div className=" py-5 shadow-md shadow-blue-200 bg-white rounded-md">
            <div className='flex gap-5 flex-1 items-center justify-between mx-5'>
                <div className='flex gap-3 items-center justify-between w-full'>
                    <h3 className="text-base/7 font-semibold text-gray-900">
                        Up to {speed}
                    </h3>
                    <div>
                        {popular === "true" && (
                            <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600">
                                Most popular
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <p className="mx-5 flex items-baseline gap-x-1">
                <span className="text-5xl font-semibold tracking-tight text-gray-900">₱{price}</span>
                <span className="text-sm/6 font-semibold text-gray-600">/month</span>
            </p>
            <p className="mx-5 text-sm/6 text-gray-500">{name}</p>
            <div className='flex items-center justify-end mx-5 '>
                <DeletePlanSection data={data} />
                <UpdatePlanSection data={data} />
            </div>
        </div>
    )
}
