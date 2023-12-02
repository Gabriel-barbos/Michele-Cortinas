import styled from "styled-components"
import LogoWhite from "./LogoWhite"
export default function Footer() {
    return (
        <StyleFooter>
            <LogoWhite></LogoWhite>
            <LinksList>
                <Link>Sobre Nós</Link>
                <Link>Contato</Link>
                <Link>Perguntas Frequentes</Link>
            </LinksList>
            <Copyright>© Michelle Cortinas 2023 Todos os direitos reservados.</Copyright>
        </StyleFooter>
    )
}

const StyleFooter = styled.footer `
    padding: 40px 15px;
    background-color: #1f1f1f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

const Link = styled.a `
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    opacity: 0.75;
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
`

const LinksList= styled.div `
    display: flex;
    flex-direction: row;
    gap: 40px;
`

const Copyright = styled.p `
    color: #fff;
    font-size: 12px;
`


