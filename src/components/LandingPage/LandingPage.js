import React, { Fragment } from 'react';

import FirstContainer from './FirstContainer/FirstContainer';
import SecondContainer from './SecondContainer/SecondContainer';
import ThirdContainer from './ThirdContainer/ThirdContainer';
import FourthContainer from './FourthContainer/FourthContainer';
import classes from './LandingPage.module.css';
import NavBar from '../NavBar/NavBar';
import BottomNav from '../BottomNav/BottomNav';
import Spinner from '../Spinner/Spinner';

const LandingPage = props => {

    return (
        <Fragment>
            <NavBar />
            <FirstContainer />
            <SecondContainer />
            <ThirdContainer />
            <FourthContainer />
            <div className={classes.bottomNav}>
                <BottomNav />
            </div>
        </Fragment>
    )
};

export default LandingPage;