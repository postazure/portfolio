import React from 'react'
import PropTypes from 'prop-types'
import ItemFrame from '../item-frame/item-frame'
import classnames from 'classnames'
import './project-collection.css'
import {Link} from 'react-router-dom'

const ProjectItem = props => (
  <ItemFrame size={ItemFrame.size.SMALL} className={classnames('project', {selected: props.selected})}>
    <img src={props.picture} alt={props.name}/>
  </ItemFrame>
)

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  video: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  github: PropTypes.string,
  host: PropTypes.string
}
const buildPathInfo = project => ({pathname: `/projects/${project.name.replace(' ', '+')}`, state: project})

export default class ProjectCollection extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      selected: props.projects[0]
    }
  }

  handleClick = (project) => {this.setState({selected: project})}

  renderSelectedProject = () => <div><ProjectItem selected {...this.state.selected}/></div>

  renderProjectMenu = () => {
    let classes = classnames('menu')
    const projects = this.props.projects
      .filter(p => p.github !== this.state.selected.github)
      .map(p => <Link to={buildPathInfo(p)} key={p.github} onClick={() => this.handleClick(p)}><ProjectItem {...p}/></Link>)
    return <div className={classes}>{projects}</div>
  }

  render () {
    return (
      <div className='project-collection'>
        <h2>/{this.props.title}</h2>
        <div className='interactive'>
          {this.renderSelectedProject()}
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
