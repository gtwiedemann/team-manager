import React from 'react';
import './Timesheet.css';
import { Input } from '../../components/index';
import { TimesheetDaysList } from './TimesheetDaysList.jsx';

export function Timesheet() {
    return (
        <div className='timesheet'>
            <h2>Timesheet Register</h2>
            <div className='timesheet-addForm'>
                <Input
                    labelText='User'
                    inputType='Text'
                    styles={{ width: '16rem' }}
                ></Input>
                <Input
                    labelText='Un'
                    inputType='Text'
                    styles={{ width: '5rem' }}
                ></Input>
                <Input labelText='Phase' inputType='Text'></Input>
                <Input labelText='Asset' inputType='Text'></Input>
                <Input
                    labelText='Discipline'
                    inputType='Text'
                    styles={{ width: '20rem' }}
                ></Input>
                <Input
                    labelText='Activity'
                    inputType='Text'
                    styles={{ width: '30rem' }}
                ></Input>
                <Input
                    labelText='Comments'
                    inputType='Text'
                    styles={{ width: '50rem' }}
                ></Input>
            </div>

            <table className='timesheet-activitiesTable'>
                <thead>
                    <tr>
                        <th>Un</th>
                        <th>Phase</th>
                        <th>Asset</th>
                        <th>Discipline</th>
                        <th>Activity</th>
                        <th>Comments</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>G70</td>
                        <td>Executivo</td>
                        <td>km 136</td>
                        <td>Geotecnia</td>
                        <td>Relatório</td>
                        <td>Relatório geral</td>
                    </tr>
                    <tr>
                        <td>932</td>
                        <td></td>
                        <td></td>
                        <td>Geotecnia</td>
                        <td>Relatório</td>
                        <td>Relatório geral</td>
                    </tr>
                    <tr>
                        <td>g81</td>
                        <td>Básico</td>
                        <td>km 001</td>
                        <td>Geotecnia</td>
                        <td>Relatório</td>
                        <td>Relatório geral</td>
                    </tr>

                    <tr>
                        <td>G70</td>
                        <td>Executivo</td>
                        <td>km 20</td>
                        <td>Geotecnia</td>
                        <td>Relatório</td>
                        <td>Relatório geral</td>
                    </tr>
                    <tr>
                        <td>G70</td>
                        <td>Executivo</td>
                        <td>km 40</td>
                        <td>Geotecnia</td>
                        <td>Relatório</td>
                        <td>Relatório geral</td>
                    </tr>
                </tbody>
            </table>

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
