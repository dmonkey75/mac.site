import React from 'react'; 
import Project1 from './portfolio/Project1'
import Project3 from './portfolio/Project3'
import ProjectPlain from './portfolio/ProjectPlain'

const Portfolio = () => {
    return (
        <div>
            <div className='portfolio-hero'>
                <h1>My Works</h1>
            </div>
 
            <Project1 />
            <div className='skew-ccw' />

            <ProjectPlain />

            <div className='skew-cw' /> 
            <Project3 /> 
        </div>
    );
};

export default Portfolio;