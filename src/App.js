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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
              <a title="Open in new tab" href="#" target="_blank"><Arrow/></a>
              <a title="View source code" href="#"target="_blank"><GitHub/></a>
            </div>
            <div>
              <img src={HomePage} height={300}/>
            </div>
          </div>
          <div className="project">
            <div>
              <h3>Big Small Blog</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
              <a title="Open in new tab" href="#" target="_blank"><Arrow/></a>
              <a title="View source code" href="#"target="_blank"><GitHub/></a>
            </div>
            <div>
              <img src={HomePage} height={300}/>
            </div>
          </div> 
          <div className="project">
            <div>
              <h3>Big Small Blog</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
              <a title="Open in new tab" href="#" target="_blank"><Arrow/></a>
              <a title="View source code" href="#"target="_blank"><GitHub/></a>
            </div>
            <div>
              <img src={HomePage} height={300}/>
            </div>
          </div> 
          
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
