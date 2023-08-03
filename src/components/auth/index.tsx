import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import { Box, Grid } from '@mui/material';
import './style.css';
import { instance } from '../../utils/axios';
import { useForm } from 'react-hook-form';

const AuthRootComponent: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const {
    register,
    formState: {
      errors
    },
    handleSubmit,
  } = useForm();

  const handleSubmitForm = async (data: any) => {
    console.log('data', data);
    if (location.pathname === '/login') {
      const userData = {
        email: data.email,
        password: data.password,
      }
      // https://randomuser.me/api/
      // const user = await instance.post('auth/login', userData);
      console.log(userData);
    } else {
      if (password === repeatPassword) {
        const userData = {
          firstName,
          userName,
          email,
          password,
        }
        // const newUser = await instance.post('auth/register', userData);
        console.log(userData);
      } else {
        throw new Error('Password mismatch')
      }
    }

  }
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form style={{ width: "95%" }} onSubmit={handleSubmit(handleSubmitForm)}>
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
          {
            location.pathname === '/login'
              ? <LoginPage 
                register={register}
                errors={errors} />
              : location.pathname === '/register'
                ? <RegisterPage setEmail={setEmail} setPassword={setPassword} setRepeatPassword={setRepeatPassword} setFirstName={setFirstName} setUserName={setUserName} />
                : null
          }
        </Box>
      </form>
    </div >
  )
};

export default AuthRootComponent;