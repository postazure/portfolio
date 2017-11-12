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

export default class ProjectCollection extends React.PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      selected: {}
    }
  }

  buildPathInfo = project => ({pathname: `/projects/${this.props.title}/${project.name.replace(/\s/g, '+')}`, state: project})

  handleClick = (project) => {this.setState({selected: project})}

  renderProjectMenu = () => {
    let classes = classnames('menu')
    const projects = this.props.projects
      .map(p => <Link to={this.buildPathInfo(p)} key={p.github} onClick={()=>this.handleClick(p)}><ProjectItem {...p} selected={p.github === this.state.selected.github}/></Link>)
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
