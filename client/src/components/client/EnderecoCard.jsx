import styled from "styled-components"
import ModalExcluir from "../admin/ModalExcluir"
import EditarEndereco from "./EditarEndereco"
export default function EnderecoCard({endereco}) {
    
    return (
        <Card>
            <Info>
                <Title>{endereco.nome}</Title>
                <Description>{endereco.rua} <br/> {endereco.complemento && <>{endereco.complemento} <br /></>}{endereco.bairro}, {endereco.cidade}</Description>
            </Info>
            <Action>
                <EditarEndereco id={endereco.id} />
                {/* <ModalExcluir></ModalExcluir> */}
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