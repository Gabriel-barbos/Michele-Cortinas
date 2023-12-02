import { useState, useEffect } from "react";
import axios from "axios";
import { useJwt } from "react-jwt";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Perfil() {
    const token = sessionStorage.getItem("token_admin")

    if(!token){
        return window.location = "/dashboard/login"
    }

    const { decodedToken, isExpired } = useJwt(token);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

           
    useEffect(()=>{
        if(decodedToken){
            axios.get(`http://localhost:8081/cliente/${decodedToken.id}`)
            .then((response) => {
                const { email } = response.data;
                setEmail(email)
                toast.success("Perfil autenticado com sucesso")
            })
        }
    }, [decodedToken])
    

    const submitHandler = async (e) => {
        e.preventDefault();

        if(email == "" || senha == ""){
            return toast.warn("Nenhum campo pode estar vazio")
        }

        axios.put(
            `http://localhost:8081/cliente/${decodedToken.id}`,
            {
                email: email,
                senha: senha 
            }
        ).then(() => {
            toast.success("Informações atualizadas")
        }).catch((err) => {
            console.log(err)
        })
    }

    const excluirContaHandler = async (e) => {
        e.preventDefault();
        const alert = toast.loading("Excluindo conta...")
        axios.delete(
            `http://localhost:8081/cliente/${decodedToken.id}`
        ).then(() => {
            toast.update(alert, {render: "Conta excluida", type: "success", isLoading: false});
            setInterval(() => {
                window.location = "/logout"
            }, 1000)
        })
    }

    return (
        <div className="container">
        <ToastContainer />
        <div className="container-login">
        <span className="login-form-title">Olá, administrador</span>
        <span className="login-form-subtitle">Atualize as informações do seu perfil</span>
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
                className={senha !== "" ? "has-val input" : "input"}
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
            </div>


            <div className="container-login-form-btn">
                <button className="login-form-btn">Salvar informações</button>
                <button className="login-form-btn dangerous" onClick={excluirContaHandler}>Excluir conta</button>
            </div>
            <div className="text-center">
                <a className="txt2" href="/logout">
                Sair da conta
                </a>
            </div>

            {/* <div className="text-center">
                <span className="txt1">Deseja mudar a senha?</span>
                <a className="txt2" href="login">
                Alterar senha
                </a>
            </div> */}
            </form>
        </div>
        </div>
    </div>
        );
}