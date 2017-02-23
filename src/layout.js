import React, {Component} from 'react';
import './layout.scss';

import ProfileCard from './components/profile/profile-card'
import profileData from './data/profile';

import MainView from './components/main-view/main-view'

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <div className="left-panel">
          <ProfileCard {...profileData}/>
          <div>Activity Feed</div>
        </div>
        <div className="view-panel">
          <MainView/>
        </div>
      </div>
    );
  }
}