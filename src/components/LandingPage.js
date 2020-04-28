import React from 'react';
import FirstImage from '../assets/FirstImg.png';
import classes from './LandingPage.module.css';
import Home from '../assets/home.png';
import cx from 'classnames';

const LandingPage = props => {
    
    return (
        <div>
            <div className={classes.FirstContainer}>
                <div className={classes.FirstImageContainer}>
                    <img className={classes.FirstImage} src={FirstImage} />
                </div>
                <nav className={classes.Nav}>
                    <div className={classes.HomePicture}>
                        <img src={Home} />
                    </div>
                    <div className={classes.NavButtons}><div className={classes.NavItemConatainer}><div className={classes.bottomBar1}></div>About Us</div></div>
                    <div className={classes.NavButtons}><div className={classes.NavItemConatainer}><div className={classes.bottomBar2}></div>Our Plans</div></div>
                    <div className={classes.NavButtons}><div className={classes.NavItemConatainer}><div className={classes.bottomBar3}></div>Library</div></div>
                    <div className={classes.NavButtons}><div className={classes.NavItemConatainer}><div className={classes.bottomBar4}></div>Blogs</div></div>
                    <div className={classes.NavButtons}><div className={classes.NavItemConatainer}><div className={classes.bottomBar5}></div>Contact Us</div></div>
                    <div className={classes.NavButtons}></div>
                    <div className={classes.LoginButtonContainer}>
                        <div className={classes.LoginButton}>Login</div>
                    </div>
                </nav>
                <div className={classes.TextContainer}>
                    <div className={classes.Text1}>Reach for your dreams</div>
                    <div className={classes.Text2}>Get the Best Experience</div>
                    <div className={classes.Text3}>Start Prepairing today!</div>
                </div>
                <div className={classes.DemoButton}>
                    <div className={classes.DemoText}>Book a Free Demo</div>
                </div>
            </div>
            <div></div>
        </div>
        )
};

export default LandingPage;