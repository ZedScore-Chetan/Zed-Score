// This component uses the below tag
// <ClassTimer topic={classTimerData.topic} instructor={classTimerData.instructor} scheduledTime={classTimerData.scheduledTime} />

// example classTimerData object
// {topic:'Ratio & Proportion', instructor:'Dr. Chetan Sharma', scheduledTime:newDateObj}
// where, date is a javascript Date object

import React, { Component } from 'react';
import moment from 'moment';

import DetailIndividualContainer from './DetailIndividualContainer/DetailIndividualContainer'

import clockSVG from './clock.svg';
import topicSVG from './topic.svg';
import teacherSVG from './teacher.svg';
import powerButtonClickableSVG from './powerButtonClickable.svg';
import powerButtonUnclickableSVG from './powerButtonUnclickable.svg';


import classes from './ClassTimer.module.css'

class ClassTimer extends Component {
    render() {
        const isComponentActive = () => {
            return true;
        }

        return (
            <div className={classes.gridContainer} >
                <div className={classes.details + " " + (isComponentActive() ? classes.detailsActive : classes.detailsInactive)}>
                    <DetailIndividualContainer icon={topicSVG} heading="Topic Name" content={this.props.topic} />
                    <DetailIndividualContainer icon={teacherSVG} heading="Instructor" content={this.props.instructor} />
                    <DetailIndividualContainer icon={clockSVG} heading="Class starts in" content={moment(this.props.scheduledTime).fromNow(true)} />
                </div>
                <div className={classes.controls}>
                    <img src={isComponentActive() ? powerButtonClickableSVG : powerButtonUnclickableSVG} alt="Click to join the Class"/>
                    <h2>{isComponentActive() ? 'Click on the above Button to join the Class' : 'Please wait for the button to turn Green'}</h2>
                </div>
            </div>
        );
    }
}

export default ClassTimer