import { AudioPlayer } from 'react-audio-play';

import React from 'react'

const Player = ({songurl}) => {
  return (
    <div className='fixed bottom-0 left-0 w-full'>
      <AudioPlayer src={songurl} width='100%' volume={20} autoPlay color='#86EFAC' sliderColor='#86EFAC' backgroundColor='#1F2937'/>
    </div>
  )
}

export default Player
