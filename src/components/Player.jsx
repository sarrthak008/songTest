import { AudioPlayer } from 'react-audio-play';

import React from 'react'

const Player = ({songurl}) => {
  document.title = songurl?.name ?  songurl?.name : "testSong"
  return (
    <div className='fixed -bottom-2 left-0 w-full mt-2 flex flex-col sm:w-[35%] sm:left-[50%] sm:translate-x-[-50%]'>
      <div className='flex w-full whitespace-nowrap text-sm ml-1 opacity-45'>current play <marquee>{songurl?.name}</marquee></div>
      <AudioPlayer src={songurl?.song_url} width='100%' volume={80} autoPlay color='#86EFAC' sliderColor='#86EFAC' backgroundColor='transparent' loop/>
    </div>
  )
}

export default Player
