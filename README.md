# koji-react-leaderboard

> The React Render Prop Component that fetches Leaderboard from the Koji Backend

[![NPM](https://img.shields.io/npm/v/koji-react-leaderboard.svg)](https://www.npmjs.com/package/koji-react-leaderboard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-AirBnB--TypeScript-brightgreen.svg)](https://github.com/KumarAbhirup/koji-react-leaderboard/blob/master/.eslintrc)

## Install

```bash
npm install --save koji-react-leaderboard
```

## Library

- **GetLeaderboard** React Component
- **SaveToLeaderboard** React Component

## Usage

### GetLeaderboard

```jsx
import React, { Component } from 'react'

import { GetLeaderboard } from 'koji-react-leaderboard'

class YourComponent extends Component {
  render () {
    return (
      <GetLeaderboard>
        {({ scores }, loading, error) => (
          (loading && !error) && <div>It's loading.</div>

          (!loading && !error) && (
              <div class="container">
              { scores.map(({ name, score }, index) => (
                <li key={index}>
                  Name: { name }
                  <br />
                  Score: { score }
                </li>
              )) }
            </div>
          )

          error && <div>Error occured: { error.message }</div>
        )}
      </GetLeaderboard>
    )
  }
}
```

## License

MIT © [KumarAbhirup](https://github.com/KumarAbhirup)
