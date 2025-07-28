import { FaExternalLinkAlt, FaFolder, FaGithub } from "react-icons/fa"
import "../css/ProjectField.css"
import { Tooltip } from "react-tooltip"
function ProjectField({title, content, tech, period, repo, link}) {
    return (
        <div className="card">
            <div className="card-info">
                <div className="card-icon"><FaFolder size={32}/></div>
                <h2 className="card-title">{title}</h2>
                <div className="card-content">{content}</div>
            </div>
            <div className="card-tech">{tech}</div>
            <div className="card-footer">
                <div className="footer-date">{period}</div>
                <div className="footer-icon">
                    <a href={repo}><FaGithub data-tooltip-id="github-tip" /></a>
                    <a href={link}><FaExternalLinkAlt data-tooltip-id="external-tip" /></a>

                    <Tooltip id="github-tip" place="top" content="Github Repo" />
                    <Tooltip id="external-tip" place="top" content="External Link" />
                </div>
            </div>
        </div>
    )
}

export default ProjectField