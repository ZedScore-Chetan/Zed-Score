import * as actionTypes from '../actions/actionTypes';

const initialState = {
    showNavSideDrawer: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_NAV_SIDE_DRAWER:
            return {
                ...state,
                showNavSideDrawer: true,
            };
        case actionTypes.CLOSE_NAV_SIDE_DRAWER:
            return {
                ...state,
                showNavSideDrawer: false,
            };
        default: return state;
    }
}

export default reducer;