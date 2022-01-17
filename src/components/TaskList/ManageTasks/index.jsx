import React, { useState, useEffect } from 'react';
import { BsFileEarmarkArrowDownFill } from 'react-icons/bs';
import { MdSave, MdDeleteSweep, MdWbSunny, MdNightlightRound } from 'react-icons/md';
import Switch from 'react-switch';

import { Divisor, ManageContainer, ManageBlock, ManageButton, SwitchIcon } from "./styles";

const ManageTasks = ({tasks, handleImportTasks, handleDeleteAll, toggleTheme, theme}) => {

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
                <ManageBlock>
                    <Switch
                        onChange={toggleTheme}
                        checked={theme.title === 'dark'}
                        checkedHandleIcon={
                            <SwitchIcon iconColor='gray'>
                                <MdNightlightRound/>
                            </SwitchIcon>
                        }
                        uncheckedHandleIcon={
                            <SwitchIcon iconColor='primary'>
                                <MdWbSunny/>
                            </SwitchIcon>
                        }
                        checkedIcon={false}
                        uncheckedIcon={false}
                        offColor='#07345e'
                        onColor='#444'
                        offHandleColor="#fff"
                        onHandleColor="#7feeff"
                        width={window.matchMedia("(max-device-width: 500px)").matches ? 0 : 55}
                        height={window.matchMedia("(max-device-width: 500px)").matches ? 40 : 20}
                        handleDiameter={window.matchMedia("(max-device-width: 500px)").matches ? 54 : 27}
                        boxShadow="1px 1px 5px rgba(0, 0, 0, 0.6)"
                    />
                </ManageBlock>
                <ManageBlock>
                    <ManageButton className='importFile'>
                        <label htmlFor='file-upload'>
                            <input id='file-upload' type='file' onChange={onFileChange}/>
                            <BsFileEarmarkArrowDownFill/>
                        </label>
                    </ManageButton>
                    <ManageButton className='saveTasks' onClick={FileExport} tasksEmpty={tasks.length === 0}>
                        <MdSave/>
                    </ManageButton>
                    <ManageButton className='deleteAll' onClick={handleDeleteAll} tasksEmpty={tasks.length === 0}>
                        <MdDeleteSweep/>
                    </ManageButton>
                </ManageBlock>
            </ManageContainer>
        </>
    );
}
 
export default ManageTasks;