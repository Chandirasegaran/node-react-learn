import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import { Link } from "react-router-dom";


const App = () => {
    return (
        <Router>
            <div>
                <h1>Welcome to React App that's built using Webpack and Babel separately</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

const Home = () => {
    return (
        <div>
        <h2>This is the Home page</h2>
        <p>Go to <Link to="/about">About</Link> page</p>
        <p>Go to <Link to="/contact">Contact</Link> page</p>
    </div>
    );
}

export default App;
