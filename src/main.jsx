import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast"; 

import App from "./App";
import { AppProvider } from "./context/AppContext";
import { ThemeProvider } from "./context/ThemeContext";

import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <AppProvider>
                    <App />

                    <Toaster 
                       position="top-right"
                       toastOptions={{
                        duration: 2500,
                       }}
                    />
                </AppProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);