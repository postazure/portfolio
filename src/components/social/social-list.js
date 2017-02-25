import React from 'react'
import Icon from '../utils/icon'
import './social-list.scss'

export default class SocialList extends React.Component {
  renderItems() {
    return this.props.items.map((site, i) => {
      return (
        <li key={i}>
          <a href={site.url}>
            <Icon name={site.icon}/>
          </a>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="social-list">
        {this.renderItems()}
      </ul>
    )
  }
}