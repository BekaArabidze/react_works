import { useState, useEffect } from 'react'
import './App.css';
import Film from "./components/Film"

import { FilmProvider } from "./context/FilmContext"


function App() {
    return (
        <div className="App">
            <FilmProvider >
                <Film />
            </FilmProvider>
        </div>
    );
}

export default App;
