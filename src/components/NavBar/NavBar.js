import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import classes from './NavBar.module.css';
import Home from '../../assets/home.png';
import Bell from '../../assets/Bell.png';
import userIcon from '../../assets/userIcon.png';

const NavBar = props => {

    // const [activeLink, setActiveLink] = useState(null);

    const showUserProfileHandler = () => {
        props.history.push("/profile/info")
    };

    var rightElement = null;
    if (props.isLoggedIn === false) {
        rightElement = <Link to="/login" className={classes.LoginButtonContainer}>
            <div className={classes.LoginButton}>Login</div>
        </Link>
    }
    else {
        rightElement = <div className={classes.IconsContainer}>
            <img src={Bell} className={classes.Bell} alt="bell"></img>
            <img src={userIcon} className={classes.User} alt="user" onClick={() => showUserProfileHandler()}></img>
        </div>
    }

    const homeClickedHandler = () => {
        props.history.push("/");
    }

    // const classesList = [];

    // for (let i = 1; i <= 5; i++) {
    //     console.log('hello')
    //     if(i === activeLink){
    //         classesList.push(classes.NavButtonsActive)
    //     }
    //     else{
    //         classesList.push(classes.NavButtonsInactive)
    //     }
    // }

    // const clickedHandler = (id) => {
    //     setActiveLink(id);
    //     if(id === 3){
    //         props.history.push('/library/training')
    //     }
    // }

    // console.log(classesList)
    // console.log(activeLink)

    return (
        <div className={classes.container}>
            <nav className={classes.Nav}>
                <div className={classes.HomePictureContainer}>
                    <img src={Home} className={classes.HomePicture} onClick={homeClickedHandler} alt="home" />
                </div>
                <div className={classes.NavButtonsInactive}>About Us<div className={classes.bottomBar1}></div></div>
                <div className={classes.NavButtonsInactive}>Our Plans<div className={classes.bottomBar2}></div></div>
                <Link to="/library/training" className={classes.NavButtonsInactive}>Library<div className={classes.bottomBar3}></div></Link>
                <Link to="/blogs" className={classes.NavButtonsInactive}>Blogs<div className={classes.bottomBar4}></div></Link>
                <div className={classes.NavButtonsInactive}>Contact Us<div className={classes.bottomBar5}></div></div>
                {rightElement}
            </nav>
        </div>
    );
}


export default withRouter(NavBar);