import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
// import classes from './App.module.css';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './containers/LoginPage/LoginPage';
// import Training from './components/Training/Training';
// import InnerNavBar from './components/InnerNavBar/InnerNavBar';
// import TrainingCard from './components/TrainingCard/TrainingCard';
// import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
