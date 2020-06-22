import React, { Component } from 'react';
import classes from './DetailIndividualContainer.module.css'

class DetailIndividualContainer extends Component {
    render() {
        return (
            <div className={classes.gridContainer}>
                <div className={classes.icon}><img src={this.props.icon} alt="icon"/></div>
                <div className={classes.heading}>{this.props.heading}</div>
                <div className={classes.content}>{this.props.content}</div>
            </div>
        );
    }
}

export default DetailIndividualContainer;