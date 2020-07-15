import React from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';

import classes from './GoogleLogin.module.css';
import * as actions from '../../store/actions/index';

const GoogleLoginButton = props => {

    const clientId = "977428861370-m6st2jfuc1e6h5hu90nvgjk6oi0hk2a8.apps.googleusercontent.com";
    const successHandler = response => {
        console.log(response)
        // props.postGoogleLoginHandler(response);
        console.log(response.tokenId)
        let obj = {
            grant_type: 'convert_token',
            client_id: '7ccCC33quZkSYGuWmqZoUvkrYKDoY4gGBtQNhktW',
            // client_secret: 'hOV5ExTK4YkfkIMUQ6dZM10NFw8cNQ5KbFw1IEoqTYzoqFL7AxbSiyC0I8WYIjOCkZ2e71k5kkwOeDCLFg4Ivx2yR7hLqjnCjM7OwLNE4HAcQSqdslExR1uTVg4CG6ZI',
            backend: 'google-oauth2',
            token: response.accessToken,
        }
        console.log(obj);
        props.GoogleLogin(obj);
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

const mapDispatchToProps = dispatch => {
    return {
        GoogleLogin: (data) => dispatch(actions.GoogleLogin(data)),
    };
};

export default connect(null, mapDispatchToProps)(GoogleLoginButton);