import React from 'react';
import classes from './SecondContainer.module.css';

import BottomBlackcurve from '../../assets/BottomBlackCurve.png';

const SecondContainer = props => {
    return (
        <div className={classes.SecondContainer}>
            <div className={classes.latBlackScreen}>
                <div className={classes.BottomBlackcurveContainer}>
                    <img src={BottomBlackcurve} className={classes.BottomBlackcurve} />
                </div>
            </div>
        </div>
    );
}

export default SecondContainer;