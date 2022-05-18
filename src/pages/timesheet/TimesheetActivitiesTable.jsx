import React from 'react';
import mock_timesheetData from '../../mock/mock_timesheetData.js';

export function TimesheetActivitiesTable(props) {
    const dayData =
        timesheetMockData['gabriel.wiedemann_2022-05']['2022-06-05'];

    return (
        <div className='timesheet-activitiesTable'>
            <div className='timesheet-activitiesTable-header'>
                {timesheetMockData.map((item) => {
                    return <div></div>;
                })}
            </div>
            <div className='timesheet-activitiesTable-content'>
                {
                    <div className='timesheet-activitiesTable-content-row'>
                        {timesheetMockData.map((item) => {
                            return (
                                <>
                                    <input></input>
                                </>
                            );
                        })}
                    </div>
                }
            </div>
        </div>
    );
}
