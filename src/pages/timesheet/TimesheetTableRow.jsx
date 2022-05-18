import React from 'react';
import './TimesheetTableRow.css';
import { DeleteButton } from '../../components/deleteButton/DeleteButton.jsx';

export function TimesheetTableRow(props) {
    return (
        <>
            <tr className='tableRow'>
                <td>{props.dayData.un}</td>
                <td>{props.dayData.phase}</td>
                <td>{props.dayData.asset}</td>
                <td>{props.dayData.discipline}</td>
                <td>{props.dayData.activity}</td>
                <td>{props.dayData.start}</td>
                <td>{props.dayData.finish}</td>
                <td>
                    {Date.parse(props.dayData.finish) -
                        Date.parse(props.dayData.start)}
                </td>
                <td>{props.dayData.comment}</td>
                <td>
                    <DeleteButton></DeleteButton>
                </td>
            </tr>
        </>
    );
}
