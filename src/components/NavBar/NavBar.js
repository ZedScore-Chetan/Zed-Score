import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavBar.module.css';
import Home from '../../assets/home.png';
import Bell from '../../assets/Bell.png';
import userIcon from '../../assets/userIcon.png';

const NavBar = props => {
    var rightElement = null;
    if (props.isLoggedIn === false) {
        rightElement = <Link to="/login" className={classes.LoginButtonContainer}>
            <div className={classes.LoginButton}>Login</div>
        </Link>
    }
    else {
        rightElement = <div className={classes.IconsContainer}>
            <img src={Bell} className={classes.Bell}></img>
            <img src={userIcon} className={classes.User}></img>
        </div>
    }
    return (
        <div className={classes.container}>
            <nav className={classes.Nav}>
                <div className={classes.HomePictureContainer}>
                    <img src={Home} className={classes.HomePicture} />
                </div>
                <div className={classes.NavButtons}>About Us<div className={classes.bottomBar1}></div></div>
                <div className={classes.NavButtons}>Our Plans<div className={classes.bottomBar2}></div></div>
                <div className={classes.NavButtons}>Library<div className={classes.bottomBar3}></div></div>
                <div className={classes.NavButtons}>Blogs<div className={classes.bottomBar4}></div></div>
                    <div className={classes.NavButtons}>Contact Us<div className={classes.bottomBar5}></div></div>
                {rightElement}
            </nav>
        </div>
    );
}

export default NavBar;