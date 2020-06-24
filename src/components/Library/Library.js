import React, { Fragment } from 'react';

import classes from './Library.module.css';

// import NavSideDrawer from './NavSideDrawer/NavSideDrawer';
import InnerNavBar from './InnerNavBar/InnerNavBar';
import Training from '../Training/Training';
import BottomNav from '../BottomNav/BottomNav';

const Library = props => {
    return (
        <Fragment>
            <div className={classes.container}>
                <InnerNavBar />
                <Training />
                <BottomNav />
            </div>
        </Fragment>
    );
};

export default Library;