import styled from "styled-components"
import ModalExcluir from "../admin/ModalExcluir"
import EditarEndereco from "./EditarEndereco"
export default function EnderecoCard() {
    
    return (
        <Card>
            <Info>
                <Title>Casa</Title>
                <Description>Rua dos Bagres 68 <br/> Jardim Beija Flor <br /> Xique-Xique, Bahia</Description>
            </Info>
            <Action>
                <EditarEndereco/>
                <ModalExcluir></ModalExcluir>
            </Action>
        </Card>
    )
}

const Card = styled.div `
    width: 100%;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px;
`

const Info = styled.div `

`

const Action = styled.div `

`

const Title = styled.h1 `
    padding-bottom: 5px;
`

const Description = styled.p `

`