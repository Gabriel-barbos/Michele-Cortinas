import styled from "styled-components";
import TelefoneCard from "../../components/client/TelefoneCard";
import AdicionarTelefone from "../../components/client/AdicionarTelefone";
import { useJwt } from "react-jwt"
import { useEffect, useState } from "react"
export default function Telefones() {
    const token = sessionStorage.getItem("token_client")
    const { decodedToken, isExpired } = useJwt(token);
    const [clienteId, setClienteId] = useState("");
    const [numero, setNumero] = useState(null);
    useEffect(()=>{
        if(decodedToken){
            setClienteId(decodedToken.id)

            axios.get(`http://localhost:8081/cliente/${decodedToken.id}`)
            .then(({data}) => {
                console.log(data)
                if(data.numero) {
                    console.log(data.numero)
                    setNumero(data.numero)
                }
            })
        }
    }, [decodedToken])
    return (
        <>
            <Header>
                <h1>Meus Telefones</h1>
                {!numero && <AdicionarTelefone clienteId={clienteId} />}
            </Header>
            {!numero && <p>Nenhum número cadastrado</p>}
            <CardList>
            {numero != null && <TelefoneCard endereco={endereco} />}
            </CardList>
        </>
    )
}

const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 30px;
`
const CardList = styled.div`
    display: flex;
    flex-direction: column;
`