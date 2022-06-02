import React from 'react'
import { GlobalContext } from '../context/NewsContext'


const Input = () => {
    const {handleInput,query} = GlobalContext()
  return (
    <>
        <input type="text" value={query} onChange={(e) => handleInput(e.target.value)} />
    </>
  )
}

export default Input