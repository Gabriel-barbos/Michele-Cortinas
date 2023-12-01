import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { telefoneMask } from '../../components/TelefoneMask'
import { IconButton, Link } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault();

    if(email == "" || password == "" || nome == "" || sobrenome == "", telefone == ""){
      return toast.warn("Nenhum campo pode estar vazio")
    }

    if(password.length < 5){
      return toast.warn("A senha deve conter mais de 5 caracteres");
    }

    axios.post(
          "http://localhost:8081/cliente/auth/register",
          {
            email: email,
            senha: password,
            nome: nome,
            sobrenome: sobrenome,
            telefone: telefone
          }
    ).then(() => {
        window.location = "/entrar"
    }).catch((err) => {
        toast.warn(err.response.data.msg)
    })
  }

  return (
    
    <div className="login-body">
    <ToastContainer />
    <Link href="/">
      <IconButton sx={{position: "fixed", left: "10px", top: "10px"}} >
        <ArrowBackIcon />
      </IconButton>
    </Link>
    <div className="container-login">
    <span className="login-form-title">Crie sua conta</span>

    <span className="login-form-subtitle">Insira seus dados e crie uma conta para comprar produtos do site</span>

      <div className="wrap-login">
        <form className="login-form" onSubmit={submitHandler}>
        <div className="wrap-input">
            <input
              className={nome !== "" ? "has-val input" : "input"}
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Nome"></span>
          </div>

          <div className="wrap-input">
            <input
              className={sobrenome !== "" ? "has-val input" : "input"}
              type="text"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Sobrenome"></span>
          </div>

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

          <div className="wrap-input">
            <input
              className={telefone !== "" ? "has-val input" : "input"}
              type="text"
              value={telefoneMask(telefone)}
              onChange={(e) => {
                setTelefone(e.target.value)
              }}
              maxLength={15}
            />
            <span className="focus-input" data-placeholder="Telefone"></span>
          </div>


          <div className="container-login-form-btn">
            <button className="login-form-btn">Criar conta</button>
          </div>

          <div className="text-center">
            <span className="txt1">Já possui uma conta?</span>
            <a className="txt2" href="/entrar">
              Entrar
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
    );
}