import React from "react"
import './profile-card.scss'

import SkillsList from "../skills/skills-list"

export default class ProfileCard extends React.Component {
  render() {
    return (
      <div className="profile-card">
        <h1 className="name">{this.props.name}</h1>
        <h2 className="title">{this.props.title}</h2>
        <h3 className="company-name">{this.props.company}</h3>

        <SkillsList items={this.props.skills}/>
        <hr/>
        <div>Social List</div>
      </div>
    )
  }
}