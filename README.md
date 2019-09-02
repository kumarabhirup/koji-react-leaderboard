# `🦋 koji-react-leaderboard`

> React Render Prop Components that fetch and save Leaderboard data to and from the Koji Backend.

[![Type](https://img.shields.io/badge/type-React%20Component-yellow.svg?style=flat-square)](https://www.npmjs.com/package/koji-react-leaderboard)
[![stage](https://img.shields.io/badge/stage-BetaTesting%20%F0%9F%94%A5-000000.svg?style=flat-square)](https://github.com/KumarAbhirup/koji-react-leaderboard)
[![NPM](https://img.shields.io/npm/v/koji-react-leaderboard.svg)](https://www.npmjs.com/package/koji-react-leaderboard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-Airbnb-brightgreen.svg)](https://github.com/KumarAbhirup/koji-react-leaderboard/blob/master/.eslintrc)
[![Prefers](https://img.shields.io/badge/prefers-NPM%20Installation-blue.svg?style=flat-square)](https://www.npmjs.com/package/koji-react-leaderboard)
![Twitter](https://img.shields.io/twitter/follow/kumar_abhirup.svg?style=social&label=@kumar_abhirup)

## 📦 Install

```bash
npm install -S koji-react-leaderboard
```

## 📚 Library

> **Please Note:** This library is made only for those Koji users who have [Koji Leaderboard API](https://www.npmjs.com/package/koji-leaderboard-api) already setup on the Koji Backend.

- **GetLeaderboard** React Component
- **SaveToLeaderboard** React Component

## 🖥️ Usage

### `<GetLeaderboard />` Component

#### Props

- `kojiLeaderboardBackendUri` 👉 (**required**) The Koji backend URL that has [Koji Leaderboard API](https://www.npmjs.com/package/koji-leaderboard-api) activated. `eg. Koji.config.serviceMap.backend`
- `endpoint` 👉 (**optional**) The backend endpoint that you want to hit to get the Leaderboard Data. `Default: 'leaderboard'`

#### Example

```jsx
import React, { Component } from 'react'

import { GetLeaderboard } from 'koji-react-leaderboard'

class YourComponent extends Component {
  render () {
    return (
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
    )
  }
}
```

### `<SaveToLeaderboard />` Component

#### Props

- `kojiLeaderboardBackendUri` 👉 (**required**) The Koji backend URL that has [Koji Leaderboard API](https://www.npmjs.com/package/koji-leaderboard-api) activated. `eg. Koji.config.serviceMap.backend`
- `endpoint` 👉 (**optional**) The backend endpoint that you want to hit to save the Leaderboard Data. `Default: 'leaderboard'`

#### Example

```jsx
import React, { Component } from 'react'

import { SaveToLeaderboard } from 'koji-react-leaderboard'

class YourComponent extends Component {
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
```

# 📝 License

**MIT © [Kumar Abhirup](https://www.twitter.com/kumar_abhirup)**
<br />
_Follow me 👋 **on Twitter**_ →   [![Twitter](https://img.shields.io/twitter/follow/kumar_abhirup.svg?style=social&label=@kumar_abhirup)](https://twitter.com/kumar_abhirup/)
