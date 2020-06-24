import React from 'react';
import classes from './ProfileNav.module.css';

const ProfileNav = (props) => {
    return (
        <div className={classes.navWrapper}>
            {/* <p>This is ProfileNav</p>
            <p>{props.active}</p> */}
            <div className={classes.buttonWrapper}>
                <div className={props.active === 0 ? classes.selected : null}>Personal Information</div>
                <div className={props.active === 1 ? classes.selected : null}>Curriculum</div>
                <div className={props.active === 2 ? classes.selected : null}>Payment</div>
                <div className={props.active === 3 ? classes.selected : null}>Communications</div>
            </div>
        </div>
    );
}

export default ProfileNav;