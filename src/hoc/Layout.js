import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavSideDrawered from '../components/NavSideDrawer/NavSideDrawer';
import * as actions from '../store/actions/index';

class Layout extends Component {

    render() {

        let fixed = false;
        let style = {};

        console.log(this.props.showNav);

        if(this.props.showNav){
            fixed = true;
        }

        if (fixed) {
            style = {
                position: 'fixed'
            }
        }
        else {
            style = null;
        }


        return (
            <div style={style}>
                <NavSideDrawered showNavSideDrawer={this.props.showNavSideDrawer} closeNavSideDrawerHandler={this.props.closeNavSideDrawer} />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        showNav: state.nav.showNavSideDrawer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showNavSideDrawer: () => dispatch(actions.showNavSideDrawer()),
        closeNavSideDrawer: () => dispatch(actions.closeNavSideDrawer()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);