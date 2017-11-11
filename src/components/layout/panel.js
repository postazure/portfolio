import React from 'react'
import classnames from 'classnames'
import './panel.css'

export default props => (
  <div className={classnames('panel', props.className, {border: props.bordered, pad: !props.fitted})}>
    {props.children}
  </div>
)