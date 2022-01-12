import React, { useState, useEffect } from 'react';
import { BsFileEarmarkArrowDownFill } from 'react-icons/bs';
import { MdSave, MdDeleteSweep } from 'react-icons/md';

import "./styles/ManageTasks.css"

const ManageTasks = ({tasks, handleImportTasks, handleDeleteAll}) => {

    const [uploadedFile, setUploadedFile] = useState(null);

    useEffect(() => {
        if (uploadedFile !== null) {
            handleImportTasks(JSON.parse(uploadedFile));
        }
    }, [uploadedFile, handleImportTasks])

    //uploads a json file with
    const onFileChange = event => {
        const rawFile = event.target.files[0];

        if (rawFile.type === 'application/json') {
            const fileReader = new FileReader();
            fileReader.readAsText(rawFile, "UTF-8");
            fileReader.onload = e => {
                setUploadedFile(e.target.result);
            }
        }
    }

    const FileExport = () => {
        if (tasks.length !== 0) {
            const fileData = JSON.stringify(tasks);
            const url= URL.createObjectURL(new Blob([fileData], {type: "text/plain"}));
            const link = document.createElement('a');
            link.download = 'sword-tasks.json';
            link.href = url;
            link.click();
        }
    }

    return (
        <>
            <hr className='divisor'/>
            <div className='manage-container'>
                <label htmlFor='file-upload' className='manage-button' id='import-file'>
                    <input id='file-upload' type='file' onChange={onFileChange}/>
                    <BsFileEarmarkArrowDownFill/>
                </label>
                <button className='manage-button' id='save-tasks' onClick={FileExport} style={(tasks.length === 0) ? {color:'#444', cursor:'auto'} : {color:'aquamarine'}}>
                    <MdSave/>
                </button>
                <button className='manage-button' id='delete-all' onClick={handleDeleteAll} style={(tasks.length === 0) ? {color:'#444', cursor:'auto'} : {color:'aquamarine'}}>
                    <MdDeleteSweep/>
                </button>
            </div>
        </>
    );
}
 
export default ManageTasks;