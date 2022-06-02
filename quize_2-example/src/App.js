import './App.scss';
import Jokes from "./components/Jokes/Jokes"
import FavJokes from './components/Jokes/FavJokes';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


function App() {
    return (
        <div >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Jokes />}/>
                    <Route path="/favjokes" element={<FavJokes />}/>
                </Routes>
            </BrowserRouter>
            
        </div>
    );
}

export default App;
