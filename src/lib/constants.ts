/* eslint-disable prettier/prettier */

export interface Props {
  kojiLeaderboardBackendUri: string | null;
  endpoint?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
}

export const defaultProps: Props = {
  kojiLeaderboardBackendUri: null,
  endpoint: 'leaderboard',
}