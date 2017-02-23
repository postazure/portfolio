import React from 'react'
import {Router, Route, browserHistory} from 'react-router'

import './main-view.scss'

export default class MainView extends React.Component {
  render() {
    return (
      <div className="main-view">
        <Router history={browserHistory}>
          <Route path="/" component={props => <div>About</div>}/>
          <Route path="apps" component={props => <div>Apps</div>}/>
          <Route path="games" component={props => <div>Games</div>}/>
        </Router>
      </div>
    )
  }
}