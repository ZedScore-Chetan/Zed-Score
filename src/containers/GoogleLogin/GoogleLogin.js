import React from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';

import classes from './GoogleLogin.module.css';

const GoogleLoginButton = props => {

    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    const successHandler = response => {
        console.log(response)
        // props.postGoogleLoginHandler(response);
        console.log(response.tokenId)
        let obj = {
            provider: 'google-oauth2',
            access_token: response.accessToken.toString(),
        }
        console.log(obj);
        fetch('https://clearqtest.herokuapp.com/oauth/login/', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: obj
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    const failHandler = response => {
        console.log(response.tokenId);
    }
    

    console.log(clientId);

    return (
        <div>
            <GoogleLogin
                classnames={classes.googleBtn}
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={successHandler}
                onFailure={failHandler}
                cookiePolicy="single_host_origin"
            />
        </div>
    );
};

// const mapDispatchToProps = dispatch => {
//     return {
//         postGoogleLoginHandler: response => dispatch(actions.postGoogleLoginHandler(response)),
//     };
// };

export default GoogleLoginButton;