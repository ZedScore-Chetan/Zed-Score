import React from 'react';
import classes from './FourthContainer.module.css';

import BottomPinkCurve from '../../../assets/BottomPinkCurve.png';
import E from '../../../assets/E.png';
import BottomBlueCurve from '../../../assets/BottomBlueCurve.png';
import RoundGirlImg from '../../../assets/RoundGirlImg.png';
import TwoMenImg from '../../../assets/TwoMenImg.png'
import D from '../../../assets/D.png';
import RedWave from '../../../assets/redWave.png';

const FourthContainer = props => {
    return (
        <div className={classes.FourthContainer} >
            <div className={classes.BottomPinkCurveContainer}>
                <img className={classes.BottomPinkContainer} src={BottomPinkCurve} />
            </div>
            <div className={classes.topContainer}>
                <div className={classes.FourthTextContainer}>
                    <div className={classes.BuzzText}><div className={classes.BottomBar4}></div>Buzz about us</div>
                    <div className={classes.buzzAbutUsBottomText}>We create stories. Let’s here is from our students.</div>
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
            <div className={classes.BottomBlueCurveContainer}>
                <img className={classes.BottomBlueContainer} src={BottomBlueCurve} />
            </div>
            <div className={classes.bottomContainer}>
                <div className={classes.firstContainer}>
                    <div className={classes.RectContainer}>
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
                <div className={classes.redWaveContainer}>
                    <img src={RedWave} alt="redWave" />
                </div>
                <div className={classes.digitalMarketingTextContainer}>
                    <div className={classes.digitalMarketingText}>Check Out Our Digital Marketing Page</div>
                </div>
            </div>
        </div>
    );
}

export default FourthContainer;