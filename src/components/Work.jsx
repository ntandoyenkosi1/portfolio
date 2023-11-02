import HomePage from "../img/homepage.jpg"
import GitHub from "../img/icons/GitHub"
import Arrow from "../img/icons/Arrow"
import { useState } from "react";
function Work() {
    const [projects] = useState([
        {
            title: "Big Small Blog",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \neiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco",
            tech: "Node.JS, Handlebars, Express, MySQL",
            link: "#",
            image: HomePage,
            github: "#"
        },
        {
            title: "Big Small Blog",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \neiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco",
            tech: "Node.JS, Handlebars, Express, MySQL",
            link: "#",
            image: HomePage,
            github: "#"
        }
    ])
    return (<>
        <div id="projects" className="work">
            <h1>My Work</h1>
            <div>
                {projects.map((x, index) =>
                    <div className="project">
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