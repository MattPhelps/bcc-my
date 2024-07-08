
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import siteConfig from "../../../siteConfig";

const UploadDropzone = ({ onFileUpload }) => {

    const onDrop = useCallback(acceptedFiles => {
        // Pass the acceptedFiles array to the parent component's handler
        onFileUpload(acceptedFiles);
    }, [onFileUpload]); // Ensure onFileUpload is included in the dependency array


    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className="border-dashed border-2 border-gray p-10">
            <input {...getInputProps()} />
            {
                isDragActive ?
                <p>Drop your image here ...</p> :
                <p>Drop an image here...</p>
            }
            <br></br>
            <button
            type="button"
            style={{ "--main-color": siteConfig.buttonColor } as any}
            className="button-styling bg-blue-500 inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80">
                Upload Image
            </button>
        </div>
    );
};

export default UploadDropzone;
