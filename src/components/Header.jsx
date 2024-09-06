import profilePicture from '../assets/profile-picture.png'
import {FaInstagram} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import '../style/Header.css'

function Header() {
    return (
        <header>
            <div className="header-jumbotron">
                <img src={profilePicture}/>

                <h3>Ilham Bintang Pratama</h3>
                <p>Front End Developer</p>

                <div className="socialMedia">
                    <a href="https://www.instagram.com/ilhambintx/"><FaInstagram/></a>
                    <a href="https://www.linkedin.com/in/ilhambint/"><FaLinkedin /></a>
                    <a href="https://github.com/Ilhambint"><FaGithub /></a>
                </div>
            </div>
        </header>
    )
}

export default Header