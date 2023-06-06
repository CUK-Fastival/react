import './Slider.css';
import {MdKeyboardDoubleArrowDown} from 'react-icons/md';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
// import {imgs} from "./Constants";
import {useState, useRef} from 'react';
import {Carousel} from 'antd';
import img01 from '../images/festival01.jpg';
import img02 from '../images/festival03.png';
import img03 from '../images/festival04.png';
import img04 from '../images/festival05.png';
import img05 from '../images/festival06.png';
import img06 from '../images/festival08.png';
import img07 from '../images/festival09.png';
import img08 from '../images/festival10.png';
import img09 from '../images/festival11.png';
import gd01 from '../images/gd01.png';
import gd02 from '../images/gd02.png';
import cute from '../images/cute.png';
import {GiGuitar} from 'react-icons/gi';
import guitar from '../images/guitar.png';

const Slider = () => {
    const inputForm = useRef();
    const onMoveToForm = () => {
        inputForm.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    return (
        <div className="slider-container">
            <Carousel style={{width: 1000}} autoplay>
                <div>
                    <div className='slider-image'>
                        <img src={img01} alt="" className='slide-img'/>
                    </div>
                </div>
                <div>
                    <div className='slider-image'>
                        <img src={img02} alt="" className='slide-img' />
                    </div>
                </div>
                <div>
                    <div className='slider-image'>
                        <img src={img03} alt="" className='slide-img' />
                    </div>
                </div>
                <div>
                    <div className='slider-image'>
                        <img src={img04} alt="" className='slide-img' />
                    </div>
                </div>
                <div>
                    <div className='slider-image'>
                        <img src={img05} alt="" className='slide-img' />
                    </div>
                </div>
                <div>
                    <div className='slider-image'>
                        <img src={img06} alt="" />
                    </div>
                </div>
            </Carousel>

            <div className="scroll">
                <p>아래로 스크롤</p>
                <span onClick={onMoveToForm}><MdKeyboardDoubleArrowDown /></span>
            </div>

            <div ref={inputForm} className='web-info'>
                <div>
                    <h2>Fan'stival?</h2>
                    <img src={guitar} alt="" className='guitar'/>
                </div>
                <div>
                    <img src={gd01} alt="" className='circle-img'/>
                    <h3 className='numbering'>01</h3>
                    <span>언더 뮤지션을 위한 웹 서비스</span>
                </div>
                <div>
                    <img src={gd02} alt="" className='circle-img' />
                    <h3 className='numbering'>02</h3>
                    <span>한눈에 보기 편한 뮤지션의 일정</span>
                </div>
                <div>
                    <img src={cute} alt="" className='circle-img' />
                    <h3 className='numbering'>03</h3>
                    <span>뮤지션과 팬들의 커뮤니티 공간</span>
                </div>
            </div>
        </div>
    );
}

export default Slider;