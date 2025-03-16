import React from "react";
import { useSelector } from "react-redux";
import CancelRequestSection from "./cancel-request-section";

export default function RequestItemTableSection() {
    const { request_items } = useSelector((store) => store.request_items);
    console.log("request_items?.data", request_items?.data);
    return (
        <div className="-mx-4 mt-8 p-4 sm:-mx-0 bg-white rounded-md shadow-md">
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                        <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                        >
                            Request ID
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                        >
                            Item Name
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                        >
                            Quantity
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                        >
                            Status
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {request_items?.data?.map((res, i) => (
                        <tr key={i}>
                            <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                                {res?.user?.name}
                            </td>
                            <td className="hidden px-3 py-4 text-sm text-gray-900 lg:table-cell">
                                {res?.item?.name}
                            </td>
                            <td className="hidden px-3 py-4 text-sm text-gray-900 sm:table-cell">
                                {res?.amount}
                            </td>
                            <td className="capitalize py-4 text-sm font-medium sm:pr-0 ">
                                <div>{res?.status}</div>
                            </td>
                            <td className="flex py-4 text-sm font-medium sm:pr-0 ">

                                <CancelRequestSection data={res} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
