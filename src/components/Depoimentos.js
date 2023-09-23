import React from "react";
import "./styles/depoimentos.css";
import { BiSolidQuoteSingleRight } from "react-icons/bi";

const depoimentos = [
  {
    message:
      "Nossa experiência de alugar um carro aqui foi incrível. O atendimento foi excelente e os carros estavam em perfeitas condições. Com certeza alugaremos novamente!",
    image: "https://via.placeholder.com/150", // Substitua pela URL da imagem desejada
    nome: "Maria",
    local: "Rio de Janeiro"
  },
  {
    message:
      "Ficamos muito satisfeitos com o serviço de aluguel de carros deste lugar. Os preços eram acessíveis e o processo de reserva foi fácil. Recomendamos a todos!",
    image: "https://via.placeholder.com/150", // Substitua pela URL da imagem desejada
    nome: "Carlos",
    local: "Belo Horizonte"
  },
  {
    message:
      "Excelente opção para aluguel de carros. Encontramos uma grande variedade de veículos para escolher e o processo de devolução foi simples e rápido.",
    image: "https://via.placeholder.com/150", // Substitua pela URL da imagem desejada
    nome: "Ana",
    local: "Fortaleza"
  }
];

export default function Depoimentos() {
  return (
    <div id="depoimentos">
      <h1>Depoimentos</h1>
      <div className="depoimentos">
        {depoimentos.map((depoimento) => (
          <div className="depoimentos-description">
            <h3>{depoimento.message}</h3>
            <div className="depoimento-perfil">
              <img
                className="depoimento-image"
                src={depoimento.image}
                alt="perfil"
              ></img>
              <div>
                <h4>{depoimento.nome}</h4>
                <h5>{depoimento.local}</h5>
              </div>
              <div className="quotes">
                <BiSolidQuoteSingleRight size={50} />

                <BiSolidQuoteSingleRight size={50} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
