import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router'

import './layout.scss';

import ProfileCard from './components/profile/profile-card'
import profileData from './data/profile';

import MainView from './components/main-view/main-view'
import AppsView from './views/apps'

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="left-panel">
          <ProfileCard {...profileData}/>
          <div>Activity Feed</div>
        </div>
        <div className="view-panel">
          <Router history={browserHistory}>
            <Route path="/" component={props => <MainView {...props}>About</MainView>}/>
            <Route path="apps" component={props => <MainView {...props}><AppsView/></MainView>}/>
            <Route path="games" component={props => <MainView {...props}>Games</MainView>}/>
          </Router>
        </div>
      </div>
    );
  }
}