import React from 'react';
import { useEffect, useState } from 'react';
import './Timesheet.css';
import { Input } from '../../components/index';
import { TimesheetDaysList } from './TimesheetDaysList.jsx';
import { DeleteButton } from '../../components/deleteButton/DeleteButton.jsx';
import { TimesheetTableRow } from './TimesheetTableRow.jsx';

import { ComboBox } from '../../components/combobox/ComboBox.jsx';

import {
    mock_timesheetData,
    mock_uns,
    mock_phase,
    mock_activities,
    mock_users,
} from '../../mock';

export function Timesheet() {
    const [dayData, setDayData] = useState(
        mock_timesheetData['gabriel.wiedemann_2022-05']['2022-06-05']
    );

    console.log(Object.keys(mock_activities));

    const calculateTotalHours = () => {
        return dayData.reduce((total, item) => {
            return (total += 5);
        }, 0);
    };

    return (
        <div className='timesheet'>
            <h2>Timesheet Register</h2>
            <div className='timesheet-addForm'>
                <Input
                    labelText='User'
                    inputType='Text'
                    itemsList={mock_users}
                    styles={{ width: '16rem' }}
                ></Input>
                <Input
                    labelText='Un'
                    inputType='Text'
                    itemsList={mock_uns}
                    styles={{ width: '5rem' }}
                ></Input>
                <Input
                    labelText='Phase'
                    inputType='Text'
                    itemsList={mock_phase}
                ></Input>
                <Input labelText='Asset' inputType='Text'></Input>
                <Input
                    labelText='Discipline'
                    inputType='Text'
                    itemsList={Object.keys(mock_activities)}
                    styles={{ width: '20rem' }}
                ></Input>
                <Input
                    labelText='Activity'
                    inputType='Text'
                    itemsList={mock_activities['Drenagem']}
                    styles={{ width: '30rem' }}
                ></Input>
                <Input
                    labelText='Comments'
                    inputType='Text'
                    styles={{ width: '50rem' }}
                ></Input>
                <Input
                    labelText='Start'
                    inputType='Text'
                    styles={{ width: '6rem' }}
                ></Input>
                <Input
                    labelText='Finish'
                    inputType='Text'
                    styles={{ width: '6rem' }}
                ></Input>

                {/* <div className='timesheet-activityButtons'>
                    <button>Add</button>
                </div> */}
            </div>
            <div className='timesheet-registers'>
                <div>
                    <label>Total hours: {calculateTotalHours()}</label>
                </div>
                <table className='timesheet-activitiesTable'>
                    <thead>
                        <tr>
                            <th>Un</th>
                            <th>Phase</th>
                            <th>Asset</th>
                            <th>Discipline</th>
                            <th>Activity</th>
                            <th>Start</th>
                            <th>Finish</th>
                            <th>Hours</th>
                            <th>Comments</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {mock_timesheetData['gabriel.wiedemann_2022-05'][
                            '2022-06-05'
                        ].map((item, index) => {
                            return (
                                <TimesheetTableRow
                                    key={index}
                                    dayData={item}
                                ></TimesheetTableRow>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div>
                {/* <label>Total hours:{calculateTotalHours()}</label> */}
            </div>
            <div className='timesheet-history'>
                {[...Array(31).keys()].map((item) => {
                    return (
                        <div className='timesheet-history-item' key={item}>
                            <label>{item + 1}</label>
                            <button>{'00:00'}</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
