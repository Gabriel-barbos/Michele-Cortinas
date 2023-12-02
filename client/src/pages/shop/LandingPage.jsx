
import styled from "styled-components";
import QualidadeCard from "../../components/shop/LandingPage/QualidadeCard";
import FacilCard1 from "../../components/shop/LandingPage/FacilCard1";
import FacilCard2 from "../../components/shop/LandingPage/FacilCard2";
import FacilCard3 from "../../components/shop/LandingPage/FacilCard3";

import IntroImagem from "../../assets/icons/primeira.jpeg"
import CortinaQualidades from "../../assets/icons/cortina-example.webp"

import IconClient from "../../assets/icons/IconClient.png"
import IconQualidade from "../../assets/icons/QualityIcon.png"
import IconVariedade from "../../assets/icons/variedade.png"

import Footer from "../../components/shop/LandingPage/Footer";

import LandingPageHeader from "../../components/shop/LandingPage/LandingPageHeader";
export default function LandingPage() {
    return (
        <>
        <LandingPageHeader></LandingPageHeader>
        <WrapIntro>
        <Intro>
            <IntroInformations>
                <IntroText>
                    <Title>
                        Excepcionais cortinas e persianas feitas de formas personalizadas.
                    </Title>
                    <Description>
                        Você sugere, nós fazemos.
                    </Description>
                </IntroText>
                <Button>Compre cortinas e persianas</Button>
            </IntroInformations>
            
        </Intro> 
        </WrapIntro>
        
        <Wrap>
        <Qualidades>
        
            <ImgQualidades src={CortinaQualidades}alt="cortina"/>
            <InfoQualidades>
                <Title>
                Qualidade em <strong>todos</strong> os sentidos.
                </Title>
                <CardList>
                    <QualidadeCard text="Valorizamos o atendimento ao cliente." img={IconClient}></QualidadeCard>
                    <QualidadeCard text="A qualidade dos produtos é fundamental." img={IconQualidade}></QualidadeCard>
                    <QualidadeCard text="Oferecemos uma ampla variedade de opções." img={IconVariedade}></QualidadeCard>
                </CardList>
            </InfoQualidades>
        </Qualidades>

        

        </Wrap>

        
        <Wrap>
            <CompraFacil>
                <InfoCompraFacil>
                    <Title>Compre cortinas e persianas de uma maneira fácil.</Title>
                    <CriarContaDescription>Crie sua conta para fazer pedidos.</CriarContaDescription>
                </InfoCompraFacil>
                
                <CompraFacilCards>
                    <FacilCard1 text="Meça e customize."></FacilCard1>
                    <FacilCard2 text="Crie suas variações"></FacilCard2>
                    <FacilCard3 text="Enviado pronto para instalar."></FacilCard3>
                </CompraFacilCards>
                <CriarContaButton>Criar conta</CriarContaButton>
            </CompraFacil>
        </Wrap>

        <Footer></Footer>
       

        </>
        
    )
}

const WrapIntro = styled.div `
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    width: 100%;
    background-image: url("assets/img/primeira.jpeg");
`

const Wrap = styled.div `
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    width: 100%;
`

const Intro = styled.div `
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color:black;
`

const IntroText = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    
`

const IntroInformations = styled.div `
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 30px;
    padding: 15px;
    min-height: 100vh;
    
    
`


const Title = styled.span `
    font-size: 48px;
    text-align: center;
`

const Description = styled.p `

`

const CriarContaDescription = styled.p `
    font-size: 24px;
`

const Button = styled.button `
        display: flex;
        font-size: 16px;
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

const CriarContaButton = styled.button `
        display: flex;
        font-size: 16px;
        font-family: inherit;
        color: #fff;
        background-color: #000;
        align-items: center;
        justify-content: center;
        width: 175px;
        height: 65px;
    
        cursor: pointer;
        border-radius: 32px;
`

const Qualidades = styled.div `
    display: flex;
    
    margin: 0 auto;
    gap: 30px;
`

const InfoQualidades = styled.div `
    
`

const CardList = styled.div `
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding-top: 30px;
    gap: 30px;
`

const ImgContainer = styled.img `
    width: 300px;
`

const ImgQualidades = styled.img `
    width: 300px;
    border-radius: 16px;
`

const CompraFacil = styled.div `
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const CompraFacilCards = styled.div `
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(3, 1fr);
`

const InfoCompraFacil = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
`
