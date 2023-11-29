import styled from 'styled-components';

export function PedidoCard(props) {
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
                    <Client>Cliente: Danilo</Client>
                    <Color>
                        Cor
                    </Color>
                    <Altura>Altura</Altura>
                    <Largura>Largura</Largura>
                </SecondSection>
                <Description>
                    Descrição
                </Description>
                <ThirdSection>
                <Value>
                    Valor: R$ 200,00
                </Value>
                <ApproveButton>Aprovar pedido</ApproveButton>

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

const Title = styled.h2`

`

const OrderImg = styled.img`
    min-height: 100px;
`
const Color = styled.span`

`

const Value = styled.h3`

`

const Description = styled.p`

`

const ApproveButton = styled.button`
        display: flex;
        font-size: 18px;
        font-weight: 500;
        font-family: inherit;
        color: white;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    
        cursor: pointer;
        border: 3px solid #d3d3d3;
        padding: 10px;
        margin: 20px 0;
        background-color: black;
        border-radius: 6.25px;
`

const WppButton = styled.button`
        display: flex;
        font-size: 18px;
        font-weight: 500;
        font-family: inherit;
        color: black;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    
        cursor: pointer;
        border: 3px solid #030303;
        padding: 10px;
        background-color: white;
        border-radius: 6.25px;
`

const Client = styled.span`

`

const Largura = styled.span`

`

const Altura = styled.span`

`

const FirstSection = styled.div `
    display: flex;
    flex-direction: column;
`

const SecondSection = styled.div `
    display: flex;
    flex-direction: column;
`

const ThirdSection = styled.div `
    display: flex;
    flex-direction: column;
`

const CardAction = styled.div `
    
`
