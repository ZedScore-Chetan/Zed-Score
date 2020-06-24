import React, { Component } from 'react';

import classes from './BottomNav.module.css';
import Fb from '../../assets/fb.png';
import Whatsapp from '../../assets/whatsapp.png';
import Phone from '../../assets/phone.png';
import QueryForm from '../QueryForm/QueryForm';

class BottomNav extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.queryContainer}>
                    <div className={classes.qTextContainer}>
                        <div className={classes.qHeadingContainer}>
                            <div className={classes.qHeading}>Send a Query</div>
                            <div className={classes.qText}>We always answer !</div>
                        </div>
                    </div>
                    <QueryForm />
                </div>
                <div className={classes.linksContainer}>
                    <div className={classes.first}>
                        <div className={classes.fbContainer}>
                            <img className={classes.fb} src={Fb} alt="fb" />
                            <div className={classes.text}>
                                <div>FACEBOOK</div>
                                <div>Connect with us</div>
                            </div>
                        </div>
                        <div className={classes.whatsappContainer}>
                            <img className={classes.wa} src={Whatsapp} alt="whatsapp" />
                            <div className={classes.text}>
                                <div>Ask Doubts on</div>
                                <div>7691036369</div>
                            </div>
                        </div>
                        <div className={classes.phoneContainer}>
                            <img className={classes.phone} src={Phone} alt="phone" />
                            <div className={classes.text}>
                                <div>7691036369</div>
                                <div>9am to 6pm </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.second}>
                        <div className={classes.blockContainer}>
                            <div className={classes.text}>
                                <div className={classes.heading}>Account</div>
                                <div className={classes.innerText}>My Account Settings</div>
                            </div>
                        </div>
                        <div className={classes.blockContainer}>
                            <div className={classes.text}>
                                <div className={classes.heading}>Blog</div>
                                <div className={classes.innerText}>Latest News</div>
                            </div>
                        </div>
                        <div className={classes.blockContainer}>
                            <div className={classes.text}>
                                <div className={classes.heading}>About Us</div>
                                <div className={classes.innerText}>What We Offer</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.third}>
                        <div className={classes.lastContainer}>
                            <div className={classes.innerText}>Private Policies</div>
                            <div className={classes.innerText}>Legal Notices</div>
                            <div className={classes.innerText}>Terms and Conditions</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default BottomNav;