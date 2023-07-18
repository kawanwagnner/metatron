import React from "react";
import { Container, Image } from "react-bootstrap";
import logo from "./img/LogoMetatron.svg";

import "./css/AboutWe.css";

const AboutUs: React.FC = () => {
  return (
    <section className="container-fluid" id="sobre-mim">
      <div className="wrapper">
        <h3 className="about-title">Quem somos?</h3>
        <Container className="section">
          <div id="container-image">
            <Image src={logo} alt="Photo" roundedCircle id="photo" />
            <h4 className="about-typing d-inline-flex ms-3 mt-4 fst-italic">
              MetatrON.
            </h4>
          </div>
          <div className="flex-column">
            <p className="paragraphy fs-5 fst-italic">
              Na Metatron, unimos a elegância das roupas com a inovação da
              tecnologia. Somos apaixonados por criar experiências únicas,
              oferecendo produtos de alta qualidade que combinam estilo e
              funcionalidade. Combinando a arte do design com as últimas
              tendências tecnológicas, proporcionamos soluções vestíveis que
              elevam o seu estilo e simplificam o seu dia a dia. Nossa equipe
              dedicada e especializada está comprometida em superar suas
              expectativas. Desde a seleção cuidadosa dos materiais até o
              desenvolvimento de recursos inteligentes, cada detalhe é pensado
              para oferecer um produto excepcional. Acreditamos que a moda e a
              tecnologia devem andar de mãos dadas, trazendo inovação e
              praticidade para o seu guarda-roupa. Valorizamos a confiança e a
              satisfação dos nossos clientes. Trabalhamos incessantemente para
              garantir a excelência em cada aspecto do nosso negócio, desde o
              atendimento ao cliente até a entrega dos produtos. Estamos
              comprometidos em fornecer um serviço de qualidade, uma experiência
              de compra segura e produtos que você irá adorar. Seja você um
              entusiasta da moda ou um aficionado por tecnologia, na Metatron
              você encontrará o equilíbrio perfeito entre estilo e inovação.
              Junte-se a nós em nossa jornada e descubra um mundo onde as roupas
              ganham vida com a magia da tecnologia.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AboutUs;
