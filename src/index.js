import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ProfileCard from './components/profile-card/profile-card'
import Panel from './components/layout/panel'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProjectCollection from './components/project-collection/project-collection'

import profileData from './data/profile.json'
import projectData from './data/projects.json'
const projectSections = projectData.sort(s => s.rank)

const app = (
  <Router>
    <div className='container'>
      <div className='profile-column'>
        <ProfileCard {...profileData}/>
      </div>
      <div className='project-column'>
        {projectSections.map(section => (<ProjectCollection projects={section.projects} title={section.title}/>))}
      </div>
      <Panel bordered/>
    </div>
  </Router>
)

ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker()
