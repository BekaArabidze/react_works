import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addToFavoriteJokes } from "../../redux/jokeSlice"



const Joke = ({ id, joke, deleteJoke, updateJoke }) => {
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)
    const [editJoke, setEditJoke] = useState(joke)



    const handleUpdate = () => {
        updateJoke(id, editJoke)
        setToggle(false)
    }


    return (
        <>
            {toggle ?
                <>
                    <h1>Update Joke</h1>
                    <input type="text" value={editJoke} onChange={(e) => setEditJoke(e.target.value)} />
                    <br />

                    <button onClick={() => handleUpdate()}>update todo</button>
                    <br />
                </>
                :
                <>

                    <div >
                        <h4>
                            {joke}
                        </h4>
                    </div>
                    <br />
                    <button onClick={() => deleteJoke()}>Delete Single Joke</button>
                    <button onClick={() => setToggle(true)}>update Joke</button>
                    <button onClick={() => dispatch(addToFavoriteJokes(id,joke))}>add to favorites</button>
                </>

            }





        </>
    )
}

export default Joke