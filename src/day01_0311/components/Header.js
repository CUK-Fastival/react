import React, {useState, useEffect} from 'react';
import Navbar from './navbar/Navbar'
import './Header.css';
import {FaUserAlt} from 'react-icons/fa';

const Header = () => {
  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };

  const classes = `header-section d-none d-xl-block ${sticky}`;

  const [tabNum, setTabNum] = useState(1);


  return (
    <header>
      <div className='header'>
          <a href="/"><h1>Fan'stival</h1></a>

          <div className='header-right'>
            <ul className='lan'>
              <li onClick={()=>{setTabNum(1)}} className={tabNum === 1 ? "active" : ""}><a href="#" data-lang="ko">KR</a></li>
              <li onClick={()=>{setTabNum(2)}} className={tabNum === 2 ? "active" : ""}><a href="#" data-lang="en">EN</a></li>
              <li onClick={()=>{setTabNum(3)}} className={tabNum === 3 ? "active" : ""}><a href="#" data-lang="ja">JP</a></li>
              <li onClick={()=>{setTabNum(4)}} className={tabNum === 4 ? "active" : ""}><a href="#" data-lang="zh">CN</a></li>
            </ul>
            <a href="/login" className='login'><FaUserAlt /> Login / Sign Up</a>
            </div>
      </div>
      {/* <nav>
        <Navbar/>
      </nav> */}
    </header>
  )
}

export default Header;