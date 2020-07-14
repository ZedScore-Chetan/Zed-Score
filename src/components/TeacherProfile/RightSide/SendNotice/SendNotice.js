import React, { Component } from 'react';

import classes from './SendNotice.module.css';

import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

class SendNotice extends Component {
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
                    <div className={classes.linkHeading}>Enter Message</div>
                    <div className={classes.courseSelector}>
                        <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                        />
                    </div>
                    <div className={classes.linkInput}>
                        <textarea placeholder="Enter Message here" />
                    </div>
                    <div className={classes.submitButtonContainer}>
                        <div className={classes.scheduleButton}>Send Now</div>
                    </div>
                </div>
            </div >
        );
    }
}

export default SendNotice;

