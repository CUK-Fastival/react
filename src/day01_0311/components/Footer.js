import './Footer.css';
import {AiOutlineInstagram} from 'react-icons/ai';
import {RiKakaoTalkFill} from 'react-icons/ri';
import {TfiYoutube} from 'react-icons/tfi';
import {FaFacebookSquare} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="sns-container">
                    <ul>
                        <li><a href="#"><RiKakaoTalkFill /></a></li>
                        <li><a href="#"><AiOutlineInstagram /></a></li>
                        <li><a href="#"><FaFacebookSquare /></a></li>
                        <li><a href="#"><TfiYoutube /></a></li>
                    </ul>
                </div>
                <div className="address">Copyright © <span className="team">Fastival</span> Catholic University of Korea CSIE 19 Co., Ltd. All rights reserved.</div>
            </div>
        </footer>
    );
}

export default Footer;