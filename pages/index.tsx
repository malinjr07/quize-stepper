import { useState, Fragment, ReactNode } from 'react';
import styled from '@emotion/styled';
import {
  Stepper,
  Typography,
  Step,
  StepLabel,
  Box,
  Button,
} from '@mui/material';
import Image from 'next/image';
import PersonalForm from '@/components/PersonalForm';
import EducationForm from '@/components/EducationForm';
import EqualEmployment from '@/components/EqualEmployment';
import Portfolio from '@/components/Portfolio';

interface stepsType {
  title: string;
  preview: ReactNode;
}

const steps: stepsType[] = [
  { title: 'Personal Info', preview: <PersonalForm /> },
  { title: 'Education', preview: <EducationForm /> },
  { title: 'Work Auth & EEO', preview: <EqualEmployment /> },
  { title: 'portfolio', preview: <Portfolio /> },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // API Integration Here
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const Header = styled.header({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px 0',
    margin: '7.5px auto',
  });
  const LogoContainer = styled.div({
    width: '142px',
    height: '130px',
    position: 'relative',
  });
  const Title = styled.h1({
    fontWeight: 400,
    fontSize: '32px',
    lineHeight: '130%',
    textAlign: 'center',
    marginBottom: '24px',
    letterSpacing: '0.02em',
    color: '#232D42',
  });
  const Card = styled.div({
    boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.08)',
    borderRadius: '24px',
    padding: '44px 40px',
    display: 'inline-block',
    marginLeft: '50%',
    transform: 'translateX(-50%)',
  });

  return (
    <>
      <Header>
        <LogoContainer>
          <Image
            src='/logo.svg'
            alt='logo'
            fill
            style={{ objectFit: 'contain' }}
          />
        </LogoContainer>
      </Header>
      <Title>
        Save time - Answer job application most common questions once!
      </Title>
      <Card>
        <Stepper activeStep={activeStep}>
          {steps.map((value, id) => {
            return (
              <Step key={id}>
                <StepLabel>{value.title}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <>
            {steps[activeStep].preview}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                gap: '12px',
              }}
            >
              {' '}
              {/* {activeStep > 0 && ( */}
              <Button
                color='inherit'
                onClick={handleBack}
                sx={{
                  border: '1px solid #3A57E8',
                  borderRadius: '4px',
                  px: '65.5px',
                  py: '8px',
                  color: '#3A57E8',
                  bgcolor: '#ffffff',
                  transition: '0.2s all linear',
                  '&:hover': {
                    bgcolor: '#f1f1f1',
                    border: '1px solid #3A57E8',
                    color: '#3A57E8',
                    boxShadow: '0px 16px 24px rgba(58, 87, 232, 0.32)',
                  },
                }}
                type='button'
              >
                Back
              </Button>
              {/* )} */}
              <Button
                onClick={handleNext}
                type='button'
                sx={{
                  borderRadius: '4px',
                  px: '65.5px',
                  py: '8px',
                  border: '1px solid #3A57E8',
                  color: '#ffffff',
                  background: '#3A57E8',
                  transition: '0.2s all linear',
                  '&:hover': {
                    border: '1px solid #3A57E8',
                    color: '#ffffff',
                    background: '#3A57E8',
                    boxShadow: '0px 16px 24px rgba(58, 87, 232, 0.32)',
                  },
                }}
              >
                {activeStep === steps.length - 1
                  ? 'FINISH & GO TO DASHBOARD'
                  : 'Continue'}
              </Button>
            </Box>
          </>
        )}
      </Card>
    </>
  );
}

