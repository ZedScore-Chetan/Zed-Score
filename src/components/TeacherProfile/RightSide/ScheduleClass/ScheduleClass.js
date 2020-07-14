import React, { Component } from 'react';

import classes from './ScheduleClass.module.css';

import backgroundImage from '../../Assets/background.png';
import Select from 'react-select';
import DateTimePicker from 'react-datetime-picker';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

class ScheduleClass extends Component {
    state = {
        date: new Date(),
        selectedOption: null,
    };

    onChange = date => this.setState({ date });

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    render() {
        const { selectedOption } = this.state;
        return (
            <div  className={classes.wrapper} >
                <div className={classes.gridContainer}>
                    <div className={classes.courseSelectorHeading}>Select Course</div>
                    <div className={classes.dateTimePickerHeading}>Select Date and Time</div>
                    <div className={classes.linkHeading}>Enter Class Link</div>
                    <div className={classes.courseSelector}>
                        <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                        />
                    </div>
                    <div className={classes.dateTimePicker}>
                        <DateTimePicker
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </div>
                    <div className={classes.linkInput}>
                        <input type="text" placeholder="Enter Link here" />
                    </div>
                    <div className={classes.submitButtonContainer}>
                        <div className={classes.scheduleButton}>Schedule Now</div>
                    </div>
                </div>
            </div >
        );
    }
}

export default ScheduleClass;

