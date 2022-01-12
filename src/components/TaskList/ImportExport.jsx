import React, { useState, useEffect } from 'react';
import { FaFileDownload, FaFileUpload } from 'react-icons/fa'

import "./styles/ImportExport.css"

const ImportExport = ({tasks, handleImportTasks}) => {

    const [uploadedFile, setUploadedFile] = useState(null);

    useEffect(() => {
        if (uploadedFile != null) {
            handleImportTasks(JSON.parse(uploadedFile));
        }
    }, [uploadedFile])

    //uploads a json file with
    const onFileChange = event => {
        const rawFile = event.target.files[0];

        const fileReader = new FileReader();
        fileReader.readAsText(rawFile, "UTF-8");
        fileReader.onload = e => {
            setUploadedFile(e.target.result);
        }
    }

    const FileExport = () => {
        const fileData = JSON.stringify(tasks);
        const url= URL.createObjectURL(new Blob([fileData], {type: "text/plain"}));
        const link = document.createElement('a');
        link.download = 'filename.json';
        link.href = url;
        link.click();
    }

    return (
        <div className='manage-container'>
            <label htmlFor='file-upload' className='manage-button'>
                <input id='file-upload' type='file' onChange={onFileChange}/>
                <FaFileDownload/>
            </label>
            <button className='manage-button' onClick={FileExport}>
                <FaFileUpload/>
            </button>
        </div>
    );
}
 
export default ImportExport;