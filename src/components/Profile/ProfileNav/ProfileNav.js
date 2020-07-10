import React, { useState } from 'react';
import classes from './ProfileNav.module.css';
import { withRouter } from 'react-router-dom';

const ProfileNav = (props) => {

    const [activeLink, setActiveLink] = useState(0);

    const navigate = (linkNo) => {
        switch (linkNo) {
            case 0:
                setActiveLink(0);
                props.history.push('/profile/info');
                break;
            case 1:
                setActiveLink(1);
                props.history.push('/profile/curriculum');
                break;
            case 2:
                setActiveLink(2);
                props.history.push('/profile/payment');
                break;
            case 3:
                setActiveLink(3);
                props.history.push('/profile/comm');
                break;
            case 4:
                setActiveLink(4);
                props.history.push('/profile/myClass');
                break;
            case 5:
                setActiveLink(5);
                props.history.push('/profile/timeTable');
                break;
            default:
                setActiveLink(0);
                props.history.push('/profile/info');
        }
    };

    return (
        <div className={classes.navWrapper}>
            {/* <p>This is ProfileNav</p>
            <p>{props.active}</p> */}
            <div className={classes.buttonWrapper}>
                <div onClick={() => navigate(0)} className={activeLink === 0 ? classes.selected : null}>Personal Info</div>
                <div onClick={() => navigate(1)} className={activeLink === 1 ? classes.selected : null}>Curriculum</div>
                <div onClick={() => navigate(2)} className={activeLink === 2 ? classes.selected : null}>Payment</div>
                <div onClick={() => navigate(3)} className={activeLink === 3 ? classes.selected : null}>Communication</div>
                <div onClick={() => navigate(4)} className={activeLink === 4 ? classes.selected : null}>My Class</div>
                <div onClick={() => navigate(5)} className={activeLink === 5 ? classes.selected : null}>Time Table</div>
            </div>
        </div>
    );
}

export default withRouter(ProfileNav);