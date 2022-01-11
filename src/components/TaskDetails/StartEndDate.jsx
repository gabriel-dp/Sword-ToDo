import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendar } from 'react-icons/fa';

import "react-datepicker/dist/react-datepicker.css";
import "./styles/StartEndDate.css";

const StartEndDate = ({taskName, handleChangeDates, initialStartDate = '', initialEndDate = ''}) => {
    //initializes states of dates and datepickers
    const [startDate, setStartDate] = useState(initialStartDate);
    const [endDate, setEndDate] = useState(initialEndDate);
    const [datepickerOpen, setDatepickerOpen] = useState([false, false]);

    //atualizes the dates storaged
    useEffect(()=>{
        handleChangeDates(taskName, startDate, endDate);
    }, [startDate, endDate])

    //opens and closes the datepickers
    const handleDatePickerOpen = (first, second) => {
        setDatepickerOpen([(first ? !datepickerOpen[0] : datepickerOpen[0]), (second ? !datepickerOpen[1] : datepickerOpen[1])]);
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
                        onChange={(date) => {setStartDate(date); handleDatePickerOpen(true, false)}}
                        placeholderText='Select a date'
                        open={datepickerOpen[0]}
                        onClickOutside={() => handleDatePickerOpen(true, false)}
                    />    
                    <FaCalendar className='calendar-icon' onClick={() => handleDatePickerOpen(true, false)}/>     
                </div>   
            </div>
            <div className="date-container">
                <p>End</p>
                <div className='date-selector'>
                    <DatePicker 
                        selected={(initialEndDate == '') ? undefined : new Date(endDate)} 
                        minDate={(initialStartDate == '') ? undefined : new Date(startDate)}
                        dateFormat="MMMM d, yyyy"
                        onChange={(date) => {setEndDate(date); handleDatePickerOpen(false, true)}}
                        placeholderText='Select a date'
                        open={datepickerOpen[1]}
                        onClickOutside={() => handleDatePickerOpen(false, true)}
                    />          
                    <FaCalendar className='calendar-icon' onClick={() => handleDatePickerOpen(false, true)}/>
                </div>  
            </div>
        </div>
    );
}
 
export default StartEndDate;