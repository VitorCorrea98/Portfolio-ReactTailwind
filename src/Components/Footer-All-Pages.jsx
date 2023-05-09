export default function Footer() {
    return(
        <footer className="Footer">
            <h4 className="text-3xl font-Oswald">Let’s Connect! I am also available for freelance projects.</h4>
            <ul className="flex gap-20 mt-10 text-xl font-Roboto">
                <li>
                <a href="https://www.linkedin.com/in/marianaribeirovaz/" target="_blank" rel="noreferrer" >
                    <div className="Link-Content">
                        <i className="fa-brands fa-linkedin"></i>
                        <p>Linkedin</p>
                    </div>
                </a>
                </li>
                <li>
                    <div className="Link-Content">
                        <i className="fa-regular fa-file-lines"></i>
                        <p>Resume</p>
                    </div>
                </li>
                <li>
                    <div className="Link-Content">
                    <i className="fa-regular fa-envelope"></i>
                        <p>E-mail</p>
                    </div>
                </li>
            </ul>
            <div id="section-resume"></div>
            <div id="section-contact"></div>
        </footer>
    )
}