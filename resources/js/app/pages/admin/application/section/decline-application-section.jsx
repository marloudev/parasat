import { LoadingOutlined } from '@ant-design/icons';
import { XMarkIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';
import { message } from 'antd'; // To show success or error messages
import store from '@/app/pages/store/store';
import { get_application_thunk, update_application_thunk } from '@/app/redux/application-thunk';

export default function DeclineApplicationSection({ data }) {
    const [loading, setLoading] = useState(false);

    async function declineApplication() {
        setLoading(true);
        try {
            // Dispatch an action to update the application's status to 'Declined'
            await store.dispatch(
                update_application_thunk({
                    ...data,
                    status: 'Declined',
                })
            );
            // Fetch the updated list of applications
            await store.dispatch(get_application_thunk());
            message.success("Application has been declined.");
        } catch (error) {
            message.error("Failed to decline the application. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <button
                type="button"
                onClick={declineApplication}
                className={`flex bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ${loading ? "cursor-not-allowed opacity-75" : ""}`}
                disabled={loading}
            >
                {loading ? (
                    <LoadingOutlined spin />
                ) : (
                    <XMarkIcon className="h-6" />
                )}
                {loading ? "DECLINING..." : "DECLINE"}
            </button>
        </div>
    );
}
