import React from 'react';
import './TimesheetDaysList.css';

export function TimesheetDaysList() {
    let daysInMonth = 31;
    let daysList = [...Array(daysInMonth).keys()];

    return (
        <>
            {[...Array(daysInMonth).keys()].map((item) => {
                return (
                    <div className='timesheetDaysList-historyItem' key={item}>
                        <label>{item + 1}</label>
                        <button>{'00:00'}</button>
                    </div>
                );
            })}
        </>
    );
}
