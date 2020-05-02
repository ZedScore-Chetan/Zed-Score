import React from 'react';
import classes from './BlackCard.module.css';

const BlackCard = props => {
    return (
        <div className={classes.Container}>
            <div className={classes.bg}></div>
            <div className={classes.bg2}></div>
        </div>
    )
};

export default BlackCard;