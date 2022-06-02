import React from 'react'
import { GlobalContext } from '../context/NewsContext'


const Button = () => {
    const {handlePageChange} = GlobalContext()

    return (
        <>
            <button onClick={() => handlePageChange("prev")}>Prev</button>
            <button onClick={() => handlePageChange("next")}>Next</button>
        </>
    )
}

export default Button