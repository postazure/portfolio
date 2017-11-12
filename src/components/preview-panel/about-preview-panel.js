import React from 'react'
import PropTypes from 'prop-types'

export default class AboutPreviewPanel extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
  }

  render () {
    return (
      <div className='preview-panel about'>
        <h1 className='name'>{this.props.name}</h1>
        <div className='title'>{this.props.title}</div>
        <div className='summary'>{this.props.summary}</div>
      </div>
    )
  }
}