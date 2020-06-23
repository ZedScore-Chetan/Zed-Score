import React from 'react';

import FirstContainer from './FirstContainer/FirstContainer';
import SecondContainer from './SecondContainer/SecondContainer';
import ThirdContainer from './ThirdContainer/ThirdContainer';
import FourthContainer from './FourthContainer/FourthContainer';
import FifthContainer from './FifthContainer/FifthContainer';
import classes from './LandingPage.module.css';
import NavBar from '../NavBar/NavBar';
// import ThirdContainer from './ThirdContainer/ThirdContainer';

const LandingPage = props => {

    return (
        <div className={classes.Container}>
            <NavBar />
            <FirstContainer />
            <SecondContainer />
            <ThirdContainer />
            <FourthContainer />
            {/* <FifthContainer /> */}
        </div>
    )
};

export default LandingPage;