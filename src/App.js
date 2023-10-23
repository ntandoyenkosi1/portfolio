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
      <div>
        <div>
          <img src={Ntando} alt="" width={300} />
          <h3>Hi There</h3>
          <h1>I'm Ntandoyenkosi Mendu</h1>
          {/* {I am a software developer} */}
          <h2>I create for the digital world.</h2>
          <div>
            <button>Resume</button>
            <button>Contact Me</button>
          </div>
        </div>

      </div>
      <div className="about">
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="tech-stack">
        <div>
          <div className="tech">
            <CSharp/>
            <p>C#</p>
          </div>
          <div className="tech">
            <Javascript/>
            <p>JavaScript</p>
          </div>
          <div className="tech">
            <Css/>
            <p>CSS</p>
          </div>
          <div className="tech">
            <Html/>
            <p>HTML</p>
          </div>
          <div className="tech">
            <ReactComponent/>
            <p>React</p>
          </div>
          <div className="tech">
            <TypeScript/>
            <p>TypeScript</p>
          </div>
          <div className="tech">
            <Python/>
            <p>Python</p>
          </div>
          <div className="tech">
            <ReactNative/>
            <p>React Native</p>
          </div>
          <div className="tech">
            <NodeJs/>
            <p>NodeJS</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
