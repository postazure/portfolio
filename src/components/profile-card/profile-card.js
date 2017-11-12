import React from 'react'
import PropTypes from 'prop-types'
import './profile-card.css'

import ItemFrameLink from '../item-frame/item-frame-link'
import IconLink from '../icon-link/icon-link'

export default class ProfileCard extends React.Component {
  static propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  }

  render () {
    return (
      <div className='profile-card'>
        <ItemFrameLink size={ItemFrameLink.size.LARGE} to='/about'>
          <img src={this.props.picture} alt=''/>
        </ItemFrameLink>

        <h1 className='name'>{this.props.name}</h1>
        <div className='email'>{this.props.email}</div>
        <div className='contact'>
          <div className='company'>{this.props.company}</div>
          <div className='title'>{this.props.title}</div>
          <div className='location'>{this.props.location}</div>
        </div>
        <div className='social'>
          <IconLink url={this.props.linkedin} icon='linkedin' large/>
          <IconLink url={this.props.github} icon='github' large/>
        </div>
      </div>
    )
  }
}