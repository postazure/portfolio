import React from 'react'
import PropTypes from 'prop-types'
import './preview-panel.css'

import IconLink from '../icon-link/icon-link'

export default class ProjectPreviewPanel extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    video: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    host: PropTypes.string
  }

  renderPreview = () => (
    <div className='preview'>
      {
        this.props.video
          ? <iframe width="448" height="252" src={this.props.video} frameborder="0" allowfullscreen/>
          : <img src={this.props.picture} alt=''/>
      }
    </div>
  )

  renderTags = () => this.props.tags.map(tag => <div className='tag' key={tag}>{tag}</div>)

  render () {
    return (
      <div className='preview-panel projects'>
        <span className='header'>
          <h1 className='name'>{this.props.name}</h1>
          <div className='social'>
            {this.props.github ? <IconLink url={this.props.github} icon='github' large/> : null}
            {this.props.host ? <IconLink url={this.props.host} icon='chrome' large/> : null}
          </div>
        </span>

        <div className='content'>
          <div className='description'>{this.props.description}</div>
          {this.renderPreview()}
        </div>

        <div className="tags">
        {this.renderTags()}
        </div>
      </div>
    )
  }
}