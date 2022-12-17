import { Box, TextField, Typography } from '@mui/material';
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
      <Box
        sx={{
          mt: '32px',
          display: 'flex',
          width: '561px',
          flexDirection: 'column',
          gap: '29px',
        }}
      >
        <TextField
          id='outlined-basic'
          label='First Name*'
          variant='outlined'
          sx={{
            border: '1px solid #EDEDED',
            boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.02)',
            borderRadius: '8px',
          }}
        />
        <TextField
          id='outlined-basic'
          label='Last Name*'
          variant='outlined'
          sx={{
            border: '1px solid #EDEDED',
            boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.02)',
            borderRadius: '8px',
          }}
        />
        <TextField
          id='outlined-basic'
          label='Phone*'
          variant='outlined'
          sx={{
            border: '1px solid #EDEDED',
            boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.02)',
            borderRadius: '8px',
          }}
        />
        <TextField
          id='outlined-basic'
          label='Email*'
          variant='outlined'
          sx={{
            border: '1px solid #EDEDED',
            boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.02)',
            borderRadius: '8px',
          }}
        />
        <TextField
          id='outlined-basic'
          label='Location*'
          variant='outlined'
          sx={{
            border: '1px solid #EDEDED',
            boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.02)',
            borderRadius: '8px',
          }}
        />
      </Box>
    </Box>
  );
};

export default PersonalForm;
