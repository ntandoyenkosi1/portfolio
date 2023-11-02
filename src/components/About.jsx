import Ntando from "../img/ntandoyenkosi.jpg"
import Email from "../img/icons/Email"
import GitHub from "../img/icons/GitHub"
import LinkedIn from "../img/icons/LinkedIn"
function About() {
    return (<>
        <div id="about" className="landing-page">
            <div>
                <img src={Ntando} alt="Ntandoyenkosi animated" width={300} />
                <h3>Hi There</h3>
                <h1 id="typer">I'm Ntandoyenkosi Mendu</h1>
                <h2>I create for the digital world.</h2>
            </div>
            <div>
                I am a Software Developer.
                <br />
                Studied Information Systems at University of Cape Town.
                <div>
                    <a className="linkedin" title="Let's connect on LinkedIn" href="https://www.linkedin.com/in/ntandoyenkosi-mendu/" rel="noreferrer" target="_blank"><LinkedIn /></a>
                    <a className="email" title="Contact me via Email" href="mailto:ntandoyenkosi.mendu@gmail.com" rel="noreferrer" target="_blank"><Email /></a>
                    <a className="github" title="Check out my work on GitHub" href="https://github.com/ntandoyenkosi1" rel="noreferrer" target="_blank"><GitHub /></a>
                </div>
            </div>
        </div></>)
}
export default About