import './FindID.css';

const FindID = () => {
    return (
        <div className="findID-container">
            <h1>아이디 찾기</h1>

            <form className='findID-form'>
                <p>가입 시 등록한 휴대폰 번호를 입력하면<br></br>아이디의 일부를 알려드립니다.</p>
                <div>
                    <label htmlFor="input-tel">PHONE</label>
                    <input type="text" className='input'/>
                </div>

                <button className='findID-btn'>아이디 찾기</button>
            </form>
        </div>
    )
}

export default FindID;