import React from 'react';
import Comment from './Comment';
import './CommentList.css';

const CommentList = () => {
    const comments = [
        {
            name: "빈",
            comment: "ㅎㅇ",
        },
        {
            name: "곰돌이푸",
            comment: "꿀 맛있다",
        },
        {
            name: "권짇",
            comment: "아 지디 보고 싶다다",
        },
    ]

    // state = {
    //     value: ''
    // }

    // handleChange = e => {
    //     const value = e.target.value;
    //     this.setState({
    //         value
    //     })
    // }

    return (
        <div className="commentlist-container">
            <form className='comment-box'>
                <input type='text' className='int' placeholder='댓글을 입력하세요.' />
               {/* <input type='submit' className='btn' value='submit' /> */}
               <button className='btn'>작성</button>
            </form>
            
            <div className="comment-list">
                {
                    comments.map((comment) => {
                        return (
                            <Comment name={comment.name} comment={comment.comment} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CommentList;