import React, { useState, useEffect, useContext } from 'react';
import { BsFileEarmarkArrowDownFill } from 'react-icons/bs';
import { MdSave, MdDeleteSweep, MdWbSunny, MdNightlightRound } from 'react-icons/md';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { TasksContext } from '../../../App';

import { Divisor, ManageContainer, ManageBlock, ManageButton, SwitchIcon } from "./styles";

const ManageTasks = () => {
    const tasksData = useContext(TasksContext);
    const theme = useContext(ThemeContext);

    const [uploadedFile, setUploadedFile] = useState(null);

    useEffect(() => {
        if (uploadedFile !== null) {
            tasksData.ImportTasks(JSON.parse(uploadedFile));
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
        if (tasksData.tasks.length !== 0) {
            const fileData = JSON.stringify(tasksData.tasks);
            const url= URL.createObjectURL(new Blob([fileData], {type: "text/plain"}));
            const link = document.createElement('a');
            link.download = 'sword-tasks.json';
            link.href = url;
            link.click();
        }
    }

    return (
        <TasksContext.Provider value={tasksData}>
        <ThemeContext.Provider value={theme}>
            <Divisor/>
            <ManageContainer>
                <ManageBlock>
                    <Switch
                        onChange={tasksData.ToggleTheme}
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
                        offColor={theme.colors.primary}
                        onColor={theme.colors.element}
                        offHandleColor={theme.colors.element}
                        onHandleColor={theme.colors.primary}
                        width={window.matchMedia("(max-device-width: 500px)").matches ? 41 : 55}
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
                    <ManageButton className='saveTasks' onClick={FileExport} tasksEmpty={tasksData.tasks.length === 0}>
                        <MdSave/>
                    </ManageButton>
                    <ManageButton className='deleteAll' onClick={tasksData.DeleteAll} tasksEmpty={tasksData.tasks.length === 0}>
                        <MdDeleteSweep/>
                    </ManageButton>
                </ManageBlock>
            </ManageContainer>
        </ThemeContext.Provider>
        </TasksContext.Provider>
    );
}
 
export default ManageTasks;