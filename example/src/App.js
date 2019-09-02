import React, { Component } from 'react'

import { GetLeaderboard, SaveToLeaderboard } from 'koji-react-leaderboard'

export default class App extends Component {
  render () {
    return (
      <div>
        <GetLeaderboard></GetLeaderboard>
        <SaveToLeaderboard></SaveToLeaderboard>
      </div>
    )
  }
}
