import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { router } from '@inertiajs/react'
import React from 'react'
import OfferPlanCardComponent from '../components/offer-plan-card-component'

export default function PlanListSection() {

    return (
        <div>
            <div className="bg-sky-600 pb-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col gap-3">
                        <p className='mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-5xl mb-4 shadow-blue-300 shadow-lg w-full'>
                            PLANS OFFER:
                        </p>
                        <div className='className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 gap-x-3 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4"'>
                            <OfferPlanCardComponent
                                name="Up to 40Mbps"
                                monthly="₱999"
                                annually="₱79"
                                href="http://127.0.0.1:8000/application"
                            />
                            <OfferPlanCardComponent
                                name="Up to 120Mbps"
                                monthly="₱1499"
                                annually="₱79"
                                href="http://127.0.0.1:8000/application"
                                popular="yes"
                            />
                            <OfferPlanCardComponent
                                name="Up to 3000Mbps"
                                monthly="₱2499"
                                annually="₱79"
                                href="http://127.0.0.1:8000/application"
                            />
                        </div>
                        <div className='className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 gap-x-3 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4"'>
                            <OfferPlanCardComponent
                                name="Up to 40Mbps"
                                monthly="₱999"
                                annually="₱79"
                                href="http://127.0.0.1:8000/application"
                            />
                            <OfferPlanCardComponent
                                name="Up to 120Mbps"
                                monthly="₱1499"
                                annually="₱79"
                                href="http://127.0.0.1:8000/application"
                            />
                            <OfferPlanCardComponent
                                name="Up to 3000Mbps"
                                monthly="₱2499"
                                annually="₱79"
                                href="http://127.0.0.1:8000/application"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
