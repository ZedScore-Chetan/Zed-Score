import React from 'react';

import classes from './Curriculum.module.css';
import 'react-circular-progressbar/dist/styles.css';

import CourseInformationForm from '../FormComponents/CourseInformationForm/CourseInformationForm';
import AcademicInformationForm from '../FormComponents/AcademicInformationForm/AcademicInformationForm';
import { CircularProgressbar } from 'react-circular-progressbar';

import backgroundImage from '../../Assets/background.png';

const Curriculum = (props) => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className={classes.wrapper}>
            <div className={classes.gridContainer}>
                <div className={classes.courseInformationRegion}>
                    <CourseInformationForm courseInformation={props.curriculum.courseInformation} />
                </div>
                <div className={classes.academicInformationRegion}>
                    <AcademicInformationForm academicInformation={props.curriculum.academicInformation} />
                </div>
                <div className={classes.otherInformationRegion}>
                    <div>
                        <div>% of Course Covered</div>
                        <CircularProgressbar value={props.curriculum.courseCoveredPercentage} text={`${props.curriculum.courseCoveredPercentage}%`} />
                    </div>
                    <div>
                        <div>% of Classes attended</div>
                        <CircularProgressbar value={props.curriculum.classesAttendedPercentage} text={`${props.curriculum.classesAttendedPercentage}%`} />
                    </div>
                    <div>
                        <div>No. of Mock Tests given</div>
                        <CircularProgressbar value={(props.curriculum.mockTest.given / props.curriculum.mockTest.total) * 100} text={`${props.curriculum.mockTest.given} /  ${props.curriculum.mockTest.total}`} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Curriculum;

