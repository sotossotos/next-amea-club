import type { NextApiRequest, NextApiResponse } from "next"
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Streamer } from '../../utils/types'


const streamerInfo = async(req: NextApiRequest, res: NextApiResponse) => {

  const usernames:string[] = ['PerfectBalance1','AerakisMono','Parentalcontrol','panagiwwta_','diosicon','gusino','Sefiroman']
  const trovo_url = 'https://open-api.trovo.live/openplatform/channels/id'
  const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-type':'application/json',
        'Client-ID':process.env.TROVO_CLIENT_ID||'',
      }
    }
    const streamersInfo: any[] = []
    const axiosPosts: any[] = []
    for (const user of usernames){
      const json = {
        username:`${user}`
      }
      axiosPosts.push( axios.post(trovo_url,json,requestConfig))
    }

    const responses = await axios.all(axiosPosts)

    for (const response of responses){
      const {is_live,followers,subscriber_num,profile_pic,current_viewers,channel_url,username} = response.data
      const streamerInfo: Streamer = {is_live,username,profile_pic,followers,channel_url,current_viewers,subscriber_num}
      streamersInfo.push(streamerInfo)
    }
    res.send({
      streamersInfo
    })
}

export default streamerInfo