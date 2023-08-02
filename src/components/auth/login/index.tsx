import { Button, TextField, Typography } from '@mui/material';

const LoginPage = () => {
  return (
    <>
      <Typography variant="h2" fontFamily='Poppins, sans-serif' textAlign='center'>Авторизация</Typography>
      <Typography variant="body1" marginBottom={3} fontFamily='Poppins, sans-serif' textAlign='center'>Введите ваш логин и пароль</Typography>
      <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Введите ваш email' />
      <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Введите ваш пароль' />
      <Button sx={{fontFamily: 'Poppins, sans-serif', marginTop: 2, marginBottom: 2, width: '60%'}} variant="contained">Войти</Button>
      <Typography variant="body1" sx={{fontFamily: 'Poppins, sans-serif', }}>У вас нет аккаунта?<span className="incitingText">Регистрация</span></Typography>
    </>
  );
};

export default LoginPage;