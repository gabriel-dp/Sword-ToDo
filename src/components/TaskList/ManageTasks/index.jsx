import React, { useState, useEffect } from 'react';
import { BsFileEarmarkArrowDownFill } from 'react-icons/bs';
import { MdSave, MdDeleteSweep } from 'react-icons/md';

import { Divisor, ManageContainer, ManageButton } from "./styles";

const ManageTasks = ({tasks, handleImportTasks, handleDeleteAll}) => {

    const [uploadedFile, setUploadedFile] = useState(null);

    useEffect(() => {
        if (uploadedFile !== null) {
            handleImportTasks(JSON.parse(uploadedFile));
        }
    }, [uploadedFile])
    
    //uploads a json file with
    const onFileChange = event => {
        const rawFile = event.target.files[0];
        
        if (rawFile.type === 'application/json') {
            const fileReader = new FileReader();
            fileReader.readAsText(rawFile, "UTF-8");
            fileReader.onload = e => {
                setUploadedFile(e.target.result);
                setUploadedFile(null);
            }
        }
        
        document.getElementById('file-upload').value = null;
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
            <Divisor/>
            <ManageContainer>
                <ManageButton className='importFile'>
                    <label htmlFor='file-upload'>
                        <input id='file-upload' type='file' onChange={onFileChange}/>
                        <BsFileEarmarkArrowDownFill/>
                    </label>
                </ManageButton>
                <ManageButton className='saveTasks' onClick={FileExport} style={(tasks.length === 0) ? {color:'#444', cursor:'auto'} : {color:'aquamarine'}}>
                    <MdSave/>
                </ManageButton>
                <ManageButton className='deleteAll' onClick={handleDeleteAll} style={(tasks.length === 0) ? {color:'#444', cursor:'auto'} : {color:'aquamarine'}}>
                    <MdDeleteSweep/>
                </ManageButton>
            </ManageContainer>
        </>
    );
}
 
export default ManageTasks;