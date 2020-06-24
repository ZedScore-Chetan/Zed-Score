import React, { Fragment } from 'react';

import classes from './Library.module.css';

import NavSideDrawer from './NavSideDrawer/NavSideDrawer';
import Training from '../Training/Training';

const Library = props => {
    return (
        <Fragment>
            <div className={classes.container}>
                <NavSideDrawer />
                <Training />
            </div>
        </Fragment>
    );
};

export default Library;