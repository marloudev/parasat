import { LoadingOutlined } from '@ant-design/icons'
import { CheckIcon, XMarkIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'

export default function DeclineApplicationSection({ data }) {
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <button
                type="submit"
                className={` flex bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ${loading ? "cursor-not-allowed opacity-75" : ""
                    }`}
                // onClick={submitApplicant}
                disabled={loading}
            >
                {loading ? (
                    <LoadingOutlined spin />
                ) : (
                    <XMarkIcon className="h-6" />
                )}
                {loading ? " SUBMITTING..." : "DECLINE"}
            </button>
        </div>
    )
}
