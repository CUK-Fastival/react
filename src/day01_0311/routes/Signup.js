import './Signup.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {AiOutlineEyeInvisible} from 'react-icons/ai';
import {AiOutlineEye} from 'react-icons/ai';

const Signup = () => {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [inputPw2, setInputPw2] = useState('');
    const [inputTel, setInputTel] = useState('');
    const [inputMail, setInputMail] = useState('');
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다

    const handleInputId = (e) => {
        setInputId(e.target.value);
    };
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };
    const handleInputPw2 = (e) => {
        setInputPw2(e.target.value);
    };
 
    const handleInputTel = (e) => {
        setInputTel(e.target.value);
    };
    const handleInputMail = (e) => {
        setInputMail(e.target.value);
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
    const [passwordType2, setPasswordType2] = useState({
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

    const handlePasswordType2 = e => {
        setPasswordType2(() => {
            if (!passwordType2.visible) {
                return { type: 'text', visible: true };
            }
            return { type: 'password', visible: false };
        })
    }

    return (
        <div className="sign-container">
            <h1>회원가입</h1>

            <div className="sign-form">
                <form>
                    <div className="sign-id">
                        <label htmlFor='input_id'>ID *</label>
                        <div className="checkBtn">
                            <input type="text" value={inputId} onChange={handleInputId} className='input'/>
                            <button>중복확인</button>
                        </div>
                    </div>
                    <div className="sign-pw">
                        <label htmlFor='input_pw'>PASSWORD *</label>
                        <input type={passwordType.type} value={inputPw} onChange={handleInputPw} className='input'/>
                        <span onClick={handlePasswordType}>
                            {passwordType.visible ? <span className='eye'><AiOutlineEye /></span> : <span className='eye'><AiOutlineEyeInvisible /></span>}
                        </span>
                    </div>
                    <div className="sign-pw-check">
                        <label htmlFor='input_pw2'>PASSWORD CHECK *</label>
                        <input type={passwordType2.type} value={inputPw2} onChange={handleInputPw2} className='input'/>
                        <span onClick={handlePasswordType2}>
                            {passwordType2.visible ? <span className='eye'><AiOutlineEye /></span> : <span className='eye'><AiOutlineEyeInvisible /></span>}
                        </span>
                    </div>
                    <div className="sign-tel">
                        <label htmlFor='input_tel'>PHONE *</label>
                        <div className='checkBtn'>
                            <input type="text" value={inputTel} onChange={handleInputTel} className='input'/>
                            <button>본인확인</button>
                        </div>
                    </div>
                    <div className="sign-mail">
                        <label htmlFor='mail'>EMAIL *</label>
                        <input type="text" value={inputMail} onChange={handleInputMail} className='input'/>
                    </div>
                    <div className="sign-nick">
                        <label htmlFor="input_nick">NICKNAME *</label>
                        <div className='checkBtn'>
                            <input type="text" className='input'/>
                            <button>중복확인</button>
                        </div>
                    </div>
                    <div className='signBtn'>
                        <button type='button' onClick={onClickLogin}><a href="/success">가입하기</a></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;