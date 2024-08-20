// components/YouTubeEmbed.js
import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import { hold } from '../lib/waiter';

const YouTubeEmbed = ({ videoId, onPlay, onEnd, idx }:{
    videoId:string,
    onPlay:Function,
    onEnd:Function,
    idx:number
}) => {
  const playerRef:any = useRef(null);

  const opts = {
    height: '500',
    width: '800',
    playerVars: {
      autoplay: 0,  // Autoplay the video
      mute: 1,   
      controls:0
    },
  };

  const onReady = (event:Event) => {
    playerRef.current = event.target;

    playerRef.current?.playVideo()
  };

  const unmuteVideo = () => {
    if (playerRef.current) {
      if(playerRef.current.isMuted())
        playerRef.current.unMute();
      else
        playerRef.current.mute();
    }
  };

  useEffect(()=>{
    hold(3000).then(()=>{
      playerRef.current?.mute()
      playerRef.current?.playVideo()
    })
  },[idx])


  return (
    <div className="relative size-fit [&>*]:scale-y-[1.7] [&>*]:scale-x-150">
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        onPlay={onPlay}
        onEnd={onEnd}
      />
      <button className='absolute bottom-16 right-10 sm:opacity-25 opacity-35 text-xs' onClick={unmuteVideo}>unmute</button>
    </div>
  );
};

export default YouTubeEmbed;
