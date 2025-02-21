import { LoadingOutlined } from '@ant-design/icons'
import { CheckIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'

export default function ApprovedApplicationSection({ data }) {
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <button
                type="submit"
                className={`flex bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg ${loading ? "cursor-not-allowed opacity-75" : ""
                    }`}
                // onClick={submitApplicant}
                disabled={loading}
            >
                {loading ? (
                    <LoadingOutlined spin />
                ) : (
                    <CheckIcon className="h-6" />
                )}
                {loading ? " SUBMITTING..." : " APPROVED"}
            </button>
        </div>
    )
}
