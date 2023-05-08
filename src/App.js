import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import About from "./Routes/About/About";
import RettaSeguros from "./Routes/RettaSeguros/RettaSeguros"
import Footer from "./Components/Footer-All-Pages"
import React from "react";


class App extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/retta-seguros" element={<RettaSeguros />} />
                </Routes>
                <Footer />
            </>
        
        )
    }
}

export default App