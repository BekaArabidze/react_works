import { useState, useEffect } from 'react'
import './App.scss';


import Film from './components/Film';
import { FilmProvider } from "./context/FilmContext"



const App = () => {
    const [filmName, setFilmName] = useState("")
    const [date, setDate] = useState(0)
    const [actor, setActor] = useState("")

    let age = 18

    const [saveName, setSaveName] = useState("")


    return (
        <>
            <FilmProvider>
                <Film />
            </FilmProvider>
        {'app' + saveName}
        </>
    )
}

export default App
