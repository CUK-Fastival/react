import './Agree.css';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import {AiOutlineCheck} from 'react-icons/ai';
import { useCallback, useRef, useState, useEffect } from 'react';

const Agree = () => {
    const[icon, setIcon] = useState(false); // 초기값을 false로 설정
    const toggleMenu = () => {
        setIcon(icon=>!icon); // on, off
    }
    const[icon2, setIcon2] = useState(false); // 초기값을 false로 설정
    const toggleMenu2 = () => {
        setIcon2(icon2=>!icon2); // on, off
    }

    const [allBox, setAllBox] = useState(false);
    const [box, setBox] = useState(false);
    const [box2, setBox2] = useState(false);
    const [allBox2, setAllBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);

    const allCheckBox = () => {
        if(allBox === false){
            setAllBox(true);
            setBox(true);
            setBox2(true);
        }
        else{
            setAllBox(false);
            setBox(false);
            setBox2(false);
        }
    }

    const checkBox = () => {
        if(box === false) {
            setBox(true);
        }
        else{
            setBox(false);
        }
    }

    const checkBox2 = () => {
        if(box2 === false){
            setBox2(true);
        }
        else{
            setBox2(false);
        }
    }

    const allCheckBox2 = () => {
        if(allBox2 === false) {
            setAllBox2(true);
            setBox3(true);
            setBox4(true);
        }
        else{
            setAllBox2(false);
            setBox3(false);
            setBox4(false);
        }
    }

    const checkBox3 = () => {
        if(box3 === false){
            setBox3(true);
        }
        else{
            setBox3(false);
        }
    }

    const checkBox4 = () => {
        if(box4 === false){
            setBox4(true);
        }
        else{
            setBox4(false);
        }
    }

    useEffect(()=>{
        if(box===true && box2===true){
            setAllBox(true);
        }
        else{
            setAllBox(false);
        }
    }, [box, box2]);

    useEffect(()=>{
        if(box3===true && box4===true){
            setAllBox2(true);
        }
        else{
            setAllBox2(false);
        }
    }, [box3, box4]);

    // const validBtn = () => {
    //     if(!allBox){
    //         alert('please check');
    //     }
    // }
    const [valid, setValid] = useState(0);
    const checkValid = () => {
        if(!allCheckBox()){
            setValid(valid=1);
        }
    }

    const disabled = !allBox;
  
    return (
        <div className="agree-container">
            <h1>회원가입</h1>
            
            <div className="agree-form">
                <div className="required-agree">
                    <div className="all-agree">
                        <div>
                            <div className="box" onClick={()=>{allCheckBox()}}>
                                <span className={allBox ? "checked" : "no-checked"}>
                                    <AiOutlineCheck />
                                </span>
                            </div>
                            <p>[필수] 만 14세 이상이며 모두 동의합니다.</p>
                        </div>
                        <span className='plus' onClick={()=>{ toggleMenu()}}>
                        {
                            icon ? (
                                <span>
                                    <AiOutlineMinus />
                                </span>
                            ) : (
                                <span>
                                    <AiOutlinePlus />
                                </span>
                            )
                        }
                        </span>
                    </div>

                    <div className={icon ? "unit-agree-block" : "unit-agree"}>
                        <div className="unit">
                            <div>
                                <div className="box" onClick={()=>{checkBox()}}>
                                    <span className={box ? "checked" : "no-checked"}>
                                        <AiOutlineCheck />
                                    </span>
                                </div>
                                <p>이용약관 동의</p>
                            </div>
                            <span className='detail'>내용 보기</span>
                        </div>
                        <div className="unit">
                            <div>
                                <div className="box" onClick={()=>{checkBox2()}}>
                                    <span className={box2 ? "checked" : "no-checked"}>
                                        <AiOutlineCheck />
                                    </span>
                                </div>
                                <p>개인정보 수집 및 이용 동의</p>
                            </div>
                            <span className='detail'>내용 보기</span>
                        </div>
                    </div>
                </div>

                <div className="choose-agree">
                    <div className="all-choose">
                        <div>
                            <div className="box" onClick={()=>{allCheckBox2()}}>
                                <span className={allBox2 ? "checked" : "no-checked"}>
                                        <AiOutlineCheck />
                                    </span>
                            </div>
                            <p>[선택] 광고성 정보 수신에 모두 동의합니다.</p>
                        </div>
                        <span className='plus' onClick={()=>{ toggleMenu2()}}>
                        {
                            icon2 ? (
                                <span>
                                    <AiOutlineMinus />
                                </span>
                            ) : (
                                <span>
                                    <AiOutlinePlus />
                                </span>
                            )
                        }
                        </span>
                    </div>

                    <div className={icon2 ? "unit-agree-block" : "unit-agree"}>
                        <div className="unit">
                            <div>
                                <div className="box" onClick={()=>{checkBox3()}}>
                                    <span className={box3 ? "checked" : "no-checked"}>
                                        <AiOutlineCheck />
                                    </span>
                                </div>
                                <p>문자 메시지</p>
                            </div>
                        </div>
                        <div className="unit">
                            <div>
                                <div className="box" onClick={()=>{checkBox4()}}>
                                    <span className={box4 ? "checked" : "no-checked"}>
                                        <AiOutlineCheck />
                                    </span>
                                </div>
                                <p>이메일</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sign-btn">
                    <a href="/signup"><button disabled={!(allBox)} style={disabled ? {backgroundColor: 'lightgray'} : {backgroundColor:'gray'}}>다음단계</button></a>
                    {/* <p className={!allBox&&valid==1 ? 'notice-comment' : 'notice-hidden'}>[필수] 이용약관을 체크해주세요.</p> */}
                </div>
            </div>
        </div>
    );
}

export default Agree