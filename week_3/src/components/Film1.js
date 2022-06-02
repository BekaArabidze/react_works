import React from 'react'
import { useContext } from "react"
import { FilmContext } from "../context/FilmContext"


export default function Film1() {
    const {films,log} = useContext(FilmContext)

    

  return (
    <>
    <button onClick={log}>click</button>
        {films.map((el,i) => (
                <h1>{el.filmName}</h1>
        ))}
    </>
  )
}
