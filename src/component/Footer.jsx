import "../css/Footer.css"
function Footer() {
    return (
        <div className="footer">
            <p>Built with <strong>ReactJS</strong> by {" "}
                <a href="https://github.com/Luft-phon">
                    Luftphon
                </a></p>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
    )
}

export default Footer