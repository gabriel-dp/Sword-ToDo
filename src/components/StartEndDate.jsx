import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendar } from 'react-icons/fa';

import "react-datepicker/dist/react-datepicker.css";
import "./styles/StartEndDate.css";

const StartEndDate = ({taskName, handleChangeDates, initialStartDate, initialEndDate}) => {
    const [startDate, setStartDate] = useState(initialStartDate);
    const [endDate, setEndDate] = useState(initialEndDate);
    const [isOpen, setIsOpen] = useState([false, false]);

    useEffect(()=>{
        handleChangeDates(taskName, startDate, endDate);
    }, [startDate, endDate])

    useEffect(()=>{
        console.log(isOpen);
    }, [isOpen])

    const handleCalendar = (first, second) => {
        setIsOpen([(first ? !isOpen[0] : isOpen[0]), (second ? !isOpen[1] : isOpen[1])]);
    }

    return (
        <div className="calendar-container">
            <div className="date-container">
                <p>Start</p>
                <div className='date-selector'>
                    <DatePicker 
                        selected={(initialStartDate == '') ? undefined : new Date(startDate)} 
                        maxDate={(initialEndDate == '') ? undefined : new Date(endDate)}
                        dateFormat="MMMM d, yyyy"
                        onChange={(date) => {setStartDate(date); handleCalendar(true, false)}}
                        placeholderText='Select a start date'
                        open={isOpen[0]}
                        onClickOutside={() => handleCalendar(true, false)}
                    />    
                    <FaCalendar className='calendar-icon' onClick={() => handleCalendar(true, false)}/>     
                </div>   
            </div>
            <div className="date-container">
                <p>End</p>
                <div className='date-selector'>
                    <DatePicker 
                        selected={(initialEndDate == '') ? undefined : new Date(endDate)} 
                        minDate={(initialStartDate == '') ? undefined : new Date(startDate)}
                        dateFormat="MMMM d, yyyy"
                        onChange={(date) => {setEndDate(date); handleCalendar(false, true)}}
                        placeholderText='Select a end date'
                        open={isOpen[1]}
                        onClickOutside={() => handleCalendar(false, true)}
                    />          
                    <FaCalendar className='calendar-icon' onClick={() => handleCalendar(false, true)}/>
                </div>  
            </div>
        </div>
    );
}
 
export default StartEndDate;