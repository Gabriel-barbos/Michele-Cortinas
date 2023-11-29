import styled from 'styled-components';
import cortinaAzul from '../assets/img-teste/cortina-azul.jpg';

export function PedidoCard(){
return(
    <>
<Card>
    <OrderImg src={cortinaAzul}/>
        <Title>Pedido #001</Title>
           <Color>Cor: cinza Concreto</Color>
                <Value>Valor:R$ 550,50</Value>
            <Description>
                Cortina Azul com regulagem de brilho, anti-bacterias, persiana com cabo extra
            </Description>

<ApproveButton>Aprovar pedido</ApproveButton>

<WppButton>Entrar em contato com o cliente</WppButton>

<Client>Cliente: Danilo</Client>
<Altura>Altura: 1.85 m</Altura>
<Largura>Largura: 2.50 m</Largura>
</Card>
    

    </>
)
}

const Card = styled.div `
    position: absolute;
    height: 190px;
    width: 1150px;
    border-radius: 15px;
    background-color: #f1f1f1;
`

const Title = styled.h2 `
    margin: 0;
    position: absolute;
    height: 15.2%;
    width: 15.63%;
    top: 4%;
    left: 1.32%;
    font-size: 22px;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
`

const OrderImg = styled.img `
    position: absolute;
    height: 58.55%;
    width: 15.98%;
    top: 24.73%;
    right: 82.7%;
    bottom: 16.73%;
    left: 1.32%;
    border-radius: 15px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
`
const Color = styled.h3 `
    margin: 0;
    position: absolute;
    height: 11.05%;
    width: 14%;
    top: 38.91%;
    left: 18.33%;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
`

const Value = styled.h2 `
    margin: 0;
    position: absolute;
    top: 9.09%;
    left: 81.82%;
    font-size: inherit;
    font-weight: 700;
    font-family: inherit;
`

const Description = styled.p `
    margin: 0;
    position: absolute;
    height: 33.16%;
    width: 18.91%;
    top: 29.45%;
    left: 34.75%;
    color: rgb(70, 70, 70);
    display: inline-block;
`

const ApproveButton = styled.button `
        position: absolute;
        top: 10px;
        left: 28px;
        font-size: 18px;
        font-weight: 500;
        font-family: var(--font-inter);
        color: white;
        text-align: center;
        display: inline-block;
        width: 174px;
        height: 37px;
    
        cursor: pointer;
        border: 3px solid #d3d3d3;
        padding: 0;
        background-color: black;
        position: absolute;
        height: 22.8%;
        width: 17.3%;
        top: 60.82%;
        right: 1.1%;
        bottom: 19.38%;
        left: 81.6%;
        border-radius: 6.25px;
        box-sizing: border-box;
`

const WppButton = styled.button `
    position: absolute;
    height: 74.96%;
    width: 75.85%;
    top: 17.95%;
    left: 11.02%;
    font-size: 15px;
    font-weight: 500;
    font-family: var(--font-inter);
    color: black;
    text-align: center;
    display: inline-block;

    cursor: pointer;
    border: 3px solid #030303;
    padding: 0;
    background-color: white;
    position: absolute;
    height: 22.8%;
    width: 17.3%;
    top: 30.64%;
    right: 1.1%;
    bottom: 53.56%;
    left: 81.6%;
    border-radius: 6.25px;
    box-sizing: border-box;

`

const Client = styled.h3 `
    position: absolute;
    height: 74.96%;
    width: 75.85%;
    top: 26.95%;
    left: -15.02%;
    font-size: 16px;
    font-weight: 600;
    font-family: var(--font-inter);
    color: black;
    text-align: center;
    display: inline-block;
`

const Largura = styled.h4 `
    margin: 0;
    position: absolute;
    height: 22.18%;
    width: 12.98%;
    top: 53.82%;
    left: 18%;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    white-space: pre-wrap;
    display: inline-block;
`

const Altura = styled.h4 `
    margin: 0;
    position: absolute;
    height: 22.18%;
    width: 12.98%;
    top: 63.82%;
    left: 18%;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    white-space: pre-wrap;
    display: inline-block;
`
