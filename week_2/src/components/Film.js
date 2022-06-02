import React,{useState,useEffect} from 'react'

import { useContext } from 'react'
import { FilmContext } from "../context/FilmContext"


const Film = () => {
    const {filmArray,bla} = useContext(FilmContext)
    const [name, setName] = useState("dato")

    useEffect(() => {
      console.log("fdffdf");
      console.log({name});

    }, [name])
    
    
    const person = {
        firstName: "Lindsay",
        lastName: "Criswell",
        city: "NYC"
    }
    
    const { firstName, lastName, city } = person;
 


    return (
        <>
            {filmArray.map((el,i) => (
                <h1 key={i}>{el.filmName}</h1>
            ))}

            <h1>{firstName}</h1>
            <h1>{name}</h1>
            <button onClick={bla}>change name</button>
        </>
    )
}

export default Film