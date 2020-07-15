import React, { Component } from 'react';
import classes from './DemoBooking.module.css';
import Select from 'react-select';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import NavBar from '../NavBar/NavBar';
import BottomNav from '../BottomNav/BottomNav';

const optionsCourse = [
    { value: 'mba', label: 'MBA' },
    { value: 'course1', label: 'Course 1' },
    { value: 'course2', label: 'Course 2' },
];

const optionsTime = [
    { value: '9', label: '9:00 - 10:00' },
    { value: '10', label: '10:00 - 11:00' },
    { value: '11', label: '11:00 - 12:00' },
];

class DemoBooking extends Component {

    state = {
        date: new Date(),
    }

    onChange = date => {
        this.setState({ date });
        console.log(date);
    }

    state = {
        selectedCourse: null,
        selectedTime: null,
    };

    handleCourseChange = selectedCourse => {
        this.setState({ selectedCourse });
        console.log(`Option selected for Course Changer:`, selectedCourse);
    };


    handleTimeChange = selectedTime => {
        this.setState({ selectedTime });
        console.log(`Option selected for Time Selector:`, selectedTime);
    };

    render() {
        const { selectedOption } = this.state;
        return (
            <div className={classes.wrapper}>
                <NavBar />
                <h1 style={{textAlign:"center", color:"#f65058ff"}}>Schedule a Live Demo</h1>
                <h3 style={{textAlign:"center", fontWeight:"300", color:"#3f7cab"}}>Give us a Few details to customize Your demo</h3>
                <div className={classes.gridContainer}>
                    <div className={classes.courseSelectorHeading}>Select Your Course</div>
                    <div className={classes.calendarHeading}>Select a Preferred Date</div>
                    <div className={classes.timeSelectorHeading}>Select Your Convenient Time</div>
                    <div className={classes.courseSelector}>
                        <Select
                            value={selectedOption}
                            onChange={this.handleCourseChange}
                            options={optionsCourse}
                        />
                    </div>
                    <div className={classes.calendar}>
                        <Calendar
                            onChange={this.onChange}
                            value={this.state.date}
                            minDetail="month"
                            className={classes.reactCalendar}
                        />
                    </div>
                    <div className={classes.timeSelector}>
                        <Select
                            value={selectedOption}
                            onChange={this.handleTimeChange}
                            options={optionsTime}
                        />
                    </div>
                </div>
                <div className={classes.bookButton}>
                    Book Now
                </div>
                <BottomNav />
            </div>
        );
    }
}

export default DemoBooking;