import React from 'react'
import HEARTGIF from "../assets/heart.gif"

const LikeAnimation = () => {
  return (
    <div className='top-[50%] left-[50%] absolute -translate-x-[50%] -translate-y-[50%] animate-pulse'>
      <img src={HEARTGIF} className='h-28 opacity-85'></img>
    </div>
  )
}

export default LikeAnimation
