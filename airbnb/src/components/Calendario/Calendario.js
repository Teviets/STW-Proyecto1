import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import "./Calendario.scss";



export default class Calendario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: [new Date(), new Date()],
        };
        this.handleClearDates = this.handleClearDates.bind(this);
    }

    handleClearDates() {
        this.setState({ date: null });
    }

    onChange = (value) => {
        this.setState({ date: value });
    }

    render() {
        return (
        <div id='calendarContainer'>
            <Calendar
                className='calendar'
                onChange={this.onChange}
                value={this.state.date}
                selectRange
                goToRangeStartOnSelect = {true}
                showDoubleView = {true}
            />
            <button id="ButtonClearDate" onClick={this.handleClearDates}>Borrar fechas</button>
        </div>
        )
    }
}
