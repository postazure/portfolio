import React from 'react'
import PropTypes from 'prop-types'
import './item-frame.css'
import classname from 'classnames'
import { NavLink } from 'react-router-dom'

const ItemFrameLink = props => (
  <NavLink className={classname('item-frame', props.size, props.className)}
           to={props.to}
           activeClassName='selected'>
    {props.children}
  </NavLink>
)

ItemFrameLink.size = {
  LARGE: 'large',
  SMALL: 'small'
}

ItemFrameLink.propTypes = {
  size: PropTypes.string.isRequired
}

export default ItemFrameLink