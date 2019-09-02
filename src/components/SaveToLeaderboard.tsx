/* eslint-disable import/no-duplicates */
/* eslint-disable react/prop-types */
/**
 * @name SaveToLeaderboard
 *
 * @param {string} kojiLeaderboardBackendUri - (required) The backend URL that has the `koji-leaderboard-api` activated.
 * @param {string} endpoint - (optional) If you have customized the leaderboard backend endpoint, what's the endpoint you wanna hit?
 */

import * as React from 'react'
import { useState } from 'react'

import { Props, defaultProps } from '../lib/constants'

/* eslint-disable prettier/prettier */
interface SuppliedDataInterface {
  name: string;
  score: number;
  privateAttributes?: object;
}
/* eslint-enable prettier/prettier */

const SaveToLeaderboard: React.FunctionComponent<Props> = props => {
  const [isSaving, setIsSaving]: [boolean, Function] = useState(false)
  const [isError, setIsError]: [boolean, Function] = useState(false)

  const { kojiLeaderboardBackendUri, endpoint } = props

  const saveData: Function = async (
    leaderboardSuppliedData: SuppliedDataInterface
  ) => {
    const body = {
      name: leaderboardSuppliedData.name,
      score: leaderboardSuppliedData.score,
      privateAttributes: leaderboardSuppliedData.privateAttributes,
    }

    setIsSaving(true)

    const saveResponse = await fetch(
      `${kojiLeaderboardBackendUri}/${endpoint}`,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    )
      .then(response => response.json())
      .catch(err => {
        setIsSaving(false)
        setIsError(true)

        const returnData = {
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
        }
        return returnData
      })

    setIsSaving(false)
    if (!saveResponse.success) {
      setIsError(true)
    }

    return saveResponse
  }

  return props.children(saveData, isSaving, isError)
}

SaveToLeaderboard.defaultProps = defaultProps

export { SaveToLeaderboard }
