import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// import logo from './logo.svg';
// import classes from './App.module.css';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './containers/LoginPage/LoginPage';
import Training from './components/Training/Training';
import Library from './components/Library/Library';
import DigitalMarketing from './components/DigitalMarketing/DigitalMarketing';
import Profile from './components/Profile/Profile';
import Blogs from './components/Blogs/Blogs';
import BlogContent from './components/BlogContent/BlogContent';
// import Layout from './hoc/Layout';
// import InnerNavBar from './components/InnerNavBar/InnerNavBar';
// import TrainingCard from './components/TrainingCard/TrainingCard';
// import NavBar from './components/NavBar/NavBar';

const App = props => {

  useEffect(() => {
    let obj = {
      oid: "000654",
      amount: "200",
      mobile: "9873590730",
      email: "chiragwadhwa.55555@gmail.com",
      callback_url: "https://clearquantstest.herokuapp.com/paytm/response/",
      payment_mode_only: "No",
      auth_mode: "3D",
      payment_type_id: "CC",
    }
    if (localStorage.getItem('token')) {
      console.log(localStorage.getItem('token'))
      fetch('https://clearquantstest.herokuapp.com/paytm/request/', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        credentials: "include",
      })
        .then(res => {
          console.log(res);
          return res.body
        })
        .then(body => console.log(body))
        .catch(err => console.log(err));
    }
  })

  return (

    <Switch>
      <Route path="/" exact render={() => <LandingPage />} />
      <Route path="/training" exact render={() => <Training />} />
      <Route path="/login" exact render={() => <LoginPage />} />
      <Route path="/library" render={() => <Library />} />
      <Route path="/profile" render={() => <Profile />} />
      <Route path="/marketing" render={() => <DigitalMarketing />} />
      <Route path="/blogs" exact render={() => <Blogs />} />
      <Route path="/blogs/content" render={() => <BlogContent />} />
    </Switch>

  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(App);
