import React from 'react'

export default class ProjectCard extends React.Component {
  render() {
    return (
      <div className="project-card">
        <h1>{this.props.name}</h1>
        <h2>{this.props.tech.join(', ')}</h2>
        <div>{this.props.description}</div>
      </div>
    )
  }
}