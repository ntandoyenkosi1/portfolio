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
          <div>
            <button>My Projects</button>
            <button>Contact Me</button>
          </div>
        </div>
        <div>
          I am a Software Developer.
          <br/>
          Studied Information Systems at University of Cape Town.
          
        </div>

      </div>
      <div className="about">
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="work">
        <h1>My Work</h1>
        <div>
          <a href="#">
            <img src={Ntando} width={150} />
            <p>Project 1</p>
            <label>HTML, CSS, JS</label>
          </a>
          <a href="#">
            <img src={Ntando} width={150} />
            <p>Project 2</p>
            <label>HTML, CSS, JS</label>
          </a>
          <a href="#">
            <img src={Ntando} width={150} />
            <p>Project 3</p>
            <label>HTML, CSS, JS</label>
          </a>
        </div>
      </div>
      <h1>Skills</h1>
      <div className="tech-stack">
        <div>
          <div className="tech">
            <CSharp />
            <p>C#</p>
            <span>
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <Star />
            </span>
          </div>
          <div className="tech">
            <Javascript />
            <p>JavaScript</p>
            <span>
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
            </span>
          </div>
          <div className="tech">
            <Css />
            <p>CSS</p>
            <span>
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
            </span>
          </div>
          <div className="tech">
            <Html />
            <p>HTML</p>
            <span>
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
            </span>
          </div>
          <div className="tech">
            <ReactComponent />
            <p>React</p>
            <span>
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
            </span>
          </div>
          <div className="tech">
            <TypeScript />
            <p>TypeScript</p>
            <span>
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <Star />
            </span>
          </div>
          <div className="tech">
            <Python />
            <p>Python</p>
            <span>
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <Star />
              <Star />
            </span>
          </div>
          <div className="tech">
            <ReactNative />
            <p>React Native</p>
            <span>
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <Star />
              <Star />
            </span>
          </div>
          <div className="tech">
            <NodeJs />
            <p>NodeJS</p>
            <span>
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
            </span>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
