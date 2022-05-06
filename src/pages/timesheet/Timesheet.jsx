import React from 'react';
import './Timesheet.css';
import { Input } from '../../components/index';

export function Timesheet() {
    return (
        <div>
            <h1>Timesheet</h1>
            <Input labelText='User' inputType='Text'></Input>
            <Input labelText='Un' inputType='Text'></Input>
            <Input labelText='Phase' inputType='Text'></Input>
            <Input labelText='Asset' inputType='Text'></Input>
            <Input labelText='Discipline' inputType='Text'></Input>
            <Input labelText='Comments' inputType='Text'></Input>
        </div>
    );
}
