import { useEffect } from "react"
import Typewriter from 'typewriter-effect/dist/core'
import About from "./components/About"
import Work from "./components/Work"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  function toggleMenu() {
    document.querySelector('.hamburger-btn').style.display = "none"
    document.querySelector('.x-btn').style.display = "inline"
    document.querySelector('.hamburger').style.display = "flex"
  }
  function untoggleMenu() {
    document.querySelector('.hamburger-btn').style.display = "inline"
    document.querySelector('.x-btn').style.display = "none"
    document.querySelector('.hamburger').style.display = "none"
  }
  useEffect(() => {
    var app = document.getElementById('typer');

    var typewriter = new Typewriter(app, {
      loop: false,
      delay: 75, cursor: " "
    });

    typewriter
      .changeCursor(' ')
      .typeString('I\'m Ntandoyenkosi')
      .pauseFor(300)
      .deleteChars(19)
      .typeString('I\'m a software developer.')
      .pauseFor(1000)
      .deleteChars(21)
      .typeString('Ntandoyenkosi')
      .start();
  }, [])
  return (
    <div className="mouse-tracking">
      <Header toggleMenu={toggleMenu} untoggleMenu={untoggleMenu} />
      <About />
      <Work />
      <Education />
      <Skills />
      <Footer />
    </div>

  );
}

export default App;
