import React from 'react';
import classes from './SecondContainer.module.css';
import SecondImage from '../../assets/Second.svg';
import FirstBlueCurve from '../../assets/FirstBlueCurve1.png';
import Z from '../../assets/Z.png';
import BlackCard from '../BlackCard/BlackCard';
import Map from '../../assets/map.png';
import BottomPinkCurve from '../../assets/BottomPinkCurve.png';
import BottomBlueCurve from '../../assets/BottomBlueCurve.png';
import Rect from '../../assets/Rect.png';
import RoundGirlImg from '../../assets/RoundGirlImg.png';
import TwoMenImg from '../../assets/TwoMenImg.png'
import E from '../../assets/E.png';
import BottomBlackcurve from '../../assets/BottomBlackCurve.png';

const SecondContainer = props => {
    return (
        <div className={classes.SecondContainer}>
            <div className={classes.SecondImageContainer}>
                <img className={classes.SecondImage} src={SecondImage} />
            </div>
            <div className={classes.SecondTextContainer}>
                <div className={classes.SecondText1}><div className={classes.BottomBar2}></div>Who are we?</div>
                <div className={classes.SecondText2}>ZedScore provides you with the best possible study material to bring out the best in you for various exams like CAT,GMAT</div>
                <div className={classes.SecondText3}>We bring out the best version of you</div>
            </div>
            <div className={classes.FirstBlueCurveContainer}>
                <img src={FirstBlueCurve} className={classes.FirstBlueCurve}></img>
            </div>
            <img src={Z} className={classes.Z}></img>
            <div className={classes.CirclesFlex}>
                <div className={classes.InnerFlex}><div className={classes.Circles}></div><div className={classes.FlexTextHeading}>Online Tests</div><div className={classes.FlexText}>Online Full Mock Tests: These tests help you assess your time management skills. They also give you a feel of the testing environment. These are provided in real time test environment mode.</div></div>
                <div className={classes.InnerFlex}><div className={classes.Circles}></div><div className={classes.FlexTextHeading}>Interactive Sessions</div><div className={classes.FlexText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div></div>
                <div className={classes.InnerFlex}><div className={classes.Circles}></div><div className={classes.FlexTextHeading}>Successful Students</div><div className={classes.FlexText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div></div>
            </div>
            <div className={classes.ThirdTextContainer}>
                <div className={classes.SecondText4}><div className={classes.BottomBar3}></div>What we offer</div>
            </div>
            <div className={classes.MainContainer}>
                <div className={classes.CardContainerTop}>
                    <BlackCard />
                    <BlackCard />
                    <BlackCard />
                </div>
                <div className={classes.CardContainerBottom}>
                    <BlackCard />
                    <BlackCard />
                </div>
            </div>
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
            <div className={classes.BottomBlueCurveContainer}>
                <img className={classes.BottomBlueContainer} src={BottomBlueCurve} />
            </div>
            <div className={classes.RectContainer}>
                <div className={classes.RectInnerContainer}><img className={classes.Rect} src={Rect} /></div>
                <div className={classes.Name}>Name</div>
                <div className={classes.Founder}>Founder</div>
                <div className={classes.InnerText}>Online Full Mock Tests: These tests help you assess your time management skills. They also give you a feel of the testing environment. These are provided in real time test environment mode.</div>
            </div>
            <div className={classes.RoundGirlImgContainer}>
                <img src={RoundGirlImg} className={classes.RoundGirlImg} />
            </div>
            <div className={classes.TwoMenImgContainer}>
                <img src={TwoMenImg} className={classes.TwoMenImg} />
            </div>
            <div className={classes.Econtainer}>
                <img src={E} className={classes.E} />
            </div>
            <div className={classes.Econtainer2}>
                <img src={E} className={classes.E2 } />
            </div>
            <div className={classes.latBlackScreen}>
                <div className={classes.BottomBlackcurveContainer}>
                    <img src={BottomBlackcurve} className={classes.BottomBlackcurve} />
                </div>
            </div>
        </div>
    );
}

export default SecondContainer;