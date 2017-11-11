import React from 'react'
import PropTypes from 'prop-types'
import './icon-link.css'
import { Icon } from 'react-fa'

const IconLink = ({icon, url, large=null}) => <a href={url} className='icon-link'><Icon name={icon} size={large ? '2x' : null}/></a>

IconLink.propTypes = {
  large: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default IconLink