import './Board.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Pagination from './Pagination';

const Board = () => {
    const [boardList, setList] = useState([{
        id: '',
        category: '',
        title: '',
        content: '',
        writer: '',
        createdOn: ''
    }]);

    const dummyData = [
        {
          id: 10,
          category: '힙합',
          title: '빅뱅 콘서트 언제 함?',
          content: '식빵 빅뱅 콘서트 언제 해? 지디 언제 컴백함',
          writer: 'vip',
          createdOn: '2023-03-03',
        },
        {
          id: 9,
          category: '인디',
          title: '빅뱅 콘서트 언제 함?',
          content: '식빵 빅뱅 콘서트 언제 해? 지디 언제 컴백함',
          writer: 'vip',
          createdOn: '2023-02-25',
        },
        {
          id: 8,
          category: '인디',
          title: '빅뱅 콘서트 언제 함?',
          content: '식빵 빅뱅 콘서트 언제 해? 지디 언제 컴백함',
          writer: 'vip',
          createdOn: '2023-02-03',
        },
        {
          id: 7,
          category: '인디',
          title: '빅뱅 콘서트 언제 함?',
          content: '식빵 빅뱅 콘서트 언제 해? 지디 언제 컴백함',
          writer: 'vip',
          createdOn: '2023-02-02',
        },
        {
          id: 6,
          category: '인디',
          title: '빅뱅 콘서트 언제 함?',
          content: '식빵 빅뱅 콘서트 언제 해? 지디 언제 컴백함',
          writer: 'vip',
          createdOn: '2023-02-01',
        },
        {
          id: 5,
          category: '인디',
          title: '빅뱅 콘서트 언제 함?',
          content: '식빵 빅뱅 콘서트 언제 해? 지디 언제 컴백함',
          writer: 'vip',
          createdOn: '2023-01-01',
        },
        {
          id: 4,
          category: '인디',
          title: '빅뱅 콘서트 언제 함?',
          content: '식빵 빅뱅 콘서트 언제 해? 지디 언제 컴백함',
          writer: 'vip',
          createdOn: '2022-10-05',
        },
        {
          id: 3,
          category: '힙합',
          title: '테스트 게시글입니다. 내용없습니다.',
          content: '쭈헤이',
          writer: 'user3',
          createdOn: '2022-10-04',
        },
        {
          id: 2,
          category: '락',
          title: '게시판 테스트입니다.',
          content: 'admin',
          writer: 'user2',
          createdOn: '2022-10-03',
        },
        {
          id: 1,
          category: '인디',
          title: '빅뱅 콘서트 언제 함?',
          content: '식빵 빅뱅 콘서트 언제 해? 지디 언제 컴백함',
          writer: 'vip',
          createdOn: '2022-10-01',
        }
    ]

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>setPosts(data));
    }, []);
    
    return (
        <div className="board-container">
            <h1>Community</h1>

            <div>                
                <table className='boardTable'>
                    <thead>
                        <tr className='space'>
                            <th>
                                번호
                            </th>
                            <th>
                                카테고리
                            </th>
                            <th>
                                제목
                            </th>
                            <th>
                                글쓴이
                            </th>
                            <th>
                                날짜
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyData.map((board) => {
                            return (
                                <tr key={board.id}>
                                    <td>{board.id}</td>
                                    <td>{board.category}</td>
                                    <td><a href="/content">{board.title}</a></td>
                                    <td><a href="#">{board.writer}</a></td>
                                    <td>{board.createdOn}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className='search-container'>
                <div className='search-window'>
                    <select name="select" id="select">
                        <option value="title">제목</option>
                        <option value="content">내용</option>
                        <option value="writer">글작성자</option>
                        <option value="comment">댓글</option>
                    </select>
                    <input type="text" className='searchBox'/>
                    <button className='searchBtn'>검색</button>
                </div>
                
                <div><button className='writeBtn'><a href="/write">글쓰기</a></button></div>
            </div>

            <div className="community-line">
                03 <hr></hr> COMMUNITY
            </div>

            <Pagination></Pagination>
        </div>
    )
}

export default Board;