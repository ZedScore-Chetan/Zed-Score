import * as actionTypes from './actionTypes';

export const GoogleLogin = (data) => {
    return dispatch => {
        fetch('https://clearquantstest.herokuapp.com/auth/convert-token/', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json()
            })
            .then(res => {
                console.log(res)
                dispatch(setAccessToken(res.access_token));
            })
            .catch(err => console.log(err));
    };
};

export const setAccessToken = (token) => {
    return {
        type: actionTypes.SET_ACCESS_TOKEN,
        token: token,
    };
};