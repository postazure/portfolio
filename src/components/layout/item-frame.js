import React from 'react'
import PropTypes from 'prop-types'
import './item-frame.css'
import classname from 'classnames'

const ItemFrame = props => <div className={classname('item-frame', props.size, props.className)}>{props.children}</div>

ItemFrame.size = {
  LARGE: 'large',
  SMALL: 'small'
}

ItemFrame.propTypes = {
  size: PropTypes.string.isRequired
}

export default ItemFrame