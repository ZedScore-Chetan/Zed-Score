import React from 'react';
import classes from './FirstContainer.module.css';

import FirstImage from '../../../assets/FirstImg.png';



const FirstContainer = props => {
    return (
        <div className={classes.FirstContainer}>
            <div className={classes.FirstImageContainer}>
                <img className={classes.FirstImage} src={FirstImage} />
            </div>
            {/* <nav className={classes.Nav}>
                <div className={classes.HomePictureContainer}>
                    <img src={Home} className={classes.HomePicture} />
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
            </nav> */}
            <div className={classes.FirstTextContainer}>
                <div className={classes.FirstText1}>Reach for your dreams</div>
                <div className={classes.FirstText2}>Get the Best Experience</div>
                <div className={classes.FirstText3}>Start Prepairing today!</div>
            </div>
            <div className={classes.DemoButton}>
                <div className={classes.DemoText}>Book a Free Demo</div>
            </div>
        </div>
    );
}

export default FirstContainer;