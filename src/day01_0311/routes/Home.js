import './Home.css';
import Slider from './Slider';
import { Fireworks } from '@fireworks-js/react'
import rock1 from '../images/rock1.jpg';
import rock2 from '../images/rock2.jpg';
import rock3 from '../images/rock3.jpg';
import rock4 from '../images/rock4.jpg';
import rock5 from '../images/rock5.jpg';
import rock6 from '../images/rock6.jpg';
import rock7 from '../images/rock7.jpg';
import rock8 from '../images/rock8.jpg';
import rock9 from '../images/rock9.jpg';
import Carousel from './Carousel';

const Home = () => {
    
    return (
        <div className="home-container">
            <Fireworks
            options={{
                rocketsPoint: {
                min: 0,
                max: 100
                }
            }}
            style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                position: 'fixed',
                background: '#000',
                zIndex: '-2'
            }}
            />

            <Slider />

            <div className='media-video'>
                <h1>"경록절"</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rNsFP7Zl4sY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className='poster-container'>
                {/* <Carousel /> */}
            </div>
        </div>
    );
}

export default Home;