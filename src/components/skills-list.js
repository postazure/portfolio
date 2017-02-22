import React from "react"

export default class SkillsList extends React.Component {
  renderItem() {
    return this.props.items.map((item, i) => {
      return <li className="item" key={i}>{item.title}</li>
    })
  }

  render() {
    return (
      <ul className={this.props.className}>
        {this.renderItem()}
      </ul>
    )
  }
}