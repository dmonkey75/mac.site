import React, { Component } from 'react';
import project from '../../assets/Port1.png'

class Project1 extends Component {
    render() {
        return (
            <div className='project-container-bg-colored'>
                <div className='project-content'>
                    <div className='project-content-left-img'> 
                        <img className='project1-img' src={project} alt='project 1'></img> 
                    </div>
                    <div className='project-content-right-p'>
                        <p>There are many variations of passages of Lorem Ipsum available, <br />
                            but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                            If you are going to use a passage of Lorem Ipsum, <br /> you need to be sure there isn't anything embarrassing hidden in the middle of text. <br />
                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                        </p>
                    </div>
                     
                </div>
                
            </div>
        );
    }
}

export default Project1;