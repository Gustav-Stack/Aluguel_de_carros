import React, { useState, useEffect } from "react";
import "./styles/modelos.css";
import { cars } from "./cars";

export default function Modelos() {
  const [carInfo, setCarInfo] = useState({
    brand: "",
    model: "",
    image: "",
    dailyPrice: 0, // Preço diário em sua moeda local
    doors: 0, // Quantidade de portas
    hasAirConditioning: false, // Se o carro tem ar condicionado
    fuelType: "", // Tipo de combustível
    year: 0, // Ano do carro
    transmissionType: ""
  });

  useEffect(() => {
    setCarInfo(cars[0]);
  }, []);
  function handleButtonClick(event) {
    const i = event.target.id;

    setCarInfo(cars[i]);
  }
  return (
    <div id="models">
      <h3>Modelo dos Veículos</h3>
      <h1>Nossos Veículos mais Econômicos</h1>

      <div className="modelos">
        <ul>
          {cars.map((car, index) => (
            <li key={index} id={index} onClick={handleButtonClick}>
              {car.model}
            </li>
          ))}
        </ul>
        <img className="modelos-car-img" alt="carro" src={carInfo.image}></img>
        <div>
          <table>
            <thead>
              <tr>
                <th colspan="2">{carInfo.dailyPrice}R$ / Diária</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Modelo</td>
                <td>{carInfo.model}</td>
              </tr>

              <tr>
                <td>Marca</td>
                <td>{carInfo.brand}</td>
              </tr>

              <tr>
                <td>Ano</td>
                <td>{carInfo.year}</td>
              </tr>

              <tr>
                <td>Portas</td>
                <td>{carInfo.doors}</td>
              </tr>

              <tr>
                <td>Ar Condicionado</td>
                <td>{carInfo.hasAirConditioning ? "sim" : "não"}</td>
              </tr>

              <tr>
                <td>Transmisão</td>
                <td>{carInfo.transmissionType}</td>
              </tr>

              <tr>
                <td>Combustível</td>
                <td>{carInfo.fuelType} </td>
              </tr>
            </tbody>
          </table>
          <button className="modelos-button">Alugar Agora</button>
        </div>
      </div>
    </div>
  );
}
