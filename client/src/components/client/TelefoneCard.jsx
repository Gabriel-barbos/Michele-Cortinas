import styled from "styled-components";
import ModalExcluir from "../admin/ModalExcluir";

export default function TelefoneCard() {
    return (
        <Card>
            <Info>{props.numero}</Info>
            <Action>
                
            </Action>
        </Card>
    )
}

const Card = styled.div `
    width: 40vw;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    gap: 40px;
    padding: 3vw 5vw;
`

const Info = styled.span `

`

const Action = styled.div `

`