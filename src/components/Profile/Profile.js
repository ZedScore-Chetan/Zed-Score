import React, { Component } from 'react';

import classes from './Profile.module.css';

import ProfileNav from './ProfileNav/ProfileNav';
import PersonalInformation from './RightSide/PersonalInformation/PersonalInformation';
import Curriculum from './RightSide/Curriculum/Curriculum';
import Payment from './RightSide/Payment/Payment';
import Communications from './RightSide/Communications/Communications';

import profilePic from './Assets/profile.jpeg';

class Profile extends Component {
    profileData = {
        personalInformation: {
            profile: {
                profileImg: profilePic,
                firstName: 'Nidheesh',
                lastName: 'Jain',
                plan: 'MBA',
            },
            contactInformation: {
                phoneNumber: '9672666344',
                email: 'nidheeshjain01@gmail.com',
                address: '24 R.K. Puram, Kota, Rajasthan',
            },
        },
        curriculum: {
            courseInformation: {
                registeredCourse: 'MBA',
                registrationDate: new Date().toISOString().slice(0, 10),
            },
            academicInformation: {
                collegeName: 'BITS Pilani',
                courseName: 'B.Tech Mechanical',
            },
            courseCoveredPercentage: 40,
            classesAttendedPercentage: 90,
            mockTest: {
                given: 10,
                total: 20,
            },
        },
        paymentInformation: {
            lastPaymentDetails: {
                date: new Date().toISOString().slice(0, 10),
                amount: 2100,
            },
            nextPaymentDetails: {
                date: new Date().toISOString().slice(0, 10),
                amount: 2100,
            },
        },
        communications: [
            {
                announcementID : 0,
                issuer: 'Instructor1',
                pic: profilePic,
                time: new Date().toISOString().slice(0, 10),
                subject: 'Quants Class Rescheduled',
                message: "Hello Students! Due to unavoidable circumstances. Today's class has to be shifted to 7pm tomorrow\nMulti Line messages are also allowed.",
            },
            {
                announcementID : 1,
                issuer: 'Instructor2',
                pic: profilePic,
                time: new Date().toISOString().slice(0, 10),
                subject: 'Quants Class Cancelled',
                message: "Hello Students! Due to unavoidable circumstances. Today's class has to be shifted to 7pm tomorrow\nAuto Resize are also allowed.",
            },
            {
                announcementID : 2,
                issuer: 'Instructor3',
                pic: profilePic,
                time: new Date().toISOString().slice(0, 10),
                subject: 'Quants Class Scheduled',
                message: "Hello Students! Due to unavoidable circumstances. Today's class has to be shifted to 7pm tomorrow\nMulti Line messages are also allowed.",
            },
            {
                announcementID : 3,
                issuer: 'Instructor4',
                pic: profilePic,
                time: new Date().toISOString().slice(0, 10),
                subject: 'Quants Class Cancelled',
                message: "Hello Students! Due to unavoidable circumstances. Today's class has to be shifted to 7pm tomorrow. Hello Students! Due to unavoidable circumstances.\n\n Today's class has to be shifted to 7pm tomorrow\nMulti Line messages are also allowed.",
            }
        ],
    };


render() {
    var active = 3;
    var RightComponent = null;
    switch (active) {
        case 0:
            RightComponent = <PersonalInformation personalInformation={this.profileData.personalInformation} />;
            break;
        case 1:
            RightComponent = <Curriculum curriculum={this.profileData.curriculum} />;
            break;
        case 2:
            RightComponent = <Payment courseInformation={this.profileData.curriculum.courseInformation} paymentInformation={this.profileData.paymentInformation} />;
            break;
        case 3:
            RightComponent = <Communications courseInformation={this.profileData.curriculum.courseInformation} paymentInformation={this.profileData.paymentInformation} communications={this.profileData.communications} />;
            break;
        default:
            // Error
            alert('Looks like there is some problem with the system');
    }


    return (
        <div className={classes.wrapper}>
            <ProfileNav active={active} />
            {RightComponent}
        </div>
    );
}
}

export default Profile;