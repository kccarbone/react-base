import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, withRouter } from 'react-router-dom';
import * as appActions from '../Actions/app';
import Home from './Home';
import SubPage from './SubPage';
import '../Styles/App.css';

const App = props => (
  <div className="app-wrapper">
    <h1>Base App</h1>
    <Route path="/" exact component={Home} />
    <Route path="/SubPage" component={SubPage} />
    <p className="app-state" onClick={props.appActions.testSetAction}>
      Current state: {props.app.current}
    </p>
  </div>
);

export default withRouter(connect(
  ({ app }) => ({ app }),
  dispatch => ({ appActions: bindActionCreators(appActions, dispatch) })
)(App));