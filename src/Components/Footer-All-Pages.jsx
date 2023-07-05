export default function Footer() {
  return (
    <footer className="Footer">
      <h4 className="text-3xl font-Oswald">
        Let’s Connect! I am also available for freelance projects.
      </h4>
      <ul className="flex gap-20 mt-10 text-xl font-Roboto">
        <li>
          <a
            href="https://www.linkedin.com/in/marianaribeirovaz/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="Link-Content">
              <i className="fa-brands fa-linkedin"></i>
              <p>Linkedin</p>
            </div>
          </a>
        </li>
        <li>
          <div id="section-resume">
            <a
              href="https://drive.google.com/file/d/1JGXcsJYMHpF-QL5ec_Y2MIDTUp4x9qZD/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="Link-Content">
                <i className="fa-regular fa-file-lines"></i>
                <p>Resume</p>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div id="section-contact">
            <a href="mailto:ribeirovazmariana@gmail.com">
              <div className="Link-Content">
                <i className="fa-regular fa-envelope"></i>
                <p>E-mail</p>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </footer>
  );
}
