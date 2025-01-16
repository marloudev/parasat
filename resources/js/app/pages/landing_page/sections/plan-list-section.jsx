import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { router } from '@inertiajs/react'
import React from 'react'

export default function PlanListSection() {

    const tiers = [
        {
            name: 'Up to 40Mbps',
            id: 'tier-basic',
            href: '#',
            price: { monthly: '₱999', annually: '₱15' },
            description: 'Everything necessary to get started.',
            features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
        },
        {
            name: 'Up to 120Mbps',
            id: 'tier-essential',
            href: '#',
            price: { monthly: '₱1999', annually: '₱39' },
            description: 'Everything in Basic, plus essential tools for growing your business.',
            features: [
                '25 products',
                'Up to 10,000 subscribers',
                'Advanced analytics',
                '24-hour support response time',
                'Marketing automations',
            ],
        },
        {
            name: 'Up to 300Mbps',
            id: 'tier-growth',
            href: '#',
            price: { monthly: '₱2499', annually: '₱79' },
            description: 'Everything in Essential, plus collaboration tools and deeper insights.',
            features: [
                'Unlimited products',
                'Unlimited subscribers',
                'Advanced analytics',
                '1-hour, dedicated support response time',
                'Marketing automations',
                'Custom reporting tools',
            ],
        },
    ]
    return (
        <div>
            <div className="bg-white pb-5">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mt-4 fow-root">
                        <p className='text-balance text-5xl font-semibold tracking-tight text-blue-500 sm:text-5xl mb-4 '>
                            PLANS OFFER:
                        </p>
                        <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
                            {tiers.map((tier) => (
                                <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14 shadow-lg">
                                    <div className='flex flex-1 items-center justify-between'>
                                        <h3 id={tier.id} className="text-base/7 font-semibold text-gray-900">
                                            {tier.name}
                                        </h3>
                                        <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600">
                                            Most popular
                                        </p>
                                    </div>
                                    <p className="mt-6 flex items-baseline gap-x-1">
                                        <span className="text-5xl font-semibold tracking-tight text-gray-900">{tier.price.monthly}</span>
                                        <span className="text-sm/6 font-semibold text-gray-600">/month</span>
                                    </p>
                                    <p className="mt-3 text-sm/6 text-gray-500">{tier.price.annually} per month if paid annually</p>
                                    <a
                                        href={tier.href}
                                        aria-describedby={tier.id}
                                        className="mt-7 mb-3 block rounded-md bg-blue-600 px-3 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                    >
                                        Purchase Plan
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
