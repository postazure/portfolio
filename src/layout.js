import React, {Component} from 'react';
import './layout.css';

import ProfileCard from './components/profile-card'
import profileData from './data/profile';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="left-panel">
          <ProfileCard {...profileData}/>
          <div>Activity Feed</div>
        </div>
        <div className="view-panel">
          <div>View Panel</div>
        </div>
      </div>
    );
  }
}