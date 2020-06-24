import React, { Component } from 'react';

import FormElement from '../FormElement/FormElement';

import classes from '../formComponents.module.css';


class AcademicInformationForm extends Component {
    render() {
        return (
            <div className={classes.formComponentWrapper}>
                <div className={classes.sectionHeading}>Academic Information</div>
                <FormElement field="College Name" inputInitialData={this.props.academicInformation.collegeName} readOnly={true} />
                <FormElement field="Course Name" inputInitialData={this.props.academicInformation.courseName} readOnly={true} />
            </div>
        );
    }
}

export default AcademicInformationForm;