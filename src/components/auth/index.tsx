import React from 'react';
import { useLocation } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import { Box } from '@mui/material';
import './style.css';

const AuthRootComponent = () => {
  const location = useLocation();
  return (
    <div className='root'>
      <div className="form">
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          maxWidth={640}
          margin='auto'
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
        >
          {location.pathname === '/login' ? <LoginPage /> : <RegisterPage />}
        </Box>
      </div>
    </div>
  )
};

export default AuthRootComponent;