import React, { Component } from 'react'

import GetLeaderboard from './GetLeaderboard'
import SaveToLeaderboard from './SaveToLeaderboard'

export default class App extends Component {
  render () {
    return (
      <React.Fragment>
        <GetLeaderboard />
        <SaveToLeaderboard />
      </React.Fragment>
    )
  }
}
