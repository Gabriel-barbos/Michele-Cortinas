import { useState } from "react";
import "../assets/css/Login.css";
// import {useSignIn} from "react-auth-kit";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const loginSubmitHandler = async () => {
    
    // const signIn = useSignIn();
    try {
      const response = await axios.post(
        "http://localhost:8081/cliente/auth/login",
        values
      )

        // signIn({
        //   token: response.data.token,
        //   expiresIn: 3600,
        //   tokenType: "Bearer",
        //   authState: {email: values.emai}
        // })

    } catch (error) {
      
    }

  }

  return (
    
    <div className="container">

    <div className="container-login">
    <span className="login-form-title">Bem vindo</span>

    <span className="login-form-subtitle">faça login para poder realizar pedidos e ter acesso a descontos promocionais</span>

      <div className="wrap-login">
        <form className="login-form" onSubmit={loginSubmitHandler} >


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
            <span className="focus-input" data-placeholder="Password"></span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>
          </div>

          <div className="text-center">
            <span className="txt1">Não possui conta? </span>
            <a className="txt2" href="#">
              Criar conta
            </a>
          </div>
        </form>
      </div>


      <div className="ajuda">
        <span>Problemas com login ?</span>
      </div>

      <div className="wpp-btn">
        Falar com especialistas
      </div>
    </div>
  </div>
    );
}