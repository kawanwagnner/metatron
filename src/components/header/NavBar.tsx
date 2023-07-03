import React from "react";
import logo from "./img/logo.jpg";

import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaLocationDot, FaMagnifyingGlass } from "react-icons/fa6";

import "../header/css/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <>
      <div id="promotion">
        <p>FRETE GRÁTIS PARA TODO O BRASIL - 70% OFF</p>
      </div>

      <header id="cabeçalho">
        <button id="btn-menu">
          <AiOutlineMenu />
        </button>

        <a href="index.html">
          <img id="logo" src={logo} alt={"logo"} />
        </a>

        <div id="info-navigation">
          <div id="header-info">
            <div className="container-for-search">
              <div className="flex-input">
                <input type="text" placeholder="O que você está buscando?" />
                <button>
                  <FaMagnifyingGlass />
                </button>
              </div>
              <div className="products-for-client">
                <div id="btn-location">
                  <button>
                    <FaLocationDot size={30} />
                  </button>
                  <span>Rastreio</span>
                </div>
                <div id="btn-cart-shopping">
                  <button>
                    <FaShoppingCart size={32} />
                  </button>
                  <span>Carrinho</span>
                </div>
              </div>
            </div>
            <div id="header-navigation">
              <button id="btn-menu-desk">
                <AiOutlineMenu />
              </button>
              <nav id="navbar">
                <ul id="list-navbar">
                  <li>
                    <a
                      className="nav-link white-color active"
                      aria-current="page"
                      href="#promotion"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-link white-color" href="#produtos">
                      Correntes
                    </a>
                  </li>
                  <li>
                    <a className="nav-link white-color" href="#produtos">
                      Pulseiras
                    </a>
                  </li>
                  <li>
                    <a className="nav-link white-color" href="#contato">
                      Contato
                    </a>
                  </li>
                  <li>
                    <a className="nav-link white-color" href="vakinha.html">
                      Investimentos
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="media-flex-input">
        <input type="text" placeholder="O que você está buscando?" />
        <button>
          <FaMagnifyingGlass />
        </button>
      </div>

      <div className="hr-gradient"></div>
    </>
  );
};

export default Navbar;
