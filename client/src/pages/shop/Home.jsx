import {Stepper, Step, StepLabel, Button, CircularProgress} from '@mui/material'
import { useState, useRef, useEffect } from 'react';
import '../../assets/css/shop.css'
import JourneyHeader from '../../components/shop/JourneyHeader'
import Questionario from './Questionario';
import Produtos from './Produtos';

const Home = () => {

    const stepHandler = (stepName, value) => {
        sessionStorage.setItem(stepName, value)
        setStepsObj({...stepsObj, [stepName]: {...stepsObj[stepName], value: value}})
        setCurrentStep(Object.keys(stepsObj).indexOf(stepName) + 1)
    }

    const [currentStep, setCurrentStep] = useState(sessionStorage.getItem("current_step") || 0);

    const [stepsObj, setStepsObj] = useState({
        "category": {
            label: "QUESTIONÁRIO",
            title: "O que você deseja?",
            element: <Questionario stepHandler={stepHandler} />,
            value: ""
        },
        "product": {
            label: "PRODUTOS",
            title: "Quais produtos mais te agrada?",
            element: <Produtos stepHandler={stepHandler} />,
            value: ""
        }
    });

    const [loadingContent, setLoadingContent] = useState(true);

    useEffect(() => {
        sessionStorage.setItem("current_step", currentStep);
        setLoadingContent(true)
        setInterval(() => {
            setLoadingContent(false)
        }, 800)
    }, [currentStep])



    return (
        <div className='home-body'>
            <JourneyHeader />
            <div className="journey-stepper-container">
                <div className="journey-stepper">
                    <Stepper activeStep={Number(currentStep)}>
                    {Object.values(stepsObj).map((step) => (
                        <Step key={step.label}>
                            <StepLabel>{step.label}</StepLabel>
                        </Step>
                    ))}
                    </Stepper>
                </div>
            </div>

            <div className='journey-info'>
                <div className="journey-header">
                    <h2 className='journey-title'>{Object.values(stepsObj)[currentStep].title}</h2>
                </div>
                {loadingContent && <CircularProgress color="inherit" style={{position: "absolute", top: "50%", left: "50%"}} />}
                <div className="journey-content" style={{opacity: loadingContent ? 0 : 1, transition: ".7s ease"}}>
                    {Object.values(stepsObj)[currentStep].element}
                    {currentStep > 0 && 
                    <Button
                    color="inherit"
                    variant="outlined"
                    onClick={() => {setCurrentStep(currentStep - 1)}}
                    sx={{ mt: 4 }}
                    >
                    Voltar
                    </Button>
                  }
                </div>
            </div>
        </div>
    )
}

export default Home