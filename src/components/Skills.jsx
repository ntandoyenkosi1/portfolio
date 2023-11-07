import { useState } from "react";

function Skills() {
  const [skills] = useState([
    { skill: "C#", class: "yellow sub-medium" },
    { skill: "JavaScript", class: "dark highest" },
    { skill: "React", class: "blue highest" },
    { skill: "HTML", class: "red highest" },
    { skill: "CSS", class: "dark highest" },
    { skill: "NodeJS", class: "yellow highest" },
    { skill: "TypeScript", class: "dark sub-highest" },
    { skill: "React Native", class: "blue sub-medium" },
    { skill: "Python", class: "red sub-medium" }
  ])
  return (<>
    <div id="skills" className="skills">
      <h1>Skills</h1>
      <div className="tech-stack">
        <div>
          {skills && skills.map((x, index) =>
            <div key={index} className="tech">
              <p>{x.skill}</p>
              <div className="progress"><span className={x.class}></span></div>
            </div>
          )}
        </div>
      </div>
    </div></>);
}
export default Skills