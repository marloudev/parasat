import { FileImageOutlined, FilePdfOutlined } from '@ant-design/icons';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

export default function UploadElectricSection({ files, setFiles }) {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const displayUploadedFiles = (fileList) => {
        const newFiles = Array.from(fileList).map((file) => {
            const fileUrl = URL.createObjectURL(file);
            return { file, fileUrl };
        });
        setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
        setFiles(fileList); // Ensuring that the parent receives the files
    };

    const handleFileInputChange = (e) => {
        const files = e.target.files; // Get all selected files
        displayUploadedFiles(files);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        displayUploadedFiles(e.dataTransfer.files);
    };

    const handleRemoveFile = (e, fileToRemove) => {
        e.preventDefault(); // Prevent form submission or other default behaviors
        const updatedFiles = uploadedFiles.filter((fileData) => fileData.file !== fileToRemove);
        setUploadedFiles(updatedFiles); // Update the local state

        // Update the parent state as well to reflect the removal of the file
        setFiles((prevFiles) => {
            const updatedParentFiles = Array.from(prevFiles).filter((file) => file !== fileToRemove);
            return updatedParentFiles;
        });
    };


    const renderFileIcon = (file) => {
        const fileType = file.type.split('/')[0];
        if (fileType === 'image') {
            return <FileImageOutlined className="text-2xl text-gray-500" />;
        } else if (file.type === 'application/pdf') {
            return <FilePdfOutlined className="text-2xl text-gray-500" />;
        }
        return null;
    };

    return (
        <div>
            <h1 className="text-xl font-semibold mb-3 text-gray-900 mt-9">Upload Electric Bill</h1>
            <div className="w-full py-9 bg-gray-50 rounded-2xl border border-gray-300 gap-3 grid border-dashed" onDragOver={handleDragOver} onDrop={handleDrop}>
                <div className="grid gap-1">
                    <FileImageOutlined className="flex items-center justify-center text-4xl" />
                    <h2 className="text-center text-gray-400 text-xs leading-4">Image</h2>
                </div>
                <div className="grid gap-2">
                    <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">Drag and Drop your file here or</h4>
                    <div className="flex items-center justify-center">
                        <label>
                            <input type="file" hidden onChange={handleFileInputChange} multiple />
                            <div className="flex w-28 h-9 px-2 flex-col bg-indigo-600 rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">Choose File</div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {uploadedFiles.map((fileData, index) => (
                    <div key={index} className="flex items-center justify-between bg-neutral-800 rounded-md p-2">
                        <div className="flex items-center">
                            {renderFileIcon(fileData.file)}
                            <div className="text-white text-sm ml-2">{fileData.file.name}</div>
                        </div>
                        <button className="text-white" onClick={(e) => handleRemoveFile(e, fileData.file)}>
                            <XMarkIcon className="h-6" />
                        </button>
                    </div>
                ))}
            </div>
            <div>
                {uploadedFiles.length > 0 && (
                    <div id="display-area" className="mt-4 mb-4 flex gap-6">
                        {uploadedFiles.map((fileData, index) => (
                            <div key={index} className="flex flex-1">
                                {fileData.file.type === 'application/pdf' ? (
                                    <iframe
                                        src={fileData.fileUrl}
                                        width="300px"
                                        height="400px"
                                        className="rounded-md"
                                        title={`Uploaded PDF - ${fileData.file.name}`}
                                    />
                                ) : (
                                    <img
                                        src={fileData.fileUrl}
                                        alt={`Uploaded image - ${fileData.file.name}`}
                                        className="rounded-md max-w-full max-h-40"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
