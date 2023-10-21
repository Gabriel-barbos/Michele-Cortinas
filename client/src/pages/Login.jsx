import { useState } from "react";
import "../assets/css/login.css";
import axios from "axios";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    axios.post(
      "http://localhost:8081/cliente/auth/login",
      {
        email: email,
        senha: password
      }
    ).then((response) => {
        sessionStorage.setItem("token", response.data.token)
        window.location = "/dashboard"
    }).catch((err) => {
        console.log(err)
    }
)
  }

  return (
    
    <div className="container">

    <div className="container-login">
    <span className="login-form-title">Bem-vindo(a)</span>

    <span className="login-form-subtitle">Faça login para poder realizar pedidos e ter acesso a descontos promocionais</span>

      <div className="wrap-login">
        <form className="login-form" onSubmit={loginSubmitHandler}>


          <div className="wrap-input">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input">
            <input
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Senha"></span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Entrar</button>
          </div>

          <div className="text-center">
            <span className="txt1">Não possui conta?</span>
            <a className="txt2" href="registrar">
              Criar conta
            </a>
          </div>
        </form>
      </div>


      <div className="ajuda">
        <span>Problemas com login?</span>
      </div>

      <div className="wpp-btn">
        Falar com especialistas
      </div>
    </div>
  </div>
    );
}