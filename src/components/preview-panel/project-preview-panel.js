import React from 'react'

export default class ProjectPreviewPanel extends React.PureComponent {
  render () {
    let project = this.props.location.state
    console.log(project)
    return (
      <div>PreviewPanel</div>
    )
  }
}