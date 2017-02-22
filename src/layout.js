import React, { Component } from 'react';
import './layout.css';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="left-panel">
          <div>Profile Card</div>
          <div>Activity Feed</div>
        </div>
        <div className="view-panel">
          <div>View Panel</div>
        </div>
      </div>
    );
  }
}