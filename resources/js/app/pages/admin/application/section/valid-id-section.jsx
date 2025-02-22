import { Image } from 'antd';
import React from 'react';

export default function ValidIDSection({ data }) {
    console.log('adadadad', data.file_upload);

    return (
        <div>
            <h1 className="text-xl font-semibold mb-3 text-gray-900 mt-7">
                Valid ID
            </h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {data?.file_upload?.filter(image => image.type === 'valid_id').length > 0 ? (
                    data?.file_upload
                        .filter(image => image.type === 'valid_id')
                        .map((image, index) => (
                            <div key={index}>
                                <Image
                                    alt="Selected Image"
                                    src={image.image}
                                    style={{ width: '100%' }}
                                />
                            </div>
                        ))
                ) : (
                    <div className="col-span-3 text-center text-gray-500">
                        No image available
                    </div>
                )
                }
            </div>
        </div>
    );
}
