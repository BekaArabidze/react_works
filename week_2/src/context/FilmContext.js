import { createContext } from "react"


export const FilmContext = createContext()


export const FilmProvider = ({ children }) => {

    const filmArray = [
        {
            filmName: 'spider-man',
            date: 2021,
            actor: "tom hollad"
        },
        {
            filmName: 'batman',
            date: 2020,
            actor: "ben afleck"
        },
    ]

    const bla = () => {
        console.log(bla);
    }

    const value = {filmArray,bla}
    return (
        <FilmContext.Provider value={value}>
            {children}
        </FilmContext.Provider>
    )
}