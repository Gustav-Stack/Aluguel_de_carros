import React from "react";
import "./styles/footer.css";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";

import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div id="contato">
      <div className="footer-form">
        <ul>
          <li>Pagina Inicial</li>
          <li>Modelos</li>
        </ul>

        <ul>
          <li>Depoimentos</li>
          <li>Contato</li>
        </ul>
        <form>
          <h3>Receba conteudo de Promoções ineditas</h3>
          <input
            className="form-content"
            type="email"
            placeholder="Insira Seu E-mail"
          ></input>
          <button className="form-button" type="submit">
            Assinar
          </button>
        </form>
      </div>
      <hr></hr>
      <div className="footer-icons">
        <h4>2023 Alugue, projeto pagina de Aluguel de Carros.</h4>
        <div>
          <BsInstagram />
          <BsFacebook />
          <RiTwitterXFill />
          <BsLinkedin />
        </div>
      </div>
    </div>
  );
}
