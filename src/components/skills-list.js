import React from "react"
import './skill-list.scss'
export default class SkillsList extends React.Component {
  renderItem() {
    return this.props.items.map((item, i) => {
      return <li key={i}>{item.title}</li>
    })
  }

  render() {
    return (
      <ul className="skill-list">
        {this.renderItem()}
      </ul>
    )
  }
}