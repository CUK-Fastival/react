import './WriteBoard.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const WriteBoard = () => {
    return (
        <div className="write-container">
            <h1>Write Board</h1>
            <div className="borad-title">
                <h3>제목</h3>
                <div className="title-detail">
                    <select name="category" id="category">
                        <option value="select">장르 선택</option>
                        <option value="hiphop">랩/힙합</option>
                        <option value="soul">R&B/Soul</option>
                        <option value="indi">인디밴드</option>
                        <option value="rock">록/메탈</option>
                    </select>
                    <input type="text" name="title" class="form-control" placeholder='제목 입력' />
                </div>
            </div>
            <div className="board-content">
                <h3>내용</h3>
                <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
            <div className="board-submit">
                <button><a href="/board">작성하기</a></button>
            </div>
        </div>
    )
}

export default WriteBoard