import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { telefoneMask } from '../../components/TelefoneMask'
import { IconButton, Link } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function Register() {
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
          "http://localhost:8081/admin/auth/register",
          {
            email: email,
            senha: password
          }
    ).then(() => {
        window.location = "/dashboard"
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
            <button className="login-form-btn">Criar conta</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    );
}