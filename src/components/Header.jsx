import Hamburger from "../img/icons/Hamburger"
import X from "../img/icons/X"
function Header({toggleMenu,untoggleMenu}) {
    return (<>
        <header>
            <div>
                <span className="logo">{`<Ntandoyenkosi/>`}</span>
            </div>
            <div className="menu">
                <span className="hamburger-btn" onClick={() => toggleMenu()}><Hamburger /></span>
                <span className="x-btn" onClick={() => untoggleMenu()}><X /></span>
                <div className="hamburger">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#education">Education</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            <div>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#education">Education</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </header>
    </>)
}
export default Header