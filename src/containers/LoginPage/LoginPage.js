import React from 'react';

import classes from './LoginPage.module.css';
import LoginBg from '../../assets/loginBg.png';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const LoginPage = props => {
    return (
        <div className={classes.outerContainer}>
            <div className={classes.left}>
                <img src={LoginBg} alt="bg" style={{ height: '100%', width: '100%' }} />
                <div className={classes.whiteLine}></div>
            </div>
            <div className={classes.right}>
                <GoogleLogin />
            </div>
        </div>
    );
};

export default LoginPage;