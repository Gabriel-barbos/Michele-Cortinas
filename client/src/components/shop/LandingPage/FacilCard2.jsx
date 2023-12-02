import styled from "styled-components";
import Variacoes from "../../../assets/icons/variacoes.png"

export default function FacilCard2(props) {
    return (
        <Card>
            <Img src={Variacoes}/>
            <TextContainer>
                <Text>{props.text}</Text>
            </TextContainer>
        </Card>
    )
}

const Card = styled.div `
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: wrap;
    width:300px;
    height:100%;
    justify-content: flex-end;
    text-align: center;
    align-items: center;
    border-radius: 16px;
`

const ImgContainer=styled

const TextContainer = styled.div `
    display: flex;
    position: absolute;
    height: 25%;
    width: 100% ;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3d5290;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
`

const Text = styled.h2 `
    color:#fff; 
`

const Img = styled.img `
    width: 100%;
    height: 100%;
    border-radius: 16px;
`
