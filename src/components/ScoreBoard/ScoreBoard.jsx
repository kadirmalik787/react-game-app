import React from 'react'
import './score.css'

const ScoreBoard = ({xScore,oScore,tie,playing}) => {
  return (
    <div className='score'>
        <span className={`X ${playing===true? "xplay":""}`} >X - {xScore}</span>
        <span className={`O ${playing===false? "oplay":""}`} >O - {oScore}</span>
        <span className='T'>Tie - {tie}</span>
    </div>
  )
}

export default ScoreBoard