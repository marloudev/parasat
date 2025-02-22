import store from '@/app/pages/store/store';
import { get_application_thunk, update_application_thunk } from '@/app/redux/application-thunk';
import { LoadingOutlined } from '@ant-design/icons'
import { CheckIcon } from '@heroicons/react/16/solid'
import { message } from 'antd';
import React, { useState } from 'react'

export default function ApprovedApplicationSection({ data }) {
    const [loading, setLoading] = useState(false);

    async function approvedApplication() {
        setLoading(true);
        try {
            await store.dispatch(
                update_application_thunk({
                    ...data,
                    status: 'Approved',
                })
            );
            await store.dispatch(get_application_thunk());
            message.success("Application has been approved.");
        } catch (error) {
            message.error("Failed to approved the application. Please try again.");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <button
                type="button"
                className={`flex bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg ${loading ? "cursor-not-allowed opacity-75" : ""
                    }`}
                onClick={approvedApplication}
                disabled={loading}
            >
                {loading ? (
                    <LoadingOutlined spin />
                ) : (
                    <CheckIcon className="h-6" />
                )}
                &nbsp;{loading ? " SUBMITTING..." : " APPROVED"}
            </button>
        </div>
    )
}
