import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import "./styles/StartEndDate.css";

const StartEndDate = ({taskName, handleChangeDates, initialStartDate, initialEndDate}) => {
    const [startDate, setStartDate] = useState(initialStartDate);
    const [endDate, setEndDate] = useState(initialEndDate);

    useEffect(()=>{
        handleChangeDates(taskName, startDate, endDate);
    }, [startDate, endDate])

    return (
        <div className="calendar-container">
            <div className="date-container">
                Start
                <DatePicker 
                    selected={startDate} 
                    dateFormat="MMMM d, yyyy"
                    onChange={(date) => setStartDate(date)}
                    maxDate={endDate}
                    wrapperClassName="datePicker"
                />            
            </div>
            <div className="date-container">
                End
                <DatePicker 
                    selected={endDate} 
                    dateFormat="MMMM d, yyyy"
                    onChange={(date) => setEndDate(date)}
                    minDate={startDate}
                    wrapperClassName="datePicker"
                />            
            </div>
        </div>
    );
}
 
export default StartEndDate;