import React from 'react';

import ProfileForm from '../FormComponents/ProfileForm/ProfileForm';
import ContactInformationForm from '../FormComponents/ContactInformationForm/ContactInformationForm';

import classes from './PersonalInformation.module.css';

import backgroundImage from '../../Assets/background.png';


const PersonalInformation = (props) => {
    console.log(props);
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }} className={classes.wrapper}>
            <div className={classes.gridContainer}>

                <div className={classes.nameAndPhotoRegion}>
                    <img src={props.personalInformation.profile.profileImg} alt="TF! Where is your Profile Pic!" />
                    <p>{props.personalInformation.profile.firstName + ' ' + props.personalInformation.profile.lastName}</p>
                </div>

                <div className={classes.profileRegion}>
                    <ProfileForm profile={props.personalInformation.profile} />
                </div>

                <div className={classes.contactInformationRegion}>
                    <ContactInformationForm contactInformation={props.personalInformation.contactInformation} />
                </div>

                <div className={classes.controlsRegion}>
                    <input type="button" value="save" className={classes.blueButton} />
                </div>
            </div>
        </div>
    );
}

export default PersonalInformation;