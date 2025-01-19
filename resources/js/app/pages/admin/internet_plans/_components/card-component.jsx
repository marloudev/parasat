import React from 'react'

export default function PlanCardComponent({ name, monthly, annually, href, popular }) {

    return (
        <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14 shadow-md shadow-blue-200 bg-white rounded-md">
            <div className='flex flex-1 items-center justify-between mt-2'>
                <h3 className="text-base/7 font-semibold text-gray-900">
                    {name}
                </h3>
                {popular && (
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600">
                        Most popular
                    </p>
                )}
            </div>
            <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-5xl font-semibold tracking-tight text-gray-900">{monthly}</span>
                <span className="text-sm/6 font-semibold text-gray-600">/month</span>
            </p>
            <p className="mt-3 text-sm/6 text-gray-500">{annually} per month if paid annually</p>
            
        </div>
    )
}
