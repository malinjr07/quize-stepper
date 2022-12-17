import { Box, Typography } from '@mui/material';
import React from 'react';

const PersonalForm = () => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', mt: '40px', mb: '30px' }}
    >
      <Typography
        component={'h2'}
        sx={{
          fontWeight: 600,
          fontSize: '32px',
          lineHeight: '130%',
          letterSpacing: '0.02em',
          color: '#232D42',
        }}
      >
        Personal info
      </Typography>
      <Typography
        component={'p'}
        sx={{
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '150%',
          color: '#232D42',
        }}
      >
        Tell us about yourself!
      </Typography>
    </Box>
  );
};

export default PersonalForm;
