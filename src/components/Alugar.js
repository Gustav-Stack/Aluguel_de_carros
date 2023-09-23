import React, { useState } from "react";
import "./styles/alugar.css";
import { cars } from "./cars";

const locais = [
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Salvador",
  "Brasília",
  "Recife",
  "Fortaleza",
  "Curitiba",
  "Porto Alegre",
  "Manaus"
];

export default function Alugar() {
  const [formData, setFormData] = useState({
    carType: "",
    pickDate: "",
    pickLocation: "",
    leaveDate: "",
    leaveLocation: ""
  });

  const [filteredCars, setFilteredCars] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFilteredCars(cars.filter((car) => car.type === formData.carType));
  }
  return (
    <div className="alugar">
      <h3>Alugue um Carro</h3>

      <div>
        <form className="alugar-form" onSubmit={handleSubmit}>
          <div>
            <h4>Selecione o tipo de Carro</h4>
            <select name="carType" onChange={handleChange}>
              <option value="">Selecione</option>
              {cars.map((car) => (
                <option key={car.model} value={car.type}>
                  {car.type}
                </option>
              ))}
            </select>

            <h4>Selecione a data em que irá Alugar</h4>
            <input
              name="pickDate"
              type="date"
              value={formData.pickDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <h4>Onde irá Pegar</h4>
            <select name="pickLocation" onChange={handleChange}>
              <option value="">Selecione</option>
              {locais.map((local) => (
                <option key={local} value={local}>
                  {local}
                </option>
              ))}
            </select>

            <h4>Selecione a data em que irá Deixar</h4>
            <input
              name="leaveDate"
              type="date"
              value={formData.leaveDate}
              onChange={handleChange}
            />
          </div>
          <div className="alugar-button-align">
            <h4>Onde irá Deixar</h4>
            <select name="leaveLocation" onChange={handleChange}>
              <option value="">Selecione</option>
              {locais.map((local) => (
                <option key={local} value={local}>
                  {local}
                </option>
              ))}
            </select>

            <button type="submit" className="alugar-button">
              Procurar
            </button>
          </div>
        </form>
        {filteredCars.length > 0 ? (
          <div className="alugar-found">
            <div>
              <h3>Aqui estão os Carros encontrados para:</h3>
              <h5>Tipo de Carro: {formData.carType}</h5>
              <h5>Data do Aluguel: {formData.pickDate}</h5>
              <h5>Local onde ira Pegar: {formData.pickLocation}</h5>
              <h5>Local de entrega: {formData.leaveLocation}</h5>
              <h5>Data da entrega: {formData.leaveDate}</h5>
            </div>
            <ul>
              <h5>Carros Encontrados:</h5>
              {filteredCars.map((car) => (
                <div key={car.model}>
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="car-image"
                  />
                  <li>
                    {car.brand} - {car.model}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
