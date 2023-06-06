import './Rap.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';
import { useState } from 'react';
import { RiFontColor } from 'react-icons/ri';

const Rap = () => {
    const [heart, setHeart] = useState(false);
    const clickHeart = () => {
        setHeart(heart=>!heart);
    }

    return (
        <div className="rap-container">
            <h1>RAP / HIP HOP</h1>

            <div className='rapBox'>
                <div className="rap-box">
                    <span onClick={()=>{clickHeart()}}>
                    {
                        heart ? (
                            <span>
                                <AiFillHeart />
                            </span>
                        ) : (
                            <span>
                                <AiOutlineHeart/>
                            </span>
                        )
                    }
                    </span>
                </div>
                <div className="rap-box"><span><AiOutlineHeart/></span></div>
                <div className="rap-box"><span><AiOutlineHeart/></span></div>
                <div className="rap-box"><span><AiOutlineHeart/></span></div>
                <div className="rap-box"><span><AiOutlineHeart/></span></div>
                <div className="rap-box"><span><AiOutlineHeart/></span></div>
                <div className="rap-box"><span><AiOutlineHeart/></span></div>
                <div className="rap-box"><span><AiOutlineHeart/></span></div>
                <div className="rap-box"><span><AiOutlineHeart/></span></div>
                <div className="rap-box"><span><AiOutlineHeart/></span></div>
            </div>
        </div>
    )
}

export default Rap