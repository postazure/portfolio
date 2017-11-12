import React from 'react'
import PropTypes from 'prop-types'
import ItemFrameLink from '../item-frame/item-frame-link'
import classnames from 'classnames'
import './project-collection.css'

const buildPathInfo = (project, section) => {
  return {
    pathname: `/projects/${section}/${project.name.replace(/\s/g, '+')}`,
    state: project
  }
}

const ProjectItem = props => {
  const to = buildPathInfo(props.project, props.section)

  return (
    <ItemFrameLink size={ItemFrameLink.size.SMALL} className='project' to={to}>
      <img src={props.project.picture} alt={props.project.name}/>
    </ItemFrameLink>
  )
}

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  video: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  github: PropTypes.string,
  host: PropTypes.string
}

export default class ProjectCollection extends React.Component {

  renderProjectMenu = () => {
    let classes = classnames('menu')
    const projects = this.props.projects
      .map(p => <ProjectItem project={p} section={this.props.title} key={p.github}/>)
    return <div className={classes}>{projects}</div>
  }

  render () {
    return (
      <div className='project-collection'>
        <h2>/{this.props.title}</h2>
        <div className='interactive'>
          {this.renderProjectMenu()}
        </div>
      </div>
    )
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape(ProjectItem.propTypes)).isRequired
  }
}
