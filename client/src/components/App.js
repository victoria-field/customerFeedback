import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
// * means take all actions
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/surveynew';




class App extends Component {

componentDidMount(){
  this.props.fetchUser();

}

  render(){
    return (
      <div className="container">
        <BrowserRouter>

          <div className="container">
            <Header />
            <Route exact path="/" component ={Landing} />
            <Route exact path="/surveys" component = {Dashboard} />
            <Route exact path = "/surveys/new" component = {SurveyNew} />


          </div>

        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions) (App);
