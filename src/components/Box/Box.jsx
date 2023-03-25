import React from 'react'
import './box.css'

const Box = ({value,onClick, id}) => {
  return (
    <>
    <button key={id} onClick={onClick} className={`box ${value==="X"?'x':"o" }`}>{value}</button>
    </>
  )
}

export default Box