import React, { useState } from "react";
import logo from "./img/metatronColorBlack.svg";

import { AiOutlineMenu } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { FaLocationDot, FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import "../header/css/Navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
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

        <img id="logo" src={logo} alt={"logo"} onClick={() => navigate("/")} />

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
                  onClick={handleLinkClick}
                  href={"/"}
                >
                  Página Inicial
                </a>
              </li>
              <li>
                <a
                  className="nav-link white-color"
                  href="#produtos"
                  onClick={handleLinkClick}
                >
                  Acessórios
                </a>
              </li>
              <li>
                <a
                  className="nav-link white-color"
                  href="#produtos"
                  onClick={handleLinkClick}
                >
                  Roupas
                </a>
              </li>
              <li>
                <a
                  className="nav-link white-color"
                  href="#produtos"
                  onClick={handleLinkClick}
                >
                  Gamer
                </a>
              </li>
              <li>
                <a
                  className="nav-link white-color"
                  href="#"
                  onClick={handleLinkClick}
                >
                  Casa
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="products-for-client">
          <div id="btn-location" onClick={() => navigate("/")}>
            <button>
              <FaLocationDot size={25} />
            </button>
            <p>Rastreio</p>
            <h6 className="rhetorical-question">Onde está meu pedido?</h6>
          </div>
          <div id="btn-cart-shopping" onClick={() => navigate("/favorited")}>
            <button>
              <span className="counter">0</span>
              <BsFillHandbagFill size={28} />
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
