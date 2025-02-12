import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OfferPlanCardComponent from '../components/offer-plan-card-component';
import { Modal } from 'antd';

export default function PlanListSection() {
    const { internet_plans } = useSelector((state) => state.internet_plans);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);  // Declare selectedPlan state

    const openModal = (plan) => {
        setSelectedPlan(plan);  // Set the selected plan when opening the modal
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPlan(null);  // Reset selected plan when closing the modal
    };

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
                            {
                                internet_plans &&
                                internet_plans.map((plan, index) => (
                                    <OfferPlanCardComponent
                                        key={index}
                                        name={plan.name}
                                        price={plan.price}
                                        speed={plan.speed}
                                        popular={plan.popular}
                                        href={`/application/${plan.id}`}
                                        onClick={() => openModal(plan)}  // Open the modal with the selected plan
                                    />
                                ))
                            }

                            <Modal open={isModalOpen} onCancel={closeModal} width={700} footer={null}>
                                <h2 className="text-xl font-semibold mb-4">Internet Plan Details</h2>
                                {selectedPlan && (
                                    <>
                                        <div className="mb-4">
                                            <label htmlFor="planName" className="block text-sm font-medium text-gray-700">Plan Name</label>
                                            <input
                                                value={selectedPlan.name}
                                                type="text"
                                                name="name"
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                readOnly // Mark as read-only as it's for displaying
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="planSpeed" className="block text-sm font-medium text-gray-700">Plan Speed</label>
                                            <input
                                                value={selectedPlan.speed}
                                                type="text"
                                                name="speed"
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                readOnly
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="planPrice" className="block text-sm font-medium text-gray-700">Plan Price</label>
                                            <input
                                                value={selectedPlan.price}
                                                type="text"
                                                name="price"
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                readOnly
                                            />
                                        </div>
                                    </>
                                )}
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
