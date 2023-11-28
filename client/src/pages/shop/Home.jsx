import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';
import '../../assets/css/home.css'
import JourneyHeader from '../../components/JourneyHeader'
import Questionario from './Questionario';

const steps = [
    {
        label: "QUESTIONÁRIO",
        title: "O que você deseja?",
        element: <Questionario />
    },
    {
        label: "PRODUTOS",
        title: "Qual cortina mais te agrada?",
        element: <h1>Teste</h1>
    }
]

const Home = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStepHandler = () => {
        if(currentStep == steps.length - 1){
            return;
        }
        
        setCurrentStep(currentStep+1)
    }

    return (
        <>
            <JourneyHeader />
            <div className="journey-stepper-container">
                <div className="journey-stepper">
                    <Stepper activeStep={currentStep}>
                    {steps.map((step) => (
                        <Step key={step.label}>
                        <StepLabel>{step.label}</StepLabel>
                        </Step>
                    ))}
                    </Stepper>
                </div>
            </div>

            <div className='journey-info'>
                <div className="journey-header">
                    <h2 className='journey-title'>{steps[currentStep].title}</h2>
                </div>
                <div className="journey-content">
                    {steps[currentStep].element}
                </div>
            </div>
        </>
    )
}

export default Home