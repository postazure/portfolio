import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ProfileCard from './components/profile-card/profile-card'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProjectCollection from './components/project-collection/project-collection'
import ProjectPreviewPanel from './components/preview-panel/project-preview-panel'
import AboutPreviewPanel from './components/preview-panel/about-preview-panel'

import profileData from './data/profile.json'
import projectData from './data/projects.json'

const projectSections = projectData.sort(s => s.rank)

const findProjectIfNeeded = (routeState) => {
  if (routeState.location.state.name) {
    return routeState.location.state
  }
  let projecNameFromRoute = routeState.match.params.projectName.replace('+', ' ')
  return projectData[routeState.match.params.sectionName].projects.find(p => p.name === projecNameFromRoute)
}

const app = (
  <Router>
    <div className='container'>
      <div className='profile-column'>
        <ProfileCard {...profileData}/>
      </div>
      <div className='project-column'>
        {projectSections.map(section => (
          <ProjectCollection projects={section.projects} title={section.title} key={section.rank}/>))}
      </div>
      <div className='preview-column'>
        <Route path='/' exact
               component={props => <AboutPreviewPanel {...props} {...profileData}/>}/>
        <Route path='/projects/:sectionName/:projectName'
               component={props => <ProjectPreviewPanel {...findProjectIfNeeded(props)}/>}/>
      </div>
    </div>
  </Router>
)

ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker()
