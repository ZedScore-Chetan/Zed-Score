import React, { Component } from 'react';

import FormElement from '../FormElement/FormElement'

import classes from '../formComponents.module.css'

class ProfileForm extends Component {
    render() {
        return (
            <div className={classes.formComponentWrapper}>
                <div className={classes.sectionHeading}>Profile</div>
                <FormElement field="First Name" inputInitialData={this.props.profile.firstName} />
                <FormElement field="Last Name" inputInitialData={this.props.profile.lastName} />
                <FormElement field="Plan" inputInitialData={this.props.profile.plan} />
            </div>
        );
    }
}

export default ProfileForm;