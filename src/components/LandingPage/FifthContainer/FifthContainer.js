import React from 'react';
import classes from './FifthContainer.module.css';

import BottomBlueCurve from '../../../assets/BottomBlueCurve.png';
import Rect from '../../../assets/Rect.png';
import RoundGirlImg from '../../../assets/RoundGirlImg.png';
import TwoMenImg from '../../../assets/TwoMenImg.png'
import D from '../../../assets/D.png';


const FifthContainer = props => {
    return (
        <div className={classes.FifthContainer}>
            <div className={classes.BottomBlueCurveContainer}>
                <img className={classes.BottomBlueContainer} src={BottomBlueCurve} />
            </div>
            {/* <div className={classes.container}>
                <div className={classes.firstContainer}>
                    <div className={classes.RectContainer}>
                        <div className={classes.RectInnerContainer}><img className={classes.Rect} src={Rect} /></div>
                        <div className={classes.Name}>Name</div>
                        <div className={classes.Founder}>Founder</div>
                        <div className={classes.InnerText}>Online Full Mock Tests: These tests help you assess your time management skills. They also give you a feel of the testing environment. These are provided in real time test environment mode.</div>
                    </div>
                    <div className={classes.RoundGirlImgContainer}>
                        <img src={RoundGirlImg} className={classes.RoundGirlImg} />
                    </div>
                </div>
                <div className={classes.TwoMenImgContainer}>
                    <img src={TwoMenImg} className={classes.TwoMenImg} />
                </div>
                <div className={classes.Dcontainer}>
                    <img src={D} className={classes.D} />
                </div>
            </div> */}
        </div>
    );
}

export default FifthContainer;