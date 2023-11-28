import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';
import '../../assets/css/home.css'
import JourneyHeader from '../../components/JourneyHeader'

const steps = [
    {
        label: "Primeiro passo",
        title: "Esse é o primeiro passo",
        element: <h1>Teste</h1>
    },
    {
        label: "Segundo passo",
        title: "Esse é o segundo passo",
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
            <div className="journey-stepper">
                <Stepper activeStep={currentStep}>
                {steps.map((step) => (
                    <Step key={step.label}>
                    <StepLabel>{step.label}</StepLabel>
                    </Step>
                ))}
                </Stepper>
            </div>

            <div className='journey-info'>
                {steps[currentStep].title}
            </div>

            <button onClick={nextStepHandler}>add</button>
        </>
    )
}

export default Home