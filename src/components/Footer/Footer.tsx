import React from "react";
import {
  FiMail,
  FiBook,
  FiMessageSquare,
  FiLinkedin,
  FiHeart,
} from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="container-fluid bg-black" id="footer">
        <div className="container">
          <div className="row">
            {/* FOOTER TOP */}
            <div className="col-12" id="footer-top">
              <div className="row justify-content-between">
                <div className="col-4">
                  <h2>MetatrON</h2>
                </div>
                <div className="col-4" id="social-icons">
                  <a
                    href="https://kawanwagnner.github.io/Portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiMail />
                  </a>
                  <a target="_blank" href="mailto:kawanwagnner.gs@gmail.com">
                    <FiBook />
                  </a>
                  <a href="https://contate.me/kawanwagnner7" target="_blank">
                    <FiMessageSquare />
                  </a>
                  <a
                    href="http://linkedin.com/in/kawan-wagnner-296594236/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin />
                  </a>
                </div>
              </div>
            </div>

            {/* FOOTER DETAILS */}
            <div className="col-12" id="footer-details">
              <div className="row">
                <div className="col-12 col-md-4" id="news-container">
                  <h4>Fique por dentro das novidades</h4>
                  <p className="color-grey">
                    Inscreva-se para saber tudo em primeira mão:
                  </p>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control rounded"
                        placeholder="Digite o seu e-mail"
                      />
                    </div>
                    <a
                      href="mailto:kawanwagnner.gs@gmail.com"
                      className="btn btn-outline-primary rounded"
                    >
                      Inscrever-me
                    </a>
                  </form>
                </div>
                <div className="col-12 col-md-4" id="contact-container">
                  <h4>Formas de contato</h4>
                  <p className="color-grey">(11) 93906-0203</p>
                  <p className="color-grey">kawanwagnner.gs@gmail.com</p>
                </div>
                <div className="col-12 col-md-4" id="links-container">
                  <div className="row">
                    <h4>Você pode estar buscando por:</h4>
                    <div className="col-6">
                      <ul className="list-unstyled">
                        <li>
                          <a href="#promotion" className="color-grey">
                            Início
                          </a>
                        </li>
                        <li>
                          <a href="#produto" className="color-grey">
                            Correntes
                          </a>
                        </li>
                        <li>
                          <a href="#produto" className="color-grey">
                            Pulseiras
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul className="list-unstyled">
                        <li>
                          <a href="vakinha.html" className="color-grey">
                            Doe para a causa
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://contate.me/kawanwagnner7"
                            target="_blank"
                            className="color-grey"
                          >
                            WhatsApp
                          </a>
                        </li>
                        <li>
                          <a href="#contato" className="color-grey">
                            Contato
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER BOTTOM */}
            <div className="col-12" id="footer-bottom">
              <div className="row justify-content-between">
                <div className="col-12 col-md-3">
                  <p className="color-grey">MetatrON &copy; 2023.</p>
                </div>
                <div className="col-12 col-md-3">
                  <p className="color-grey">
                    Prezando sempre por confiança.
                    <span style={{ color: "#e61e10" }}>
                      <FiHeart />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
