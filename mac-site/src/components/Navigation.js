import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';
import media from '../utils/MediaQueries'

const Header = styled('header')`  
    margin-bottom: ${props => props.toggle ? "12em" : "initial"};   
    transition: all .2s ease;

    ${media.tablet`
        margin-bottom: initial;
    `}
`;

const Navi = styled('nav')` 
    height: 40px; 
    display: flex;
    justify-content: space-between;
    align-items: center;    
    margin: auto 5%;  
`;

const Logo = styled.div`
    color: green; 
    
    ${media.tablet`
        color: red;
    `}
`;

const UnorderedList = styled('ul')`   
    position: absolute; 
    list-style-type: none; 
    right: 0;  
    top: 40px;  
    width: 100%;   
    display: ${props => props.toggle ? "flex" : "none"};   
    flex-direction: column;   
    align-items: center;  
    animation: slide-in 1s;   
    border-top: 1px solid #C4C4C4;    
    > li {    
        margin: .5rem 0; 
        list-style: none; 

        > a { 
            text-decoration: none;
        }
        
        ${media.tablet`
            margin: 0 1em; 
            display: flex; 
            align-items: center;
          
        `}  
    }
     
    @keyframes slide-in {
        0% { 
            opacity: 0;
        }
        100% { 
            opacity: 1;
        }
    }  
 
      ${media.tablet`
        position: initial;
        display: flex;
        flex-direction: row;  
        align-items: center;
        width: auto; 
        top: auto;   
        background-color: initial;     
        border-top: initial;
    `} 
`;

const Burger = styled.div`
    display: block;
    cursor: pointer;  
    div {
        transition: all 0.2s ease;
        width: 25px;
        height: 3px; 
        background-color: #000;
        margin: 5px;
    }  

    .line1 {   
        transform: ${props => props.toggle ? "rotate(-45deg) translate(-5px, 6px)" : ""}
    }

    .line2 {   
        opacity: ${props => props.toggle ? "0" : "1"}
    }

    .line3 {   
        transform: ${props => props.toggle ? "rotate(45deg) translate(-5px, -6px)" : ""}
    }
 
    ${media.tablet`
        display: none;
    `}
     
`;

function addNavLinkAnimation(ul) {
    let styles = ``;

    for (let i = 0; i < 5; i += 1) {

    }

    styles += `
        background-color: green;
    `;

    return css`${styles}`;
}

function Navigation(props) {

    const [toggle, setToggle] = useState(false);


    return (
        <Header toggle={toggle}>
            <Navi>
                <Logo>
                    Logo
                </Logo>
                <UnorderedList toggle={toggle} onClick={() => { setToggle(!toggle); }}>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Portfolio'>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Resume'>Resume</NavLink>
                    </li>
                    <li>
                        <NavLink to='/About'>About</NavLink>
                    </li>
                    <li>
                        <Button variant="contained" color="primary">Contact</Button>
                    </li>
                </UnorderedList>
                <Burger onClick={() => { setToggle(!toggle); }} toggle={toggle}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </Burger>
            </Navi>
        </Header>
    );
}

export default Navigation;