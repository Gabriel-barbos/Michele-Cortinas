import styled from "styled-components";
import TelefoneCard from "../../components/client/TelefoneCard";

export default function Telefones() {
    return (
        <>
            <Header>
                <h1>Meus Telefones</h1>
            </Header>
            <CardList>
                <TelefoneCard></TelefoneCard>
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