import React from 'react'
import { useSelector } from 'react-redux';
import OfferPlanCardComponent from '../components/offer-plan-card-component';

export default function PlanListSection() {
    const { internet_plans } = useSelector((state) => state.internet_plans);

    console.log('internetplan', internet_plans);

    return (
        <div>
            <div className="mb-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col gap-3">
                        <p className='mt-4 text-balance text-5xl font-semibold'>
                            Internet Plans Offer:
                        </p>
                        {/* Mapping over internet_plans */}
                        <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-5 gap-x-4 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
                            {internet_plans && internet_plans.map((plan, index) => (
                                <OfferPlanCardComponent
                                    key={index} 
                                    name={plan.name}
                                    price={plan.price}
                                    speed={plan.speed}
                                    popular={plan.popular}
                                    href={`http://127.0.0.1:8000/application/${plan.id}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
