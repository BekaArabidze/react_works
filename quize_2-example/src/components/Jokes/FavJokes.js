import React from 'react'
import { useSelector } from 'react-redux'


import { favJokes } from "../../redux/jokeSlice"


const FavJokes = () => {
    const favoriteJokes = useSelector(favJokes)

    return (
        <>
            <h1>Favorite Jokes</h1>
            <br />
            <br />
            {favoriteJokes.length === 0 ? <h1>no favorite jokes</h1>
                :
                favoriteJokes.map((joke) => (
                    <p key={joke.id}>{joke.joke}</p>
                ))}
        </>
    )
}

export default FavJokes