import React, { Component } from 'react';

import FormElement from '../FormElement/FormElement'

import classes from '../formComponents.module.css'

class ContactInformationForm extends Component {
    render() {
        return (
            <div className={classes.formComponentWrapper}>
                <div className={classes.sectionHeading}>Contact Information</div>
                <FormElement field="Email ID" inputInitialData={this.props.contactInformation.email} />
                <FormElement field="Phone Number" inputInitialData={this.props.contactInformation.phoneNumber} />
                <FormElement field="Address (Optional)" inputInitialData={this.props.contactInformation.address} />
            </div>
        );
    }
}

export default ContactInformationForm;