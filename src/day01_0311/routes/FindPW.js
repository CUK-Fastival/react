import './FindPW.css';

const FindPW = () => {
    return (
        <div className="findpw-container">
            <h1>비밀번호 찾기</h1>

            <div>
                <form className='findPw-form'>
                    <p>가입 시 등록하신 휴대폰 번호와 이메일을 입력하시면, 휴대폰으로 임시 비밀번호를 전송해 드립니다.</p>

                    <div>
                        <label htmlFor="input_tel">PHONE</label>
                        <input type="text" className='input'/>
                        <label htmlFor="input_mail">EMAIL</label>
                        <input type="text" className='input'/>
                    </div>

                    <button className='findPw-btn'>문자 발송하기</button>
                </form>
            </div>
        </div>
    )
}

export default FindPW;