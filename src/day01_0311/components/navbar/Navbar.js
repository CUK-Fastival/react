import React from 'react';
import './Navbar.css';
import fireworkimg from '../../images/firework3.png';
import logo from '../../images/logo.png';
import mic from '../../images/microphone.png';
import { useCallback, useRef, useState, useEffect } from 'react';
import {FiMenu} from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);

  const[menu, setMenu] = useState(false); // 메뉴의 초기값을 false로 설정
  const toggleMenu = () => {
      setMenu(menu=>!menu); // on, off
  }

  const [tab, setTab] = useState(1);

  return (
    <nav className="navbar-container">
        <div className="origin-menu">
          <ul>
              <li>
                { isShown && <img src={fireworkimg} alt="" className='firework'/> }
                <a href="/artist"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >아티스트</a>
              </li>
              <li>
                { isShown2 && <img src={fireworkimg} alt="" className='firework'/> }
                <a href="/schedule"
                  onMouseEnter={() => setIsShown2(true)}
                  onMouseLeave={() => setIsShown2(false)}
                >행사일정</a>
              </li>
              <li>
                { isShown5 && <img src={mic} alt="" className='mic'/> }
                  <a href="/"
                    onMouseEnter={() => setIsShown5(true)}
                    onMouseLeave={() => setIsShown5(false)}
                  >
                    {/* <img src={logo} alt="" className='logo-img'/> */}
                    Fan'stival
                    <p className='ps'>FESTIVAL OF FANS</p>
                  </a>
              </li>
              <li>
                { isShown3 && <img src={fireworkimg} alt="" className='firework'/> }
                <a href="/board"
                  onMouseEnter={() => setIsShown3(true)}
                  onMouseLeave={() => setIsShown3(false)}
                >커뮤니티</a>
                </li>
              <li>
                { isShown4 && <img src={fireworkimg} alt="" className='firework'/> }
                <a href="/notice"
                  onMouseEnter={() => setIsShown4(true)}
                  onMouseLeave={() => setIsShown4(false)}
                >공지사항</a>
                </li>
          </ul>
        </div>

        <div className={menu ? "menu-container2" : "menu-container"}>
          <div className="menu-bar" onClick={()=>{
              toggleMenu()
          }}>
              {
                  menu ? (
                      <span className='closeBtn'>
                        <AiOutlineClose />
                      </span>
                  ) : (
                      <span className='menuBtn'>
                        <FiMenu />
                      </span>
                  )
              }
          </div>
          <div className={menu ? "open-menu" : "hide-menu"}>
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/artist">ARTIST</a></li>
              <li><a href="/schedule">SCHEDULE</a></li>
              <li><a href="/notice">NOTICE</a></li>
              <li><a href="/board">BOARD</a></li>
              <li><a href="/login">LOGIN</a></li>
            </ul>
            
            <div id='nav-lnb'>
              <p onClick={()=>{setTab(1)}} className={tab === 1 ? "active" : ""}>KR</p>
              <p onClick={()=>{setTab(2)}} className={tab === 2 ? "active" : ""}>EN</p>
              <p onClick={()=>{setTab(3)}} className={tab === 3 ? "active" : ""}>JP</p>
              <p onClick={()=>{setTab(4)}} className={tab === 4 ? "active" : ""}>CN</p>
            </div>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;