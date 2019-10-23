import React from 'react' 
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import profile from '../assets/me.png'

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className='hero'>
                    <h1>michael cajandig</h1>
                    <h2>web developer</h2>
                </div>
                <div className='container'> 
                    <div className='left-content'>
                        <h4>Hi</h4>
                        <p>
                            I am Michael,  I am a full stack developer based in the Philippines. <br />
                            Specializing in Web and Restful API developement and passionate on building resposive  websites.
                        </p>
                        <div className='callout'>
                            <h2>Do you have project in mind?</h2>
                            <button>let's talk</button>
                            <button>download cv</button>
                        </div>
                        <div className='social-link'> 
                            <a href="https://www.linkedin.com/in/michaelcajandig"><img src={linkedin} alt="linked"></img></a>
                            <a href="https://github.com/dmonkey75/"><img src={github} alt="github"></img></a>
                        </div>
                    </div>
                    <div className='right-content'> 
                        <img src={profile} alt='michael cajandig'></img>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Home;
