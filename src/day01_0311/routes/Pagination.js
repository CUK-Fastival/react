import { Link } from 'react-router-dom'
import './Pagination.css'
import { useContext } from 'react';

const Pagination = ({
    postsPerPage, currentPage, setCurrentPage, totalPosts
})=>{
    
    const pageNumbers = [];
    // const pageNumbers = [1, 2, 3, 4, ...];
    for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage); i++ ){
        // 올림처리 : 남은 개수도 페이지로 표시하기 위함
        pageNumbers.push(i);
    }

    const nextHandle = ()=>{
        setCurrentPage(currentPage+1);
    }
    const prevHandle = ()=>{
        setCurrentPage(currentPage-1);
    }
    return (
        <div>
            {/* <h2>Pagenation</h2> */}
            <button
                style={currentPage===pageNumbers[0] ? {display:"none"}:{display:"block"}}
                onClick={prevHandle}
            >prev</button>
            <ul className="pager">
                {
                    pageNumbers.map( page=>(
                        <li key={page}>
                            <Link to="/board"
                                onClick={()=>{ setCurrentPage(page)}}
                                style={page === currentPage ?
                                    { 
                                      color : "red" , 
                                      backgroundColor : "antiquewhite"
                                    }:{
                                        color : "black" , 
                                        backgroundColor : "white"
                                    }}
                            >{page}</Link>
                        </li>
                    ))
                }
            </ul>
            <button
                style={currentPage===pageNumbers[pageNumbers.length-1] ? {display:"none"}:{display:"block"}}
                onClick={nextHandle}
            >next</button>
        </div>
    )
}

export default Pagination;
//  1, 2, 3, 4