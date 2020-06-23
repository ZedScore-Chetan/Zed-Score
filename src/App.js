import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
// import classes from './App.module.css';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './containers/LoginPage/LoginPage';
import Training from './components/Training/Training';
import Layout from './hoc/Layout';
// import InnerNavBar from './components/InnerNavBar/InnerNavBar';
// import TrainingCard from './components/TrainingCard/TrainingCard';
// import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact render={() => <LandingPage />} />
        <Route path="/training" exact render={() => <Training />} />
        <Route path="/login" exact render={() => <LoginPage />} />
      </Switch>
    </Layout>
  );
}

export default App;
