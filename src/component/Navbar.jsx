import { Link } from "react-scroll"
import "../css/Navbar.css"
import { FaFile, FaGithub, FaLinkedin, } from "react-icons/fa"

function Navbar() {
    return (
        <header>
            <div>
                <ul className="nav-link">
                    <li>
                        <a href="https://www.linkedin.com/in/thanh-phong-129426276/"><FaLinkedin size={30} /></a>
                    </li>
                    <li>
                        <a href="https://github.com/Luft-phon"><FaGithub size={30} /></a>
                    </li>
                    <li>
                        <a href="/Phong Ngo-Resume-Internship.pdf" target="_blank" rel="noopener noreferrer">
                            <FaFile size={30} />
                        </a>
                    </li>
                </ul>
                <ul className="nav-scroll">
                    <li><Link to="Home" duration={500}>/home</Link></li>
                    <li><Link to="About" duration={500}>/about</Link></li>
                    <li><Link to="Experience" duration={500}>/experience</Link></li>
                    <li><Link to="Project" duration={500}>/project</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar