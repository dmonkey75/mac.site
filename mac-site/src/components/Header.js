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
import { faTimes } from '@fortawesome/free-solid-svg-icons'
//import { Toggle } from '../js/main'

function button(callback) {
    //callback();
    //let v = callback();
    //console.log('callback value', v)
    let x = document.getElementById("mynav");
    
    if (x != null && x.className === "nav-items-responsive") {
        
    console.log('className',x.className)
        return <FontAwesomeIcon className='burger-icon' icon={faTimes} ></FontAwesomeIcon>
    }

    return <FontAwesomeIcon className='burger-icon' icon={faBars} ></FontAwesomeIcon>
}

function Toggle() {
    let x = document.getElementById("nav-links"); 
    if (x.className === 'nav-items') {
        x.className = 'nav-items-responsive';
    }
    else {
        x.className = 'nav-items';
    }  
}

const Header = () => {
    return (
        <Router>
            <header>
                <div className='header-container'>
                    <div className='logo'>
                        <a href='/'> <img src={logo} alt="cajandev logo" /></a>
                    </div>
                    <nav>
                        <div className="nav-burger" onClick={Toggle}> 
                            <FontAwesomeIcon className='burger-icon' icon={faBars} ></FontAwesomeIcon> 
                        </div>
                        <div id='nav-links' className='nav-items' onClick={Toggle}>
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