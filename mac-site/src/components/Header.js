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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <Router> 
            <header>
                <div className='header-container'> 
                    <div className='logo'>
                        <a href='/'> <img src={logo} alt="cajandev logo" /></a>
                    </div>
                    <nav>
                        <div className="nav-burger">
                            <FontAwesomeIcon className='burger-icon' icon={faBars}></FontAwesomeIcon>
                        </div>
                        <div className='nav-items'>
                            <Link to="/">Home</Link>
                            <Link to="/portfolio">Portfolio</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/about">About</Link>
                        </div>
                    </nav>
                </div> 
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