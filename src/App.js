import Ntando from "./img/ntandoyenkosi.jpg"
import CSharp from "./img/CSharp"
import Css from "./img/Css"
import Html from "./img/Html"
import Javascript from "./img/Js"
import NodeJs from "./img/Node"
import Python from "./img/Python"
import ReactNative from "./img/ReactNative"
import ReactComponent from "./img/React"
import TypeScript from "./img/TypeScript"
import Star from "./components/Star"
import StarFilled from "./components/StarFilled"
import GitHub from "./components/GitHub"
import LinkedIn from "./components/LinkedIn"
import Email from "./components/Email"
import HomePage from "./img/homepage.jpg"
import Arrow from "./components/Arrow"
import Uct from "./img/uct.png"
function App() {
  return (
    <div>
      <header>
        <div>
          {`<Ntandoyenkosi/>`}
        </div>
        <div>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Tech Stack</a>
          <a href="/">Projects</a>
          <a href="/">Contact</a>
        </div>
      </header>
      <div className="landing-page">
        <div>
          <img src={Ntando} alt="" width={300} />
          <h3>Hi There</h3>
          <h1>I'm Ntandoyenkosi Mendu</h1>
          {/* {I am a software developer} */}
          <h2>I create for the digital world.</h2>
        </div>
        <div>
          I am a Software Developer.
          <br />
          Studied Information Systems at University of Cape Town.
          <div>
            <a title="Let's connect on LinkedIn" href="https://www.linkedin.com/in/ntandoyenkosi-mendu/" target="_blank"><LinkedIn /></a>
            <a title="Contact me via Email" href="mailto:ntandoyenkosi.mendu@gmail.com" target="_blank"><Email /></a>
            <a title="Check out my work on GitHub" href="https://github.com/ntandoyenkosi1" target="_blank"><GitHub /></a>
          </div>
        </div>

      </div>
      <div className="work">
        <h1>My Work</h1>
        <div>
          <div className="project">
            <div>
              <h3>Big Small Blog</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
              <label>Node.JS, Handlebars, Express, MySQL</label><br />
              <a title="Open in new tab" href="#" target="_blank"><Arrow /></a>
              <a title="View source code" href="#" target="_blank"><GitHub /></a>
            </div>
            <div>
              <img src={HomePage} height={300} />
            </div>
          </div>
          <div className="project">
            <div>
              <h3>Big Small Blog</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
              <label>Node.JS, Handlebars, Express, MySQL</label><br />
              <a title="Open in new tab" href="#" target="_blank"><Arrow /></a>
              <a title="View source code" href="#" target="_blank"><GitHub /></a>
            </div>
            <div>
              <img src={HomePage} height={300} />
            </div>
          </div>
        </div>
      </div>
      <div className="self">
        <div className="education">
          <h1>Education</h1>
          <div>
            <div><img src={Uct} width={100} /></div>

            <div>
              <h3>University of Cape Town</h3>
              <h4>Bachelor of Commerce (Honours) specializing in Information Systems</h4>
              <label>Feb 2021-Nov 2021</label>
            </div>
          </div>
          <div>
            <div><img src={Uct} width={100} /></div>
            <div>
              <h3>University of Cape Town</h3>
              <h4>Bachelor of Commerce specializing in Information Systems</h4>
              <label>Mar 2017-Nov 2020</label></div>
          </div>

        </div>

      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="tech-stack">
          <div>
            <div className="tech">

              <p>C#</p>
              <div className="progress"><span className="yellow sub-highest"></span></div>
            </div>
            <div className="tech">

              <p>JavaScript</p>
              <div className="progress"><span className="dark highest"></span></div>
            </div>
            <div className="tech">

              <p>CSS</p>
              <div className="progress"><span className="red highest"></span></div>
            </div>
            <div className="tech">

              <p>HTML</p>
              <div className="progress"><span className="blue highest"></span></div>
            </div>
            <div className="tech">

              <p>React</p>
              <div className="progress"><span className="yellow highest"></span></div>
            </div>
            <div className="tech">

              <p>TypeScript</p>
              <div className="progress"><span className="dark sub-highest"></span></div>
            </div>
            <div className="tech">

              <p>Python</p>
              <div className="progress"><span className="blue sub-medium"></span></div>
            </div>
            <div className="tech">
              <p>React Native</p>
              <div className="progress"><span className="dark sub-medium"></span></div>
            </div>
            <div className="tech">
              <p>NodeJS</p>
              <div className="progress"><span className="red highest"></span></div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default App;
