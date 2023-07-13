import React, { useState } from "react";
import logo from "./img/metatronColorBlack.svg";

import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { FaLocationDot, FaMagnifyingGlass } from "react-icons/fa6";

import "../header/css/Navbar.css";

const Navbar: React.FC = () => {
  const [navbarAtivo, setNavbarAtivo] = useState(false);

  const handleClick = () => {
    setNavbarAtivo(!navbarAtivo);
    document.body.style.overflowX = "hidden";
  };

  const handleLinkClick = () => {
    setNavbarAtivo(false);
  };

  return (
    <>
      <div id="promotion">
        <p>FRETE GRÁTIS PARA TODO O BRASIL - 70% OFF</p>
      </div>

      <header id="cabeçalho">
        <button id="btn-menu" onClick={handleClick}>
          {navbarAtivo ? <GrClose /> : <AiOutlineMenu />}
        </button>

        <img id="logo" src={logo} alt={"logo"} />

        <div id="header-info">
          <div className="search-input">
            <input type="text" placeholder="O que você está buscando?" />
            <button>
              <FaMagnifyingGlass />
            </button>
          </div>

          <nav id="navbar" className={navbarAtivo ? "active" : ""}>
            <button id="btn-menu-desk">
              <AiOutlineMenu />
            </button>
            <ul id="list-navbar">
              <li>
                <a
                  className="nav-link white-color active"
                  aria-current="page"
                  href="#promotion"
                  onClick={handleLinkClick}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="nav-link white-color"
                  href="#produtos"
                  onClick={handleLinkClick}
                >
                  Correntes
                </a>
              </li>
              <li>
                <a
                  className="nav-link white-color"
                  href="#produtos"
                  onClick={handleLinkClick}
                >
                  Pulseiras
                </a>
              </li>
              <li>
                <a
                  className="nav-link white-color"
                  href="#contato"
                  onClick={handleLinkClick}
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  className="nav-link white-color"
                  href="#"
                  onClick={handleLinkClick}
                >
                  Investimentos
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="products-for-client">
          <div id="btn-location">
            <button>
              <FaLocationDot size={30} />
            </button>
            <p>Rastreio</p>
          </div>
          <div id="btn-cart-shopping">
            <button>
              <FaShoppingCart size={32} />
            </button>
            <p>Carrinho</p>
          </div>
        </div>
      </header>

      <div className="media-search-input">
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
