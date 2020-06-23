import * as actionTypes from './actionTypes';

export const showNavSideDrawer = () => {
    return {
        type: actionTypes.SHOW_NAV_SIDE_DRAWER,
    };
};

export const closeNavSideDrawer = () => {
    return {
        type: actionTypes.CLOSE_NAV_SIDE_DRAWER,
    };
};