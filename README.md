# `🦋 koji-react-leaderboard`

> The React Render Prop Component that fetches Leaderboard from the Koji Backend

[![NPM](https://img.shields.io/npm/v/koji-react-leaderboard.svg)](https://www.npmjs.com/package/koji-react-leaderboard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-AirBnB--TypeScript-brightgreen.svg)](https://github.com/KumarAbhirup/koji-react-leaderboard/blob/master/.eslintrc)

## 📦 Install

```bash
npm install --save koji-react-leaderboard
```

## 📚 Library

- **GetLeaderboard** React Component
- **SaveToLeaderboard** React Component

## 🖥️ Usage

### GetLeaderboard

#### Props

- `kojiLeaderboardBackendUri` 👉 (**required**) The Koji backend URL that has [Koji Leaderboard API](https://www.npmjs.com/package/koji-leaderboard-api) activated. `eg. Koji.config.serviceMap.backend`
- `endpoint` 👉 (**optional**) The backend endpoint that you want to hit to Get the Leaderboard Data `Default: 'leaderboard'`

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

## 📝 License

MIT © [KumarAbhirup](https://github.com/KumarAbhirup)
