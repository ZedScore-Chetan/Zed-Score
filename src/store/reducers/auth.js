import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    token: null,
    isUserDataFilled: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ACCESS_TOKEN:
            localStorage.setItem('token', action.token);
            console.log(action.token)
            if (action.token) {
                return {
                    ...state,
                    isLoggedIn: true,
                    token: action.token,
                };
            }
        default: return state;
    }
}

export default reducer;