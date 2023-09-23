import React from "react";
import "./styles/testimonials.css";

import { TbReceiptTax } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";

import { BsCashCoin } from "react-icons/bs";

export default function Testimonials() {
  const whyChoose = [
    {
      icon: <BiWorld className="icon" size={150} />,
      title: "Suporte Entre Estados",
      message:
        "Levamos suas viagens a sério, por isso oferecemos diversos pontos tanto de entrega quanto de retirada para que você possa se aventurar em outros estados."
    },
    {
      icon: <BsCashCoin className="icon" size={75} />,
      title: "Preço com tudo incluso",
      message:
        "Tudo que você precisa já está incluso no preço, com total transparência de preço sem enrolação."
    },
    {
      icon: <TbReceiptTax className="icon" size={100} />,
      title: "Sem taxas surpresa",
      message:
        "Acreditamos que a transparência é o melhor elemento em uma negociação, por isso mantemos todos os preços no seu devido lugar."
    }
  ];

  return (
    <div>
      <img
        className="car-img"
        src="https://freepngimg.com/download/toyota/4-toyota-png-image-car-image.png"
        alt="imagem de um carro"
      ></img>
      <div className="testimonials">
        <div className="testimonials-desc">
          <h3>Porque nos Escolher</h3>
          <h1>Melhor Custo Benefício que você vai encontrar</h1>
          <p>
            Nós nos preocupamos demais com nossos clientes, por isso estamos
            sempre atentos para oferecer os melhores preços e serviços sempre
            com a maior disponibilidade, tudo isso pensando em você, temos uma
            equipe especialista que trabalhar incasavelmente para achar os
            melhores match para que você possa alugar seu carro com
            tranquilidade.
          </p>
          <button className="testimonials-button">Ver Detalhes</button>
        </div>
        <div className="testimonials-details">
          {whyChoose.map((whyChoose) => (
            <div className="why-choose-us">
              {whyChoose.icon}
              <div>
                <h2>{whyChoose.title}</h2>
                <p>{whyChoose.message} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
