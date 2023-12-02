import styled from 'styled-components';

import { FormControl, Select, MenuItem, InputLabel} from '@mui/material';

import { statusDict } from '../statusDict';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ModalInfo from '../shop/ButtonModal';
import { ToastContainer, toast } from 'react-toastify';

export function PedidoClientCard({title, pedido}) {
    const [produtoFromBD, setProdutoFromBD] = useState({})
    const [clienteFromBD, setClienteFromBD] = useState({})

    const [status, setStatus] = useState(pedido.status == null ? 0 : pedido.status);

    useEffect(() => {
        axios.get("http://localhost:8081/produto/" + pedido.produtoId)
        .then(({data}) => {
            setProdutoFromBD(data)
            console.log(pedido)
        })

        axios.get("http://localhost:8081/cliente/" + pedido.clienteId)
        .then(({data}) => {
            setClienteFromBD(data)
        })

    }, [pedido])


    return (    
        <>
            <ToastContainer></ToastContainer>
            <Card>
                <FirstSection>
                    <Title>
                        {title}
                    </Title>
                    <OrderImg alt={"imagem"} src={produtoFromBD.imagens ? ("http://localhost:8081/imagens/" + produtoFromBD.imagens[0].nomeArquivo) : ""} />
                </FirstSection>

                <SecondSection>
                    <Client><strong>Cliente:</strong> {clienteFromBD.nome}</Client>
                    {pedido.variacao && <Color>
                        <strong>Cor:</strong> {pedido.variacao}
                    </Color>}
                    <Altura><strong>Altura:</strong> {pedido.altura}m</Altura>
                    <Largura><strong>Largura:</strong> {pedido.largura}m</Largura>
                </SecondSection>

                <Description>
                    {produtoFromBD.descricao}
                </Description>

                <ThirdSection>
                    <Value>
                        Valor: {pedido.valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                    </Value>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Status"
                            value={status}
                        >
                            {Object.values(statusDict).map((s, i) => {
                                return <MenuItem value={i}>{s}</MenuItem>
                            })}
                        </Select>
                        </FormControl>
                        </ThirdSection>

            </Card>


        </>
    )
}

const Card = styled.div`
    width: 100%;
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    gap: 40px;
    align-items: center;
    padding: 20px;
`

const Title = styled.h3`

`

const OrderImg = styled.img`
    flex: 1;
    object-fit: cover;
`
const Color = styled.span`

`

const Value = styled.h4`

`

const Description = styled.p`
    flex: 1;
    font-size: 12px;
`

const WppButton = styled.button`
        display: flex;
        font-size: 16px;
        font-weight: 500;
        font-family: inherit;
        color: black;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    
        cursor: pointer;
        border: 1px solid #030303;
        padding: 10px;
        background-color: white;
        border-radius: 6.25px;
`

const Client = styled.span`
    font-size: 16px;
`

const Largura = styled.span`

`

const Altura = styled.span`

`

const FirstSection = styled.div `
    display: flex;
    flex-direction: column;
    width: 100px;
`

const SecondSection = styled.div `
    display: flex;
    flex-direction: column;
`

const ThirdSection = styled.div `
    display: flex;
    flex-direction: column;
    gap: 10px;
    
`

const CardAction = styled.div `
    
`

const Status = styled.span `
    
`
