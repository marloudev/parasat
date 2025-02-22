import { Image } from 'antd';
import React from 'react';

export default function ElectricBillSection({ data }) {

    return (
        <div>
            <h1 className="text-xl font-semibold mb-3 text-gray-900 mt-7">
                Electric Bill
            </h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {data?.file_upload?.filter(image => image.type === 'electric_bills').length > 0 ? (
                    data?.file_upload
                        .filter(image => image.type === 'electric_bills')
                        .map((image, index) => (
                            <div key={index} className="cursor-pointer">
                                <Image
                                    alt="Selected Image"
                                    src={image.image}
                                    style={{ width: '100%' }}
                                />
                            </div>
                        ))) : (
                    <div className="col-span-3 text-center text-gray-500">
                        No image available
                    </div>
                )}
            </div>
        </div>
    );
}
