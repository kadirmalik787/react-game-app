import React from 'react'
import Box from '../Box/Box'

import './board.css'

const Board = ({board,onCLick,id}) => {
  return (
    <div className='board'>
    {
        board.map((item,id)=>(
            <Box id={id} value={item} onClick={()=> item===null && onCLick(id)} />
        ))
    }

    </div>
  )
}

export default Board