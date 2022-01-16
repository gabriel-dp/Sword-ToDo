import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerMobileFix.css';
import { StartEndContainer, DateContainer, DateSelector, StyledFaCalendar } from './styles';

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
        <StartEndContainer>
            <DateContainer>
                <p>Start</p>
                <DateSelector>
                    <DatePicker 
                        selected={(initialStartDate === '') ? undefined : new Date(startDate)} 
                        maxDate={(initialEndDate === '') ? undefined : new Date(endDate)}
                        dateFormat="MMMM d, yyyy"
                        onChange={(date) => {setStartDate(date); handleDatePickerOpen(true, false)}}
                        placeholderText='Select a date'
                        open={datepickerOpen[0]}
                        onClickOutside={() => handleDatePickerOpen(true, false)}
                    />    
                    <StyledFaCalendar className='calendar-icon' onClick={() => handleDatePickerOpen(true, false)}/>     
                </DateSelector>   
            </DateContainer>
            <DateContainer>
                <p>End</p>
                <DateSelector>
                    <DatePicker 
                        selected={(initialEndDate === '') ? undefined : new Date(endDate)} 
                        minDate={(initialStartDate === '') ? undefined : new Date(startDate)}
                        dateFormat="MMMM d, yyyy"
                        onChange={(date) => {setEndDate(date); handleDatePickerOpen(false, true)}}
                        placeholderText='Select a date'
                        open={datepickerOpen[1]}
                        onClickOutside={() => handleDatePickerOpen(false, true)}
                    />          
                    <StyledFaCalendar className='calendar-icon' onClick={() => handleDatePickerOpen(false, true)}/>
                </DateSelector>  
            </DateContainer>
        </StartEndContainer>
    );
}
 
export default StartEndDate;