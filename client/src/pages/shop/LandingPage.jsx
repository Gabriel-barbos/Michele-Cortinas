import { ListItemSecondaryAction } from "@mui/material";
import styled from "styled-components";

export default function LandingPage() {
    return (
        <Intro>
            <Title>
                Excepcionais cortinas e persinas, feitas de forma personalizada
            </Title>
            <Description>
                vem de Xique Xique - BA
            </Description>
            <Button>Compre cortinas e persianas</Button>
        </Intro>
    )
}

const Intro = styled.div `
  display: flex;
  flex-direction: column;
  width: 90vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 15px;
`

const Title = styled.h1 `
    font-size: 48px;
`

const Description = styled.p `

`

const Button = styled.button `
        display: flex;
        font-size: 16px;
        font-weight: 500;
        font-family: inherit;
        color: white;
        align-items: center;
        justify-content: center;
        width: 250px;
        height: 75px;
    
        cursor: pointer;
        background-color: black;
        border-radius: 32px;
`