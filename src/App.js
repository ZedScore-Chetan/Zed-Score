import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
// import classes from './App.module.css';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './containers/LoginPage/LoginPage';
import Training from './components/Training/Training';
import Library from './components/Library/Library';
import DigitalMarketing from './components/DigitalMarketing/DigitalMarketing';
import Profile from './components/Profile/Profile';
// import Layout from './hoc/Layout';
// import InnerNavBar from './components/InnerNavBar/InnerNavBar';
// import TrainingCard from './components/TrainingCard/TrainingCard';
// import NavBar from './components/NavBar/NavBar';

function App() {

  useEffect(() => {
    fetch('https://clearquantstest.herokuapp.com/api/v1/blog-list/', { method: "GET" })
    .then(res => res.json())
    .then(data => console.log(data))
    // .then(res => console.log(res.json()))
      // .then(data => console.log(data))
  })

  return (

    <Switch>
      <Route path="/" exact render={() => <LandingPage />} />
      <Route path="/training" exact render={() => <Training />} />
      <Route path="/login" exact render={() => <LoginPage />} />
      <Route path="/library" render={() => <Library />} />
      <Route path="/profile" render={() => <Profile />} />
      <Route path="/marketing" render={() => <DigitalMarketing />} />
    </Switch>

  );
}

export default App;
