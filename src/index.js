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
import articleData from './data/articles.json'
import projectData from './data/projects.json'
const projectSections = projectData.sort(s => s.rank)

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
      <Route path="/" exact component={() => <AboutPreviewPanel {...profileData} articles={articleData}/>}/>
      <Route path="/projects/" component={ProjectPreviewPanel}/>
    </div>
  </Router>
)

ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker()
