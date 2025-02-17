import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
const FileUploadSection = () => (
    <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
            <h1>Electric Bill</h1>
            <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture"
                multiple={true}

            >
                <Button type="primary" icon={<UploadOutlined />}>
                    Upload
                </Button>
            </Upload>
        </div>
        <div className='flex flex-col gap-1'>
            <h1>Valid ID (<i>front&back</i>)</h1>
            <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture"
                multiple={true}
            >
                <Button type="primary" icon={<UploadOutlined />}>
                    Upload
                </Button>
            </Upload>
        </div>
        <div className='flex flex-col gap-1'>
            <h1>Location (<i>Google Maps Screenshot</i>)</h1>
            <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture"
                multiple={true}
            >
                <Button type="primary" icon={<UploadOutlined />}>
                    Upload
                </Button>
            </Upload>
        </div>
    </div>

);
export default FileUploadSection;