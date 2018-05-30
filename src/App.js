import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Preview from './Preview';
import Help from './Help';
import NotFound from './NotFound';
import Page from './Page';
import Home from './Home';
import About from './About';

const App = (props) => (
  <main>
    <Header prismicCtx={props.prismicCtx} />
    <Router>
      <Switch>
        <Route exact path="/help" component={Help} />
        <Route exact path="/" render={routeProps => <Home {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/about" render={routeProps => <About {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/page/:uid" render={routeProps => <Page {...routeProps} prismicCtx={props.prismicCtx} />} />
      </Switch>
    </Router>
    <Footer prismicCtx={props.prismicCtx} />
  </main>
);

export default App;
