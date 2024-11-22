import { AudioPlayer } from 'react-audio-play';

import React from 'react'

const Player = ({songurl}) => {
  return (
    <div className='fixed -bottom-2 left-0 w-full'>
      <AudioPlayer src={songurl} width='100%' volume={20} autoPlay color='#86EFAC' sliderColor='#86EFAC' backgroundColor='transparent'/>
    </div>
  )
}

export default Player
