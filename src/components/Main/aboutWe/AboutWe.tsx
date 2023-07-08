import React from "react";
import LogoAboutUs from "./img/metatronColorBlack.svg";

import "./css/AboutWe.css";

const Home: React.FC = () => {
  return (
    <main id="home">
      <hr style={{ width: "50%", margin: "50px auto -20px auto" }} />
      <div className="vakinha">
        <img className="post-vakinha" src={LogoAboutUs} alt="Banner 3 SLIDER" />
        <div className="container-text">
          <h2 className="tilte-about-us">QUEM SOMOS?</h2>
          <p className="paragraphy-about">
            Com apenas 3 meses de história a MetatrON ainda vai ter grande
            impacto no mercado brasileiro, não somente isso como também
            pretendemos criar mais oportunidades para pequenos empreendedores
            disciplinados e que almejam o sucesso a todo o custo! Mais e você
            aí, Vai ficar de fora desse projeto? Nos ajude a alcançar essa meta
            de uma vez por todas, doe para a causa. 🍀
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
