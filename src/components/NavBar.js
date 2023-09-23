import React, { useState } from "react";
import "./styles/nav.css";
import { BsFillCarFrontFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
export default function NavBar() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [styles, setStyles] = useState(false);
  function handleButtonClik(event) {
    const registerOrLogin = event.target.id;
    if (registerOrLogin === "register") {
      setRegister(!register);
    } else {
      setRegister(false);
    }
    setLogin(!login);
  }

  return (
    <>
      {login ? (
        <div className="login-form">
          <h1>{register ? "Registrar" : "Entrar"}</h1>
          <h1>
            <BsFillCarFrontFill />
          </h1>
          <form>
            <label>email</label>
            <input
              name="email"
              type="email"
              placeholder="Insira Seu Email"
            ></input>
            <label>password</label>
            <input
              name="password"
              type="password"
              placeholder="Insira Sua Senha"
            ></input>
            <button>{register ? "Registrar" : "Entrar"}</button>
          </form>
        </div>
      ) : null}
      <div className="nav-bar ">
        <h1>
          <BsFillCarFrontFill />
        </h1>
        <ul className={styles ? "nav-bar-item-open" : "nav-bar-item"}>
          <li>
            <a href="#home">Página Inicial</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#models">Modelo dos Veículos</a>
          </li>
          <li>
            <a href="#depoimentos">Depoimentos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
        <div className="nav-bar-buttons">
          <button onClick={handleButtonClik} className="login-button">
            Entrar
          </button>
          <button
            id="register"
            onClick={handleButtonClik}
            className="register-button"
          >
            Registrar
          </button>
        </div>
        <div
          onClick={() => {
            setStyles(!styles);
          }}
          className="menu-burguer"
        >
          <BiMenu size={25} />
        </div>
      </div>
    </>
  );
}
