import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home'
import Portfolio from './Portfolio'
import Resume from './Resume'
import About from './About'
import logo from '../assets/Logo-2.png'
const Header = () => {
    return (
        <Router>
            <header>
                <div className='logo'>
                    <a href='/'> <img src={logo} alt="cajandev logo" /></a>
                </div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/about">About</Link>
                </nav>
            </header>

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/portfolio">
                    <Portfolio />
                </Route>
                <Route path="/resume">
                    <Resume />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default Header;