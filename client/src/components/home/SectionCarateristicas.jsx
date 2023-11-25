import styled from 'styled-components';
import ImagemCortina from '../../assets/img/cortina-caracteristicas.jpeg'

export default function SectionCaracteristicas() {
    return (
        <SectionCard>
            <WrapperText>
                <Text>
                    Sublime. Impecável. <br></br>Essa são algumas das características dos produtos da linha Michelle Cortinas.
                </Text>
                <Button><Link href="">Compre agora</Link></Button>
            </WrapperText>
            <Imagem src={ImagemCortina} />
        </SectionCard>
    )
}

const SectionCard = styled.section`
    width: 70vw;
    height: 400px;
    background-color: #6063B9;
    display: flex;
    margin: 30px auto;
    ;
`

const WrapperText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 70%;
    height: 100%;
    padding: 20px
`

const Text = styled.h1`
    color:#fff;
    font-size: 32px;
`
const Imagem = styled.img`
    width: 100%;
    height: 100%;
`

const Button = styled.button`
    width: 200px;
    height: 60px;
    background-color: #333679;
    color: #fff;
    font-size: 20px;
    margin: 0 auto; 
    border-radius: 20px;
    
    
`

const Link = styled.a`
    &:visited {
        color: #fff;
    }
    text-decoration: none;
`