import { useState } from "react";
import "../assets/css/registro.css";

export function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [rua, setRua] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("")
  return (
    
    <div className="container">
    <span className="voltar-ao-site">Voltar ao site</span>
    <div className="container-login">
    <span className="login-form-title"> Crie sua conta </span>

    <span className="login-form-subtitle"> Insira seus dados e crie uma conta para comprar produtos do site </span>

      <div className="wrap-login">
        <form className="login-form">
        <span className="registro-title">Informações Pessoais</span>
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
              className={telefone !== "" ? "has-val input" : "input"}
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Telefone"></span>
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
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Confirmar senha"></span>
          </div>

          <span className="registro-title">Endereço</span>

          <div className="wrap-input">
            <input
              className={rua !== "" ? "has-val input" : "input"}
              type="text"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Rua"></span>
          </div>

          <div className="wrap-input">
            <input
              className={cep !== "" ? "has-val input" : "input"}
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
            <span className="focus-input" data-placeholder="CEP"></span>
          </div>

          <div className="wrap-input">
            <input
              className={numero !== "" ? "has-val input" : "input"}
              type="text"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Número"></span>
          </div>

          <div className="wrap-input">
            <input
              className={complemento !== "" ? "has-val input" : "input"}
              type="text"
              value={complemento}
              onChange={(e) => setNumero(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Complemento"></span>
          </div>

          <div className="wrap-input">
            <input
              className={bairro !== "" ? "has-val input" : "input"}
              type="text"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Bairro"></span>
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