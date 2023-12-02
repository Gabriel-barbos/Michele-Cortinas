import styled from "styled-components";

export default function QualidadeCard(props) {
    return (
        <Card>
            <Icon src={props.img}/>
            <Text>{props.text}</Text>
            
        </Card>
    )
}

const Card = styled.div `
    display: flex;
    flex-direction: column;
    max-width:200px;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 20px;
`



const Text = styled.h3 `

`

const Icon = styled.img `
    width: 150px;
`