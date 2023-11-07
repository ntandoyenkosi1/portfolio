import HomePage from "../img/homepage.jpg"
import PostMan from "../img/postman-to-markdown.png"
import GitHub from "../img/icons/GitHub"
import Arrow from "../img/icons/Arrow"
import { useState } from "react";
function Work() {
    const [projects] = useState([
        {
            title: "Big Small Blog",
            description: "This is a blogging platform. It provides users with the ability to create posts, view posts, and comment on other people's posts, making it an engaging platform for tech enthusiasts and bloggers.",
            tech: "Node.JS, Handlebars, Express, MySQL",
            link: "https://big-small-blog-cck37mrz7a-ue.a.run.app/",
            image: HomePage,
            github: "https://github.com/ntandoyenkosi1/big-small-blog"
        },
        {
            title: "Postman to Markdown",
            description: "This project allows you to convert a Postman JSON file to markdown format. This makes it easier to visualize your HTTP endpoints for ease-of-use and understanding.",
            tech: "Node.JS",
            link: "https://postman-to-markdown-cck37mrz7a-ue.a.run.app/",
            image: PostMan,
            github: "https://github.com/ntandoyenkosi1/postman-to-markdown"
        }
    ])
    return (<>
        <div id="projects" className="work">
            <h1>My Work</h1>
            <div>
                {projects.map((x, index) =>
                    <div key={index} className="project">
                        <div>
                            <h3>{x.title}</h3>
                            <p>{x.description}</p>
                            <label>{x.tech}</label><br />
                            <a className="link" title="Open in new tab" rel="noreferrer" href={x.link} target="_blank"><Arrow /></a>
                            <a className="github" title="View source code" href={x.github} rel="noreferrer" target="_blank"><GitHub /></a>
                        </div>
                        <div>
                            <img alt={x.title} src={x.image} />
                        </div>
                    </div>)}
            </div>
        </div></>);
}
export default Work