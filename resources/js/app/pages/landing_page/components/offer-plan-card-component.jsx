import { Link } from '@inertiajs/react'
import { Modal } from 'antd';
import React, { useState } from 'react'

export default function OfferPlanCardComponent({ name, price, speed, href, popular, onClick }) {

    return (
        <div className="pt-8 sm:pt-10  lg:px-8 px-3  shadow-md shadow-blue-200 bg-white rounded-md">
            <div className='flex items-center justify-between gap-3'>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                    <button type='button' onClick={onClick}>
                        <u>Up to {speed}</u>
                    </button>
                </h3>
                {popular === "true" && (
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold text-indigo-600">
                        Most popular
                    </p>
                )}
            </div>
            <p className="mt-4 sm:mt-6 flex items-baseline gap-x-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">₱{price}</span>
                <span className="text-sm font-semibold text-gray-600">/month</span>
            </p>
            <p className="mt-2 sm:mt-3 text-sm text-gray-500">{name}</p>
            <Link
                href={href}
                className="mt-6 sm:mt-7 mb-3 block rounded-md bg-blue-600 px-4 py-2 text-center text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
                Apply Plan
            </Link>
        </div>
    )
}
