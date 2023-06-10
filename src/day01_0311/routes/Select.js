import './Select.css';
import {MdMicExternalOn} from 'react-icons/md';
import {FiUsers} from 'react-icons/fi';

const Select = () => {
    return(
        <div className="select-container">
            <h1>회원가입</h1>

            <div className='users-continaer'>
                <ul>
                    <li>
                        <a href="/agree" className="user-box">
                            <p className='select-title'>아티스트 가입</p>
                            <span className="mic-icon"><MdMicExternalOn /></span>
                            <p className='select-content'>뮤지션 인증이 되는 대상자</p>
                        </a>
                    </li>
                    <li>
                        <a href="/agree" className="user-box">
                            <p className='select-title'>일반회원 가입</p>
                            <span className="user-icon"><FiUsers /></span>
                            <p className='select-content'>아티스트를 제외한 만 14세 이상 모든 대상자</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Select