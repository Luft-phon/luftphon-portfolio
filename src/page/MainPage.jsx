import { Element } from "react-scroll"
import "../css/MainPage.css"
import LightRayCompo from "../component/LightRays"
import TextType from '../Reactbits/TextAnimations/TextType/TextType';
import { Fade } from "react-awesome-reveal";
import ProfileImg from "../component/ProfileCard";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import ProjectField from "../component/ProjectField";
import GitHubFetch from "../component/GitHubFetch";
function MainPage() {

    const about_info = {
        info: `I’m currently an undergraduate student at Cal State Long Beach University. I’m pursuing a Bachelor of Science in Computer Science. Throughout my programming journey, I have completed an internship at FPT Software where I gained plenty of experience such as networking, technical skills.

Some of my current goals include gaining practical experience and cultivating valuable connections that will contribute to my personal and professional growth. I have a profound interest in various types of software development, including machine learning, operating systems, and full-stack development. I'm a huge enthusiast of desk setups and PCs.

In my free time, I enjoy playing and analyzing chess games, thrifting, playing video games, strumming my guitar, and trying local foods.`
    }


    const info_company_content = [
        {
            title: `Java-Backend Developer Intern @ FPT Software in Vietnam`,
            period: "September 2023 - December 2023",
            description: [
                "Contributed to the development of a School System Management Application that streamlined administrative operations, enhanced data accessibility, and improved user interactions for students, teachers, and administrators",
                "Integrated RESTful API to enable communication between the front-end and back-end, facilitating secure and efficient data exchange for features",
                "Using hibernate served as the ORM (Object-Relational Mapping) layer, enabling seamless data persistence and interaction with the relational database."
            ]
        }
        ,
        {
            title: `Full-stack Developer Intern @ NP Engagement`,
            period: "August 2022 - November 2022",
            description: [
                "Maintained and updated numerous partner websites and online services, ensuring peak performance and relevance with proficiency in HTML, CSS, and JavaScript.",
                "Integrated custom API scripts, optimized websites to fulfill unique client requirements and enhance user experience.",
                "Utilized my proficiency in WordPress, crafting visually stunning and highly functional platforms tailored to precise client specifications, ensuring optimal user engagement."
            ]
        }
    ]


    const name_company = [
        {
            name: "FPT Software",
            tabIndex: 0
        }
        ,
        {
            name: "Tech Software",
            tabIndex: 1
        }
    ]

    const [selectIndex, setSelectIndex] = useState(0)
    const selectedCompany = info_company_content[selectIndex];


    const project_name = [
        {
            title: "Deep Talk App",
            content: "This app offers layered questions, like an iceberg — starting from the light and simple, and gradually diving into the meaningful and hard to say.",
            tech: "React.js",
            period: "June 2025",
            repo: "https://github.com/Luft-phon/deep-talk-app",
            link: "https://deep-talk-app-sigma.vercel.app/"
        },
        {
            title: "React Portfolio",
            content: "An e-portfolio design built with ReactJS. This website ultilizes multiple React libraries including Reactbits, ... making the UI more professional.",
            tech: "React.js, GitHub API",
            period: "June 2025",
            repo: "https://github.com/Luft-phon/react-portfolio",
            link: "https://luftphon-portfolio.vercel.app/"
        },
        {
            title: "Badminton Management System",
            content: `A solution application is an online court reservation system designed for both users and court staff. 
                Users can do multiple features like authenticate, book a court online in advance conveniently instead of walk-in.`,
            tech: "React.js, ASP.NET",
            period: "June 2025",
            repo: "https://github.com/Luft-phon/badminton-management-system",
            link: ""
        }
    ]

    return (
        <div>
            <Element name="Home">
                <GitHubFetch />
                <LightRayCompo />
                <section id="home">
                    <Fade>
                        <div className="home-title">
                            <h1><TextType
                                text={["Hello, Luftphon here.", "I'm not a bug!"]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                            /></h1>
                            <h2>I like to build stuff occasionally.</h2>
                        </div>
                        <SyntaxHighlighter language="json" style={xonokai}>
                            {`class ThanhPhong
{
    string name = "Luftphon";
    string School = "Cal State Long Beach University";
    string Level = "Fresher"
    string Pronouns = "he/him";
    List<string> Hobbies = new List<string> { "soccer", "programming", "music", "travel" };
    List<string> Languages = new List<string> { "C#", "Java", "JavaScript", "TypeScript", ... };
}.`}
                        </SyntaxHighlighter>
                        <button>Say hello to me!</button>
                    </Fade>
                </section>

            </Element>
            <Element name="About">

                <section id="about">
                    <Fade direction="up">
                        <div className="title-box">
                            <div className="about-title">
                                <h1>~/About</h1>
                                <div className="line"></div>
                            </div>
                            <h3 className="about-subtitle">
                                Brief information about me and some of my interests.
                            </h3>
                        </div>
                        <div className="content">
                            <div className="content-info">{about_info.info}</div>
                            <div className="content-img">
                                <ProfileImg />
                            </div>
                        </div>
                        <div className="technologies">
                            <h3 className="about-subtitle">
                                Some technologies I have been using:
                            </h3>
                            <div className="badges">
                                <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
                                <img src="https://img.shields.io/badge/ASP.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt="ASP.NET" />
                                <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#" />
                                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
                                <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                                <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
                                <img src="https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white" alt="SQL Server" />
                                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
                                <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
                                <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                                <img src="https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="VS Code" />
                                <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />

                            </div>
                        </div>
                    </Fade>
                </section>

            </Element>
            <Element name="Experience">
                <section id="experience">
                    <Fade direction="down">
                        <div className="title-box">
                            <div className="about-title">
                                <h1>~/Experience</h1>
                                <div className="line"></div>
                            </div>
                            <h3 className="about-subtitle">
                                My current/past relevant experience. Click <a href="" style={{ color: 'var(--light-lime)' }}>here</a> to view my resume.
                            </h3>

                        </div>
                    </Fade>
                    <Fade direction="up">
                        <div className="experience-content">
                            <ul className="name-company">
                                {name_company.map((item, index) => (
                                    <li
                                        key={index}
                                        tabIndex={item.tabIndex}
                                        onClick={() => (setSelectIndex(index))}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                            <div className="info-company">
                                <div className="info-company-title">
                                    <h3>{selectedCompany.title}</h3>
                                    <p>{selectedCompany.period}</p>
                                </div>
                                <ul className="info-company-content">
                                    {selectedCompany.description.map((desc, index) => (
                                        <li key={index}>
                                            <FaArrowRight size={10} color="var(--light-lime)" /> {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Fade>


                </section>
            </Element>
            <Element name="Project">
                <section id="project">
                    <Fade direction="down">
                        <div className="title-box">
                            <div className="about-title">
                                <h1>~/Projects</h1>
                                <div className="line"></div>
                            </div>
                            <h3 className="about-subtitle">
                                Some of my favourite current and past creations.
                            </h3>
                        </div>
                    </Fade>
                    <div className="project-content">
                        {project_name.map((item, index) => (
                            <ProjectField key={index} title={item.title} content={item.content} repo={item.repo} tech={item.tech} period={item.period} link={item.link} />
                        ))}
                    </div>
                </section>
            </Element>
        </div>
    )
}

export default MainPage