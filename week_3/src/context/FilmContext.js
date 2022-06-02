import { createContext } from "react";


export const FilmContext = createContext();


export const FilmProvider = ({ children }) => {

    const films = [
        {
            key: 1,
            filmName: 'Batman',
            releaseDate: 2020,
            money: 200000
        },
        {
            key: 2,
            filmName: 'Superman',
            releaseDate: 2015,
            money: 300000
        },
        {
            key: 3,
            filmName: 'Iron Man',
            releaseDate: 2010,
            money: 500000
        },
    ]

    const log = () => {
        console.log("from provider")
    }

    const values = {films,log}


    return (
        <FilmContext.Provider value={values}>
            {children}
        </FilmContext.Provider>
    )
}