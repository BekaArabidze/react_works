import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NewsProvider } from "./context/NewsContext"

import App from './App';
import './index.scss';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
    <StrictMode>
        <NewsProvider>
            <App />
        </NewsProvider>
    </StrictMode>
);