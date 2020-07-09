import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './LoginPage.module.css';
import LoginBg from '../../assets/loginBg.png';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const LoginPage = props => {

    if (localStorage.getItem('token') && props.isUserDataFilled) {
        console.log(localStorage.getItem('token'))
        props.history.push('/');
    }
    else if(localStorage.getItem('token') && !props.isUserDataFilled){
        props.history.push('/profile/info');
    }

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

const mapStateToProps = state => {
    return {
        isUserDataFilled: state.auth.isUserDataFilled,
    };
};

export default connect(mapStateToProps)(withRouter(LoginPage));