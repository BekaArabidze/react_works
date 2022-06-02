import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import ShareLayout from "./components/ShareLayout";
import Contact from './components/Contact';
import Product from "./components/Product";
import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ShareLayout />} >
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="products/:param" element={<Product />} />
                    </Route>
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
