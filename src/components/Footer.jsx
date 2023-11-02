import Email from "../img/icons/Email"
import GitHub from "../img/icons/GitHub"
import LinkedIn from "../img/icons/LinkedIn"
function Footer() {
    return (<><div id="contact" className="footer">
        <footer>
            <div className="logo">
                {`<Ntandoyenkosi/>`}
            </div>
            <div>
                <div>
                    <a className="linkedin" title="Let's connect on LinkedIn" href="https://www.linkedin.com/in/ntandoyenkosi-mendu/" rel="noreferrer" target="_blank"><LinkedIn /></a>
                    <a className="email" title="Contact me via Email" href="mailto:ntandoyenkosi.mendu@gmail.com" rel="noreferrer" target="_blank"><Email /></a>
                    <a className="github" title="Check out my work on GitHub" href="https://github.com/ntandoyenkosi1" rel="noreferrer" target="_blank"><GitHub /></a>
                </div>
            </div>
        </footer>
    </div></>);
}
export default Footer