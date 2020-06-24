import React from 'react';

import CourseInformationForm from '../FormComponents/CourseInformationForm/CourseInformationForm';
import PaymentInformationForm from '../FormComponents/PaymentInformationForm/PaymentInformationForm';

import classes from './Payment.module.css';

import backgroundImage from '../../Assets/background.png';


const PersonalInformation = (props) => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className={classes.wrapper}>
            <div className={classes.gridContainer}>

                <div className={classes.courseInformationRegion}>
                    <CourseInformationForm courseInformation={props.courseInformation} />
                </div>

                <div className={classes.paymentInformationRegion}>
                    <PaymentInformationForm paymentInformation={props.paymentInformation} />
                </div>

                <div className={classes.controlsRegion}>
                    <input type="button" value="Pay Now" className={classes.blueButton} />
                </div>
            </div>
        </div>
    );
}

export default PersonalInformation;