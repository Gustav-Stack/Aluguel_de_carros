import React from "react";
import "./styles/landpage.css";

export default function LandPage() {
  return (
    <div id="home" className="landpage">
      <div className="landpage-description">
        <h3>Planeje Sua Viagem Hoje</h3>
        <h1>Economize com nosso aluguel de Carros</h1>
        <h4>
          Alugue o carro ideal para sua viagem como os melhores preçoes
          segurança e conforto
        </h4>
        <button className="see-cars">Ver Carros</button>
        <button className="learn-more">Saber mais</button>
      </div>
      <img
        className="img-carro"
        alt="carro"
        src="https://img.freepik.com/free-vector/front-car-concept-illustration_114360-7978.jpg?w=740&t=st=1694922929~exp=1694923529~hmac=bcf367f68f593fd70f532c853f2675b4d331da2a20af96cab5dde5d92f97be12"
      ></img>
    </div>
  );
}
