import React, { Component } from 'react';

import FormElement from '../FormElement/FormElement'

import classes from '../formComponents.module.css';

class PaymentInformationForm extends Component {
    render() {
        return (
            <div className={classes.formComponentWrapper}>
                <div className={classes.sectionHeading}>Payment Information</div>
                <div className={classes.subHeading}>Last Payment Details</div>
                <FormElement field="Date" inputInitialData={this.props.paymentInformation.lastPaymentDetails.date} readOnly={true} />
                <FormElement field="Amount" inputInitialData={'₹  ' + this.props.paymentInformation.lastPaymentDetails.amount} readOnly={true} />
                <div className={classes.subHeading}>Next Payment Details</div>
                <FormElement field="Date" inputInitialData={this.props.paymentInformation.nextPaymentDetails.date} readOnly={true} />
                <FormElement field="Amount" inputInitialData={'₹  ' + this.props.paymentInformation.nextPaymentDetails.amount} readOnly={true} />
            </div>
        );
    }
}

export default PaymentInformationForm;