import React from 'react'
import PropTypes from 'prop-types'
import './profile-card.css'

import ItemFrame from '../layout/item-frame'
import IconLink from '../icon-link/icon-link'

export default class ProfileCard extends React.PureComponent {
  static propTypes = {
    profilePicUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  }

  render () {
    return (
      <div className='profile-card'>
        <ItemFrame size={ItemFrame.size.LARGE}>
          <img src={this.props.profilePicUrl} alt=""/>
        </ItemFrame>

        <h1 className='name'>{this.props.name}</h1>
        <div className='company'>{this.props.company}</div>
        <div className='title'>{this.props.title}</div>
        <div className='location'>{this.props.location}</div>
        <div className='social'>
          <IconLink url={this.props.linkedin} icon='linkedin' large/>
          <IconLink url={this.props.github} icon='github' large/>
        </div>
      </div>
    )
  }
}