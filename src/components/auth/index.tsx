import React from 'react';
import { useLocation } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';

const AuthRootComponent = () => {
  const location = useLocation();
  return (location.pathname === '/login' ? <LoginPage/> : <RegisterPage/>);
};

export default AuthRootComponent;