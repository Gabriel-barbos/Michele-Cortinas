import SectionCaracteristicas from "../../components/home/SectionCarateristicas";
import NavBar from "../../components/home/NavBar";
import LogoDashboard from "../../components/LogoDashboard";
import styled from "styled-components";

export default function Home() {
    return (
        <>
        <header>
            <NavBar>
                <LogoDashboard width="100%" height="35px" />
            </NavBar>
            <WrapperSection>
            <SectionCaracteristicas/>
            <SectionCaracteristicas/>
            <SectionCaracteristicas/>
            </WrapperSection>
            
        </header>
        </>
    
    
    )
    
}

const WrapperSection = styled.div `
    margin: 5px;
    padding-top: 150px;
`