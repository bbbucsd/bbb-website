import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Preview from './Preview';
import Help from './Help';
import Page from './Page';
import Home from './Home';
import About from './About';
import Volunteer from './Volunteer';

const App = (props) => (
  <main>
    <Router>
      <Switch>
        <Route exact path="/help" component={Help} />
        <Route exact path="/" render={routeProps => <Home {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/about" render={routeProps => <About {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/volunteer" render={routeProps => <Volunteer {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/page/:uid" render={routeProps => <Page {...routeProps} prismicCtx={props.prismicCtx} />} />
      </Switch>
    </Router>
  </main>
);

export default App;
