import styled from 'styled-components';

import { FormControl, Select, MenuItem, InputLabel} from '@mui/material';

import { statusDict } from '../statusDict';

export function PedidoAdminCard(props) {

    return (    
        <>
            <Card>

                <FirstSection>
                    <Title>
                        Pedido 1
                    </Title>
                    <OrderImg alt={"imagem"} />
                </FirstSection>

                <SecondSection>
                    <Client><strong>Cliente:</strong> Danilo</Client>
                    <Color>
                        <strong>Cor:</strong> Azul
                    </Color>
                    <Altura><strong>Altura:</strong> 5m</Altura>
                    <Largura><strong>Largura:</strong> 1,20m</Largura>
                </SecondSection>

                <Description>
                    Uma descrição muito longaa longaa longaa longaa longaa longaa
                    longaa longaa longaa longaa  longaa longaa longaa longaa longaa longaa longaa longaa longaa longaa
                </Description>

                <ThirdSection>
                    <Value>
                        Valor: R$ 200,00
                    </Value>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Status"
                        >
                            {Object.values(statusDict).map((s, i) => {
                                return <MenuItem value={i}>{s}</MenuItem>
                            })}
                        </Select>
                        </FormControl>
                    <WppButton>Entrar em contato com o cliente</WppButton>
                </ThirdSection>

            </Card>


        </>
    )
}

const Card = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    gap: 40px;
    padding: 20px;
`

const Title = styled.h3`

`

const OrderImg = styled.img`
    min-height: 100px;
`
const Color = styled.span`

`

const Value = styled.h4`

`

const Description = styled.p`
    max-width: 30%;
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
    min-width: 25%
`

const SecondSection = styled.div `
    display: flex;
    flex-direction: column;
    min-width: 20%;
`

const ThirdSection = styled.div `
    display: flex;
    flex-direction: column;
    min-width: 20%;
    gap: 10px;
`

const CardAction = styled.div `
    
`

const Status = styled.span `
    
`
