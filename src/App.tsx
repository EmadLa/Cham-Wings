import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ColorModeProvider,theme, ThemeProvider} from "@chakra-ui/react";
import Login from "./components/pages/Authentication/Login";
import Home from "./components/pages/Home";
import React from "react";

//Colors
//#907836
//#00529b

function CSSReset() {
    return null;
}


function App() {
    const onSubmitHandler = (data: any) => {
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ThemeProvider theme={theme}>
                    <ColorModeProvider>
                        <CSSReset/>
                        <Login onSubmit={(data) => onSubmitHandler(data)}/>
                    </ColorModeProvider>
                </ThemeProvider>}>
                </Route>
                <Route path="/home" element={<Home/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App
{/*<Register  onSubmit={(data) => onSubmitHandler(data)}/>*/}
