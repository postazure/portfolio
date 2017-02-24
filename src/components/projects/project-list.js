import React from 'react'
import ProjectCard from './project-card'

export default class ProjectList extends React.Component {
  render() {
    let projectCards = this.props.projects.map((project, i) => {
      return <ProjectCard {...project} key={i}/>
    });

    return (
      <div className="project-list">
        {projectCards}
      </div>
    )

  }
}