import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../style/About.css"


function About() {
  return (
    <section id="about">
        <div className="wrapper">
            <h3>About</h3>
            <p>Hello! I’m Ilham Bintang Pratama, a passionate junior frontend developer currently studying at Universitas Dinamika. With a strong foundation in HTML, CSS, JavaScript, Bootstrap, Vite, and React, I strive to create engaging and user-friendly web applications.</p>
            <p>I began my journey in web development at Binar Academy, where I honed my skills in frontend JavaScript. This experience provided me with a solid understanding of modern web technologies and best practices.</p>

            <h4>Programming Language & Tools</h4>
            <div className="skills">
            <FaHtml5 />
            <FaCss3Alt />
            <IoLogoJavascript />
            <FaReact />
            <FaGithub />
            </div>
        </div>
    </section>
  )
}

export default About