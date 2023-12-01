import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import JourneyHeader from "../../components/shop/JourneyHeader";

export function LoginClient() {
    const token = sessionStorage.getItem("token_client")

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const loginSubmitHandler = async (e) => {
    e.preventDefault();

    if(password.length < 5){
      return toast.warn("A senha deve conter mais de 5 caracteres");
    }

    axios.post(
      "http://localhost:8081/cliente/auth/login",
      {
        email: email,
        senha: password
      }
    ).then((response) => {
        sessionStorage.setItem("token_client", response.data.token)
        window.location = "/"
    }).catch((err) => {
        toast.warn(err.response.data.msg);
        console.log(err)
    }
)
  }

  return (
    <div className="login-body">
    <ToastContainer />
    <JourneyHeader />
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
            <button className="login-form-btn" type="submit">Entrar</button>
          </div>

          <div className="text-center">
            <span className="txt1">Não possui conta?</span>
            <a className="txt2" href="/registrar">
              Criar conta
            </a>
          </div>
        </form>
      </div>

      {/* 
        <div className="ajuda">
          <span>Problemas com login?</span>
        </div>

        <div className="wpp-btn">
          Falar com especialistas
        </div> 
      */}
    </div>
  </div>
    );
}