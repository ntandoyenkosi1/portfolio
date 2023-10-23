import Ntando from "./img/ntandoyenkosi.jpg"
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
          
        </div>
      </div>
    </div>

  );
}

export default App;
