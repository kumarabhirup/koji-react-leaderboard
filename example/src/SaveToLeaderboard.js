import React, { Component } from 'react'

import { SaveToLeaderboard } from 'koji-react-leaderboard'

export default class SaveToLeaderboardComponent extends Component {
  state = { data: null }
  
  submitData = async (e, saveData) => {
    e.preventDefault()

    const response = await saveData({
      name: 'ScreamerPlays',
      score: 890,
    })

    this.setState({ data: response })
  }

  render() {
    return (
      <SaveToLeaderboard kojiLeaderboardBackendUri="http://localhost:3333">
        {(saveData, isLoading, isError) => {
          return (
            <React.Fragment>
              <button onClick={e => this.submitData(e, saveData)}>Submit data</button>
              {isLoading && <h2>Loading...</h2>}
              {isError && <h2>Error</h2>}
            </React.Fragment>
          )
        }}
      </SaveToLeaderboard>
    )
  }
}
