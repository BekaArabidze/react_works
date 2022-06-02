import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"

import Joke from './Joke'
import { deleteJoke, deleteAllJokes, addJoke, updateJoke, selectAllJokes, fetchJokes } from "../../redux/jokeSlice"

import "./joke.scss"




const Jokes = () => {
    const [addNewJoke, setAddNewJoke] = useState("")
    const dispatch = useDispatch()
    const jokes = useSelector(selectAllJokes)


    const status = useSelector(state => state.jokes.status)
    const error = useSelector(state => state.jokes.error)

    const handleSubmit = () => {
        dispatch(addJoke(addNewJoke))
    }


    const update = (id, updatedJoke) => {
        dispatch(updateJoke({ id, updatedJoke }))
    }

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchJokes())
        }
    }, [status, dispatch])


    if (error) {
        return <h1>Error....</h1>
    }


    return (
        <div className='todo'>
            <Link to="/favjokes">Favorite Jokes</Link>


            <h1>Add Todo</h1>
            <input type="text" value={addNewJoke} onChange={(e) => setAddNewJoke(e.target.value)} />
            <br />
            <br />

            <button onClick={() => handleSubmit()}>add todo</button>
            <br />
            <br />
            <br />
            {status == "loading" ? <h1>Loading....</h1>
                : jokes.map((joke) => (
                    <Joke
                        key={joke.id}
                        id={joke.id}
                        joke={joke.joke}
                        deleteJoke={() => dispatch(deleteJoke(joke.id))}
                        updateJoke={update}
                    />
                ))}



            <br />
            <br />
            <br />
            {
                jokes.length === 0 ? 'No more jokes'
                    :
                    <button onClick={() => dispatch(deleteAllJokes())}>Delete All jokes</button>
            }
        </div>
    )
}

export default Jokes