import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => { 
            clearTimeout(timerId);
        };
    }, []);

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        index={15}
                    />
                </h1>
                <p>
                    I am an ambitious and determined software developer with a passion for bringing both the frontend and 
                    backend components of applications to life. My strong work ethic drives me to tackle challenges with 
                    dedication and creativity, ensuring high-quality results.
                </p>
                <p>
                    With a strong commitment to continuous learning and a collaborative spirit, I excel in team environments 
                    and am always eager to explore new technologies and methodologies.
                </p>
                <p>
                    Beyond the world of code, some of my passions include cars, running, and video games. 
                </p>
            </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faPython} color = "#FFDE57" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color = "#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color = "#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color = "#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color = "#EFD81d" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color = "#EC4B28" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About