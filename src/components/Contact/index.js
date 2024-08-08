import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact = () => {
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
        <>
            <div className='container contact-page'>
                <div className="text-zone"> 
                <h1> 
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    index={15}
                    />
                </h1>
                <p>
                   Text 
                </p>
                </div>
            </div>
            <Loader type='ball-pulse-sync' />
        </>
    )
}

export default Contact