import React from 'react';
import classes from './TimeTableCard.module.css';

const TimeTableCard = (props) => {
    return (
        <div className={classes.cardBody}>
            <div className={classes.gridContainer}>
                <div className={classes.heading}>
                    <div className={classes.issuer}>{props.issuer}</div>
                    <div className={classes.time}>{props.time}</div>
                </div>
                <div className={classes.subject}>{props.topic}</div>
            </div>
        </div>
    );
};

export default TimeTableCard;