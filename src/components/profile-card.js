import React from "react"
import List from "./skills-list"

export default class ProfileCard extends React.Component {
  render() {
    return (
      <div className="profile-card">
        <h1 className="name">{this.props.name}</h1>
        <h2 className="title">{this.props.title}</h2>
        <div className="company-name">{this.props.company}</div>

        <List items={this.props.skills} className="skill-list"/>
        <div>Social List</div>
      </div>
    )
  }
}