import React from 'react';
import classes from './FourthContainer.module.css';

import BottomPinkCurve from '../../../assets/BottomPinkCurve.png';
import E from '../../../assets/E.png';

const FourthContainer = props => {
    return (
        <div className={classes.FourthContainer} >
            <div className={classes.BottomPinkCurveContainer}>
                <img className={classes.BottomPinkContainer} src={BottomPinkCurve} />
            </div>
            <div className={classes.FourthTextContainer}>
                <div className={classes.BuzzText}><div className={classes.BottomBar4}></div>Buzz about us</div>
            </div>
            <div className={classes.Imgscontainer}>
                <div className={classes.WhiteCard}></div>
                <div className={classes.WhiteCard}></div>
                <div className={classes.WhiteCard}></div>
            </div>
            <div className={classes.Econtainer}>
                <img src={E} className={classes.E} />
            </div>
        </div>
    );
}

export default FourthContainer;