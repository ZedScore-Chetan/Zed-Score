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
import DemoBooking from './components/DemoBooking/DemoBooking';
// import Layout from './hoc/Layout';
// import InnerNavBar from './components/InnerNavBar/InnerNavBar';
// import TrainingCard from './components/TrainingCard/TrainingCard';
// import NavBar from './components/NavBar/NavBar';

const App = props => {

  // useEffect(() => {
  //   let obj = {
  //     oid: "12345",
  //     amount: "200",
  //     mobile: "9873590730",
  //     email: "chiragwadhwa.55555@gmail.com",
  //     callback_url: "http://localhost:3000/",
  //     payment_mode_only: "NO",
  //     auth_mode: "3D",
  //     payment_type_id: "CC",
  //   }
  //   fetch('https://clearquantstest.herokuapp.com/paytm-pay-now/', {
  //     method: "POST",
  //     body: JSON.stringify(obj),
  //   })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // })

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
      <Route path="/demo" render={() => <DemoBooking />} />
    </Switch>

  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(App);
