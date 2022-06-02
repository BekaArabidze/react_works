import './App.scss';
import {useState} from "react"
import Book from './components/Book';


function App() {
    

    const books = [
        {id:1,name:'მეფეთა ჯახი',pageNumber:600},
        {id:2,name:'რეკვიემი',pageNumber:900},
        {id:3,name:'დაბრუნებული დრო',pageNumber:1200},
    ]

    
    return (
        <div className="App">
            <Book books={books} />
        </div>
    );
}

export default App;
