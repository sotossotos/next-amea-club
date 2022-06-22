export interface Streamer {
    is_live: boolean
    current_viewers:number
    username: string
    channel_url: string
    profile_pic:string
    followers: number
    subscriber_num: number
  }

export interface HomePageProps {
    streamersInfo: Streamer[]
  }

export interface SubLeaderboardProps {
    streamersInfo: Streamer[]
  }