import type { NextPage } from 'next'
import Head from 'next/head'
import YouTube, { YouTubeProps } from 'react-youtube';

const Home: NextPage = () => {

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      loop: 1
    },
  };
  return (
    <div>
      <Head>
        <title>Hayate-Network</title>
      </Head>
      Heys
      <YouTube videoId="B_Kb543yo38" opts={opts} onReady={onPlayerReady} />

    </div> 
  )
}

export default Home
