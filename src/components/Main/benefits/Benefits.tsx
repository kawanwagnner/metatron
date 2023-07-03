import React from "react";
import { FaTruckFast, FaCreditCard } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

import "./css/Benefits.css";

const Benefits: React.FC = () => {
  return (
    <>
      <div id="container-benefits">
        <div className="flex-benefits">
          <div className="benefits">
            <span className="icone">
              <FaTruckFast />
            </span>
            <p>
              <strong>Frete grátis</strong> para todas as regiões do Brasil.
            </p>
          </div>
          <div className="benefits">
            <span className="icone">
              <FaCreditCard />
            </span>
            <p>
              Parcele suas compras em até <strong>3x sem juros.</strong>
            </p>
          </div>
          <div className="benefits">
            <span className="icone">
              <BsWhatsapp />
            </span>
            <p>
              Atendimento via WhatsApp <strong>rápido e ágil.</strong>
            </p>
          </div>
          <div className="benefits">
            <span className="icone">
              <AiFillHeart />
            </span>
            <p>
              <strong>Sua satisfação garantida</strong> ou seu dinheiro de
              volta.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
