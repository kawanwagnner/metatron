import React from "react";
import "./css/AboutWe.css";

import PosterImg from "./img/post.png";

const AboutWe: React.FC = () => {
  return (
    <div className="container" id="info-container">
      <div className="col-12">
        <h2 className="title-details color-white">Detalhes importantes</h2>
        <p className="subtitle color-grey fs-6">70% OFF na primeira compra!!</p>
      </div>

      <div className="container-about-we">
        <div className="row">
          <div className="col-12 col-md-5" id="info-banner">
            <img src={PosterImg} alt="Informações da Empresa" />
          </div>
          <div className="col-12 col-md-7 bg-sub-white" id="info-content">
            <div className="row">
              <div className="col-12">
                <h2 className="title-about color-white">Quem somos?</h2>
                <p className="subtitle color-grey">
                  <strong>
                    A MetatrON é uma empresa de roupas e acessórios dedicada a
                    fornecer produtos de moda de alta qualidade para homens,
                    mulheres e crianças. Com uma equipe de designers talentosos
                    e uma busca constante pelas últimas tendências, garantimos
                    que nossos clientes estejam sempre na vanguarda da moda.
                    Valorizamos a satisfação do cliente e buscamos construir
                    relacionamentos duradouros, oferecendo um excelente
                    atendimento ao cliente em todas as etapas. Na MetatrON,
                    acreditamos que a moda é uma forma de expressão pessoal e
                    oferecemos uma ampla variedade de estilos para atender a
                    todos os gostos e preferências. Seja você um entusiasta da
                    moda ou alguém que valoriza o conforto, estamos prontos para
                    acompanhá-lo em sua jornada de estilo, fornecendo roupas e
                    acessórios que agreguem valor ao seu guarda-roupa. Bem-vindo
                    à MetatrON, onde a moda encontra a personalidade!
                  </strong>
                </p>
              </div>
              <div className="col-12" id="info-numbers">
                <div style={{ color: "#0000ff" }} className="row">
                  <div className="col-4">
                    <h3 className="color-white">6</h3>
                    <p className="color-grey fw-bold">
                      Meses de história e experiências absorvidas;
                    </p>
                  </div>
                  <div className="col-4">
                    <h3 className="color-white">70</h3>
                    <p className="color-grey fw-bold">
                      Metas Cumpridas e objetivos alcançados!
                    </p>
                  </div>
                  <div className="col-4">
                    <h3 className="color-white">30</h3>
                    <p className="color-grey fw-bold">
                      Clientes ativos e investidores!
                    </p>
                  </div>
                  <a
                    href="vakinha.html"
                    className="btn btn-outline-primary btn-about rounded"
                  >
                    Saber Mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWe;
