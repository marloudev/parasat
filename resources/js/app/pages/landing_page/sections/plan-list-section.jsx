import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { router } from '@inertiajs/react'
import React from 'react'
import OfferPlanCardComponent from '../components/offer-plan-card-component'

export default function PlanListSection() {

    return (
        <div>
            <div className="bg-white pb-5">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mt-4 flex flex-col gap-2">
                        <p className='text-balance text-5xl font-semibold tracking-tight text-blue-500 sm:text-5xl mb-4 '>
                            PLANS OFFER:
                        </p>
                        <div className='className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4"'>
                            <OfferPlanCardComponent
                                name="Up to 40Mbps"
                                monthly="₱999"
                                annually="₱79"
                                href="http://127.0.0.1:8000/logins"
                            />
                            <OfferPlanCardComponent
                                name="Up to 120Mbps"
                                monthly="₱1499"
                                annually="₱79"
                                href="http://127.0.0.1:8000/logins"
                                popular="yes"
                            />
                            <OfferPlanCardComponent
                                name="Up to 3000Mbps"
                                monthly="₱2499"
                                annually="₱79"
                                href="http://127.0.0.1:8000/logins"
                            />
                        </div>
                        <div className='className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4"'>
                            <OfferPlanCardComponent
                                name="Up to 40Mbps"
                                monthly="₱999"
                                annually="₱79"
                                href="http://127.0.0.1:8000/logins"
                            />
                            <OfferPlanCardComponent
                                name="Up to 120Mbps"
                                monthly="₱1499"
                                annually="₱79"
                                href="http://127.0.0.1:8000/logins"
                            />
                            <OfferPlanCardComponent
                                name="Up to 3000Mbps"
                                monthly="₱2499"
                                annually="₱79"
                                href="http://127.0.0.1:8000/logins"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
