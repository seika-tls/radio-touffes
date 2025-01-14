import React, { Component } from 'react'

export class Chat extends Component {
  render () {
    return (
      <div id='chat' className={this.props.showChat ? '' : 'd-none'}>
        <iframe src={`https://www.twitch.tv/embed/${this.props.host ?? this.props.channel}/chat?darkpopout&parent=${window.location.hostname}`} style={{zIndex: 11000}} />
      </div>
    )
  }
}
