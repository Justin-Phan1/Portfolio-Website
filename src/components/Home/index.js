import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page"> 
            <div className="text-zone"> 
                <h1>Hi, <br /> I'm Justin,</h1>
                <br /> 
                software engineer
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home