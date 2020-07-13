import React, { Component } from 'react';
import classes from './LibraryGeneralPage.module.css';

import Select from 'react-select';

import NavBar from '../../NavBar/NavBar';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

class LibraryGeneralPage extends Component {
    state = {
        selectedOption: options[0],
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <div className={classes.container}>
                <NavBar />
                <div className={classes.gridContainer}>

                    <div className={classes.selectTopicHeading}>Select Topics</div>
                    <div className={classes.practiceTestHeading}>Practice Tests</div>
                    <div className={classes.conceptsHeading}>Concepts</div>
                    <div className={classes.classVideosHeading}>Class Videos</div>

                    <div className={classes.selectTopicContent}>
                        <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            name="topicSelector"
                        />
                    </div>
                    <div className={classes.practiceTestContent}>
                        <div className={classes.tableContainer}>
                            <div className={classes.columnContainer}>
                                <div className={classes.columnHeading}>Foundation</div>
                                <div className={classes.gridBox}>PDF&nbsp;&nbsp;⭳</div>
                                <div className={classes.gridBox}>PDF&nbsp;&nbsp;⭳</div>
                                <div className={classes.gridBox}>PDF&nbsp;&nbsp;⭳</div>
                            </div>
                            <div class={classes.columnContainer}>
                                <div class={classes.columnHeading}>Moderate</div>
                                <div className={classes.gridBox}>PDF&nbsp;&nbsp;⭳</div>
                                <div className={classes.gridBox}>PDF&nbsp;&nbsp;⭳</div>
                                <div className={classes.gridBox}>PDF&nbsp;&nbsp;⭳</div>
                            </div>
                            <div class={classes.columnContainer}>
                                <div class={classes.columnHeading}>Advanced</div>
                                <div className={classes.gridBox}>PDF&nbsp;&nbsp;⭳</div>
                                <div className={classes.gridBox}>PDF&nbsp;&nbsp;⭳</div>
                                <div className={classes.gridBox}>PDF&nbsp;&nbsp;⭳</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.conceptsContent + ' ' + classes.singleRowContent}>
                        <div className={classes.gridBox} style={{ backgroundColor: "#00000029" }}>PDF&nbsp;&nbsp;⭳</div>
                        <div className={classes.gridBox} style={{ backgroundColor: "#00000029" }}>PDF&nbsp;&nbsp;⭳</div>
                        <div className={classes.gridBox} style={{ backgroundColor: "#00000029" }}>PDF&nbsp;&nbsp;⭳</div>
                    </div>
                    <div className={classes.classVideosContent + ' ' + classes.singleRowContent}>
                        <div className={classes.gridBox} style={{ backgroundColor: "#00000029" }}>Play&nbsp;&nbsp;▶</div>
                        <div className={classes.gridBox} style={{ backgroundColor: "#00000029" }}>Play&nbsp;&nbsp;▶</div>
                        <div className={classes.gridBox} style={{ backgroundColor: "#00000029" }}>Play&nbsp;&nbsp;▶</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LibraryGeneralPage;