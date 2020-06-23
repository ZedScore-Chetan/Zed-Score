import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './NavSideDrawer.module.css';
import Backdrop from '../Backdrop/Backdrop';
import * as actions from '../../store/actions/index';
import Cross from '../../assets/cross.svg';

const NavSideDrawer = props => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.showNav) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    const closeNavSideDrawer = () => {
        props.closeNavSideDrawer();
    };

    const linkClicked = () => {
        props.closeNavSideDrawer();
    }

    return (
        <Fragment>
            <Backdrop show={props.showNav} clicked={props.closeNavSideDrawerHandler} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.crossContainer} onClick={closeNavSideDrawer} >
                    <img src={Cross} alt="cross" className={classes.cross} />
                </div>
                <div className={classes.linksContainer}>
                    <Link className={classes.link} onClick={linkClicked} to="/">Quants</Link>
                    <Link className={classes.link} onClick={linkClicked} to="/">Data Interpretation</Link>
                    <Link className={classes.link} onClick={linkClicked} to="/">Logical Reasoning</Link>
                    <Link className={classes.link} onClick={linkClicked} to="/">Mock Test</Link>
                    <Link className={classes.link} onClick={linkClicked} to="/">GS/ GK Finance</Link>
                    <Link className={classes.link} onClick={linkClicked} to="/training">Financial Training</Link>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        showNav: state.nav.showNavSideDrawer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeNavSideDrawer: () => dispatch(actions.closeNavSideDrawer())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavSideDrawer);