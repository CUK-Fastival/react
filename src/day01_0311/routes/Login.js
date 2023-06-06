import './Login.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {SiNaver} from 'react-icons/si';
import {FcGoogle} from 'react-icons/fc';
import {BsApple} from 'react-icons/bs';
import {AiOutlineEyeInvisible} from 'react-icons/ai';
import {AiOutlineEye} from 'react-icons/ai';

const Login = () => {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    };
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    };
 
	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
    };
 
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        axios.get('/user_inform/login')
        .then(res => console.log(res))
        .catch()
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []);

    
    // 비번 보이고 안보이고
    const [passwordType, setPasswordType] = useState({
        type: 'password',
        visible: false
    });
    
    //password type 변경하는 함수
    const handlePasswordType = e => {
        setPasswordType(() => {
            if (!passwordType.visible) {
                return { type: 'text', visible: true };
            }
            return { type: 'password', visible: false };
        })
    }

    return (
        <div className="login-container">
            {/* <div className='login-logo'>
                <h1>Fan'stival</h1>
                <p>FESTIVAL OF FANS</p>
            </div> */}

            <form id='login-form'>
                <div className="form-id">
                    <label htmlFor='input_id'>ID</label>
                    <input type="text" value={inputId} onChange={handleInputId} className='input'/>
                </div>

                <div className="form-pw">
                    <label htmlFor='input_pw'>PASSWORD</label>
                    <input type={passwordType.type} value={inputPw} onChange={handleInputPw} className='input'/>
                    <span onClick={handlePasswordType}>
                        {passwordType.visible ? <span className='eye'><AiOutlineEye /></span> : <span className='eye'><AiOutlineEyeInvisible /></span>}
                    </span>
                </div>

                <div className='btn-box'>
                    <button type='button' onClick={onClickLogin} className="loginBtn">로그인</button>
                </div>

                <div className="search-form">
                    <ul>
                        <li><a href="/select">회원가입</a></li>
                        <li><a href="/find_id">아이디 찾기</a></li>
                        <li><a href="/find_pw">비밀번호 찾기</a></li>
                    </ul>
                </div>

                <div className="social-login">
                    <button className='socialBtn'><span><SiNaver color="#2DB400" /></span> 네이버로 로그인</button>
                    <button className='socialBtn'><span><FcGoogle /></span> 구글로 로그인</button>
                    <button className='socialBtn'><span><BsApple /></span> Apple로 로그인</button>
                </div>
            </form>
        </div>
    );
}

export default Login;