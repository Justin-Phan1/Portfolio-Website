import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
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
        </div>
    )
}

export default About