import React from 'react'

import ProjectList from '../components/projects/project-list'
import appData from '../data/apps'

export default class Apps extends React.Component {
  render() {
    return (
      <div className="app-view">
        <ProjectList projects={appData}/>
      </div>
    )
  }
}