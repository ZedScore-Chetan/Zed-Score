import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './NavSideDrawer.module.css';
// import Backdrop from '../Backdrop/Backdrop';
// import * as actions from '../../../store/actions/index';
// import Cross from '../../../assets/cross.svg';

const NavSideDrawer = props => {

    const linkClicked = () => {
        props.closeNavSideDrawer();
    }

    return (
        <Fragment>
            <div className={classes.SideDrawer}>
                {/* <div className={classes.crossContainer} >
                    <img src={Cross} alt="cross" className={classes.cross} />
                </div> */}
                <div className={classes.linksContainer}>
                    <Link className={classes.link} to="/">Quants</Link>
                    <Link className={classes.link} to="/">Data Interpretation</Link>
                    <Link className={classes.link} to="/">Logical Reasoning</Link>
                    <Link className={classes.link} to="/">Mock Test</Link>
                    <Link className={classes.link} to="/">GS/ GK Finance</Link>
                    <Link className={classes.link} to="/library/training">Financial Training</Link>
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
        // closeNavSideDrawer: () => dispatch(actions.closeNavSideDrawer())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavSideDrawer);