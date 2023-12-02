import styled from "styled-components"
import AdicionarEndereco from "../../components/client/AdicionarEndereco"
import EnderecoCard from "../../components/client/EnderecoCard"

import { useEffect, useState } from "react"
import axios from "axios"
import { useJwt } from "react-jwt"

export default function Enderecos() {
    const token = sessionStorage.getItem("token_client")
    const { decodedToken, isExpired } = useJwt(token);
    const [endereco, setEndereco] = useState(null);

    const [clienteId, setClienteId] = useState("");
    
    useEffect(()=>{
        if(decodedToken){
            setClienteId(decodedToken.id)

            axios.get(`http://localhost:8081/cliente/${decodedToken.id}`)
            .then(({data}) => {
                console.log(data)
                if(data.endereco) {
                    console.log(data.endereco)
                    setEndereco(data.endereco)
                }
            })
        }
    }, [decodedToken])
    
    return (
        <div>
            <Header>
                <h1>Endereço cadastrado</h1>
                {!endereco && <AdicionarEndereco clienteId={clienteId} />}
            </Header>
                {!endereco && <p>Nenhum endereço cadastrado</p>}
            <CardList>
                {endereco != null && <EnderecoCard endereco={endereco} />}
            </CardList>
        </div>
    )
}

const Header = styled.header `
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 30px;
`
const CardList = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
`