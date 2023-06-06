import './Home.css';
import Slider from './Slider';
import { Fireworks } from '@fireworks-js/react'

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
                {/* <h1>"역대 경록절"</h1> */}
            </div>
        </div>
    );
}

export default Home;