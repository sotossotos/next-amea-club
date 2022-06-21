import type { NextApiRequest, NextApiResponse } from "next"
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

interface Streamer {
  is_live: boolean
  current_viewers:number
  username: string
  channel_url: string
  profile_pic:string
  followers: number
  subscriber_num: number
}

const streamerInfo = async(req: NextApiRequest, res: NextApiResponse) => {

  const usernames:string[] = ['PerfectBalance1','AerakisMono','Parentalcontrol','panagiwwta_','diosicon','gusino','Sefiroman']
  const trovo_url = 'https://open-api.trovo.live/openplatform/channels/id'
  const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-type':'application/json',
        'Client-ID':process.env.TROVO_CLIENT_ID||'',
      }
    }
    const allResp: any[] = []
    for (const user of usernames){
      const json = {
        username:`${user}`
      }
      const res = await axios.post(trovo_url,json,requestConfig)
      const {is_live,followers,subscriber_num,profile_pic,current_viewers,channel_url,username} = res.data
      const streamerInfo: Streamer = {is_live,username,profile_pic,followers,channel_url,current_viewers,subscriber_num}
      allResp.push(streamerInfo)
    }
    res.send({
      streamersInfo:[...allResp]
    })
}

export default streamerInfo