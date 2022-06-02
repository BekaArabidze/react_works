import { useContext } from "react"
import { FilmContext } from "../context/FilmContext"
import Film1 from "./Film1"

const Film = () => {
    const {films,log} = useContext(FilmContext)

    return (
        <>
            {films.map((el,i) => (
                <h1>{el.filmName}</h1>
            ))}
            <Film1/>
        </>
    )
}

export default Film
