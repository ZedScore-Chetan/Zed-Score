import React, { Component } from 'react';

import FormElement from '../FormElement/FormElement'

import classes from '../formComponents.module.css';

class CourseInformationForm extends Component {
    render() {
        return (
            <div className={classes.formComponentWrapper}>
                <div className={classes.sectionHeading}>Course Information</div>
                <FormElement field="Course Registered" inputInitialData={this.props.courseInformation.registeredCourse} readOnly={true} />
                <FormElement field="Course Registration Date" inputInitialData={this.props.courseInformation.registrationDate} readOnly={true}/>
            </div>
        );
    }
}

export default CourseInformationForm;