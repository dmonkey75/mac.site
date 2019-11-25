import React from 'react';
import styled from 'styled-components';
import HeroImage from '../assets/bg-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fab, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const SocialMedia = styled('div')`
    height: 2.5em;
    background-color: #B2B2B2;
    display: flex;
    justify-content: center;
    align-items: center; 
    > * {
        margin: .2em;
    }
`;

const HeroContent = styled('Content')`
    background-image: url(${HeroImage}); 
    background-repeat: no-repeat;
    background-origin: fixed;  
    background-size: 100%;   
    height: 12rem;    
    display: flex;   
    justify-content: center;   
    flex-direction: column;  
    
    h1, h3, p {
        color: #fff; 
        margin-left: 5%;
    } 
    
    h1, h3 { 
        text-transform: capitalize;  
    } 

    h1 { 
        font-weight: 600;
        font-size: 2em;;
    }

    h3 {
        font-size: 1em;
    }

    p {
        padding-top: 5%;
        font-size: .5em;
    }
 
`;

const JumboHero = styled('div')` 
`;

function Hero(props) {
    return (
        <JumboHero>
            <HeroContent>
                <h1>michael cajandig</h1>
                <h3>web developer</h3>
                <p>I am currently accepting short term projects. ;-)</p>
            </HeroContent>
            <SocialMedia>
                <FontAwesomeIcon size="2x" icon={['fab', 'github-square']} />
                <FontAwesomeIcon size="2x" icon={['fab', 'facebook-square']} />
                <FontAwesomeIcon size="2x" icon={['fab', 'linkedin']} />
            </SocialMedia>
        </JumboHero>
    );
} 

export default Hero;