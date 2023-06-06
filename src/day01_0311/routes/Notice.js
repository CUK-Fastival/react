import './Notice.css';
import { useState } from 'react';

const Notice = () => {
    const [page, setPage] = useState(1);
    const handlePageChange = (page)=>{
        setPage(page);
    };

    return (
        <div className="notice-container">
            <h1>NOTICE</h1>

            <div className="notice-box">
                <div className="notice-list">
                    <ul>
                        <li>
                            <a href="#">
                                <p class="notice-number">10</p>
                                <p class="notice-content">
                                    <span class="notice-title">세번째 글</span>
                                    <span class="notice-date">2023-01-30</span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p class="notice-number">9</p>
                                <p class="notice-content">
                                    <span class="notice-title">두번째 글</span>
                                    <span class="notice-date">2023-01-30</span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p class="notice-number">8</p>
                                <p class="notice-content">
                                    <span class="notice-title">두번째 글</span>
                                    <span class="notice-date">2023-01-30</span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p class="notice-number">7</p>
                                <p class="notice-content">
                                    <span class="notice-title">두번째 글</span>
                                    <span class="notice-date">2023-01-30</span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p class="notice-number">6</p>
                                <p class="notice-content">
                                    <span class="notice-title">두번째 글</span>
                                    <span class="notice-date">2023-01-30</span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p class="notice-number">5</p>
                                <p class="notice-content">
                                    <span class="notice-title">두번째 글</span>
                                    <span class="notice-date">2023-01-30</span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p class="notice-number">4</p>
                                <p class="notice-content">
                                    <span class="notice-title">두번째 글</span>
                                    <span class="notice-date">2023-01-30</span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p class="notice-number">3</p>
                                <p class="notice-content">
                                    <span class="notice-title">두번째 글</span>
                                    <span class="notice-date">2023-01-30</span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p class="notice-number">2</p>
                                <p class="notice-content">
                                    <span class="notice-title">두번째 글</span>
                                    <span class="notice-date">2023-01-30</span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <p class="notice-number">1</p>
                                <p class="notice-content">
                                    <span class="notice-title">첫번째 글</span>
                                    <span class="notice-date">2023-01-30</span>
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="notice-page">
                    {/* <Pagination className='pagination'
                        activePage={page}
                        itemsCountPerPage={10}
                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        prevPageText={"<"}
                        nextPageText={">"}
                        onChange={handlePageChange}
                    /> */}
                </div>
            </div>

            <div className="notice-line">
                04 <hr></hr> NOTICE
            </div>
        </div>
    );
}

export default Notice;