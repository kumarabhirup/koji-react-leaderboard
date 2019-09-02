import React, { Component } from 'react'

import { GetLeaderboard } from 'koji-react-leaderboard'

export default class App extends Component {
  render () {
    return (
      <React.Fragment>
        <GetLeaderboard kojiLeaderboardBackendUri="http://localhost:3333">
          {(data, isLoading, isError) => {
            if (data.scores && !isLoading && !isError) {
              return (
                <div className="container">
                  { data.scores.map(({ name, score }, index) => (
                    <li key={index}>
                      Name: { name } | Score: { score }
                    </li>
                  )) }
                </div>
              )
            }

            if (data.error && !isLoading && isError) {
              return <h2>Error occured. {data.error.message}</h2>
            }

            return <h2>Loading...</h2>
          }}
        </GetLeaderboard>
      </React.Fragment>
    )
  }
}
