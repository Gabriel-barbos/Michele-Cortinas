import styled from "styled-components";

export default function NavBar() {
    return (
        <Nav></Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    box-sizing: border-box;
    height: 100px;
    transition: .2s ease;
    z-index: 999;
    background: #D9D9D9;
`