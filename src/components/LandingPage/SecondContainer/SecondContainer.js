import React from 'react';
import classes from './SecondContainer.module.css';

import SecondImage from '../../../assets/Second.svg';
import Z from '../../../assets/Z.png';
import FirstBlueCurve from '../../../assets/FirstBlueCurve1.png';

const SecondContainer = props => {
    return (
        <div className={classes.SecondContainer}>
            <div className={classes.container}>
                <div className={classes.SecondTextContainer}>
                    <div className={classes.SecondText1}><div className={classes.BottomBar2}></div>Who are we?</div>
                    <div className={classes.SecondText2}>ZedScore provides you with the best possible study material to bring out the best in you for various exams like CAT,GMAT</div>
                    <div className={classes.SecondText3}>We bring out the best version of you</div>
                </div>
                <div className={classes.SecondImageContainer}>
                    <img className={classes.SecondImage} src={SecondImage} />
                </div>
            </div>
            <div className={classes.FirstBlueCurveContainer}>
                <img src={FirstBlueCurve} className={classes.FirstBlueCurve}></img>
            </div>
            <div className={classes.container2}>
                <div className={classes.ZContainer}><img src={Z} className={classes.Z}></img></div>
                <div className={classes.CirclesFlex}>
                    <div className={classes.InnerFlex}><div className={classes.Circles}></div><div className={classes.FlexTextHeading}>Online Tests</div><div className={classes.FlexText}>Online Full Mock Tests: These tests help you assess your time management skills. They also give you a feel of the testing environment. These are provided in real time test environment mode.</div></div>
                    <div className={classes.InnerFlex}><div className={classes.Circles}></div><div className={classes.FlexTextHeading}>Interactive Sessions</div><div className={classes.FlexText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div></div>
                    <div className={classes.InnerFlex}><div className={classes.Circles}></div><div className={classes.FlexTextHeading}>Successful Students</div><div className={classes.FlexText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div></div>
                </div>
            </div>
        </div>
    );
}

export default SecondContainer;