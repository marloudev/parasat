import React from 'react'
import { useSelector } from 'react-redux';
import PlanCardComponent from '../_components/card-component';

export default function PlansSection() {
    const { internet_plans } = useSelector((state) => state.internet_plans);

    console.log('internetplan', internet_plans);

    return (
        <div>
            <div className="">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col gap-3">
                        <p className='mt-4 text-balance text-5xl font-semibold'>
                            Internet Plans Offer:
                        </p>
                        {/* Mapping over internet_plans */}
                        <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 gap-x-3 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
                            {internet_plans && internet_plans.map((plan, index) => (
                                <PlanCardComponent
                                    key={index}
                                    name={plan.name}
                                    price={plan.price}
                                    speed={plan.speed}
                                    popular={plan.popular}
                                    href="http://127.0.0.1:8000/application"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
