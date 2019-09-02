/* eslint-disable import/no-duplicates */
/* eslint-disable react/prop-types */
/**
 * @name GetLeaderboard
 *
 * @param {string} kojiLeaderboardBackendUri - (required) The backend URL that has the `koji-leaderboard-api` activated.
 * @param {string} endpoint - (optional) If you have customized the leaderboard backend endpoint, what's the endpoint you wanna hit?
 */

import * as React from 'react'
import { useState, useEffect } from 'react'

/* eslint-disable prettier/prettier */
interface Props {
  kojiLeaderboardBackendUri: string | null;
  endpoint?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
}
/* eslint-enable prettier/prettier */

const defaultProps: Props = {
  kojiLeaderboardBackendUri: null,
  endpoint: 'leaderboard',
}

const GetLeaderboard: React.FunctionComponent<Props> = props => {
  const [isLoading, setIsLoading]: [boolean, Function] = useState(false)
  const [isError, setIsError]: [boolean, Function] = useState(false)
  const [data, setData]: [object, Function] = useState({})

  const { kojiLeaderboardBackendUri, endpoint } = props

  useEffect(() => {
    setIsLoading(true)

    fetch(`${kojiLeaderboardBackendUri}/${endpoint}`)
      .then(response => response.json())

      .then(response => {
        if (!response.success) {
          setIsError(true)
        }
        setIsLoading(false)
        setData(response)
      })

      .catch(err => {
        setIsError(true)
        setIsLoading(false)
        setData({
          success: false,
          error: {
            message: err.stack,
            developerNotice:
              'Please read the documentation carefully and provide the correct parameters.',
            apiDocumentationURL:
              'https://github.com/KumarAbhirup/koji-leaderboard-api',
            reactApiDocumentationURL:
              'https://github.com/KumarAbhirup/koji-react-leaderboard',
          },
        })

        // throw new Error(`Fetch Error: ${err}`)
      })
  }, [kojiLeaderboardBackendUri, endpoint])

  return props.children(data, isLoading, isError)
}

GetLeaderboard.defaultProps = defaultProps

export { GetLeaderboard }
