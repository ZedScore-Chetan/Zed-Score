import React, { Component } from 'react';
import classes from './FormElement.module.css';

class FormElement extends Component {
    render() {
        return (
            <div>
                <div className={classes.inputHeading}>{this.props.field}</div>
                <input className={classes.inputField} defaultValue={this.props.inputInitialData} type="text" readOnly={this.props.readOnly} />
            </div>
        );
    }
}

export default FormElement;