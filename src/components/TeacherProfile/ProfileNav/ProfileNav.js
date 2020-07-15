import React, { useState } from 'react';
import classes from './ProfileNav.module.css';
import { withRouter } from 'react-router-dom';

const ProfileNav = (props) => {

    const [activeLink, setActiveLink] = useState(0);

    const navigate = (linkNo) => {
        switch (linkNo) {
            case 0:
                setActiveLink(0);
                props.history.push('/teacherProfile/info');
                break;
            case 1:
                setActiveLink(1);
                props.history.push('/teacherProfile/scheduleClass');
                break;
            case 2:
                setActiveLink(2);
                props.history.push('/teacherProfile/sendNotice');
                break;
            default:
                setActiveLink(0);
                props.history.push('/teacherProfile/info');
        }
    };

    return (
        <div className={classes.navWrapper}>
            {/* <p>This is ProfileNav</p>
            <p>{props.active}</p> */}
            <div className={classes.buttonWrapper}>
                <div onClick={() => navigate(0)} className={activeLink === 0 ? classes.selected : null}>Personal Info</div>
                <div onClick={() => navigate(1)} className={activeLink === 1 ? classes.selected : null}>Schedule A Class</div>
                <div onClick={() => navigate(2)} className={activeLink === 2 ? classes.selected : null}>Send Notice</div>
            </div>
        </div>
    );
}

export default withRouter(ProfileNav);