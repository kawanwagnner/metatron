import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

import "./css/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>empresa</h4>
            <ul>
              <li>
                <a href="#">sobre nós</a>
              </li>
              <li>
                <a href="#">nossos serviços</a>
              </li>
              <li>
                <a href="#">política de privacidade</a>
              </li>
              <li>
                <a href="#">programa de afiliados</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>ajuda</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">envio</a>
              </li>
              <li>
                <a href="#">devoluções</a>
              </li>
              <li>
                <a href="#">status do pedido</a>
              </li>
              <li>
                <a href="#">opções de pagamento</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>loja online</h4>
            <ul>
              <li>
                <a href="#">relógios</a>
              </li>
              <li>
                <a href="#">bolsas</a>
              </li>
              <li>
                <a href="#">sapatos</a>
              </li>
              <li>
                <a href="#">vestidos</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>nos siga</h4>
            <div className="social-links">
              <a href="#">
                <BiLogoFacebook />
              </a>
              <a href="#">
                <AiOutlineTwitter />
              </a>
              <a href="#">
                <AiFillInstagram />
              </a>
              <a href="#">
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
