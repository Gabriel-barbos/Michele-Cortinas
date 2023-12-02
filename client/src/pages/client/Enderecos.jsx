import styled from "styled-components"
import AdicionarEndereco from "../../components/client/AdicionarEndereco"
import EnderecoCard from "../../components/client/EnderecoCard"
export default function Enderecos() {
    return (
        <div>
            <Header>
                <h1>Meus Endereços</h1>
                <AdicionarEndereco/>
            </Header>
            <CardList>
                <EnderecoCard></EnderecoCard>
                <EnderecoCard></EnderecoCard>
                <EnderecoCard></EnderecoCard>
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