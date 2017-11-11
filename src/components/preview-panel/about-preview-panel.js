import React from 'react'

export default class AboutPreviewPanel extends React.PureComponent {

  renderArticles = () => {
    this.props.articles
      .sort(a => a.rank)
      .map(a => (
        <div className='article'>
          <h2>{a.title}</h2>
          {a.content.map((c, i) => <div key={i}>{c}</div>)}
        </div>))
  }

  render () {
    return (
      <div className='preview-panel about'>
        <h1 className='name'>{this.props.name}</h1>
        <div className='title'>{this.props.title}</div>
        <div className='summary'>{this.props.summary}</div>
        {this.renderArticles()}
      </div>
    )
  }
}