import { Button, TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../common/types/auth';

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { register, errors } = props;
  return (
    <>
      <Typography variant="h2" fontFamily='Oranienbaum, serif'>Welcome</Typography>
      <Typography variant="body1" sx={{ marginBottom: 3, fontFamily: 'Oranienbaum, serif' }}>Log In your account</Typography>
      <TextField
        error={!!errors.email}
        fullWidth={true}
        margin='normal'
        label="Email"
        variant="outlined"
        placeholder='Введите ваш email'
        helperText={errors.email ? `${errors.email.message}` : ''}
        {...register('email', {
          required: 'This is a required field',
          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      <TextField
        error={!!errors.password}
        type='password'
        fullWidth={true}
        margin='normal'
        label="Password"
        variant="outlined"
        placeholder='Введите ваш пароль'
        helperText={errors.password ? `${errors.password.message}` : ''}
        {...register('password', {
          required: 'This is a required field',
          minLength: 8
        })}
      />
      <Button type='submit' className="button-test" sx={{
        fontFamily: 'Oranienbaum, serif',
        marginTop: 2,
        marginBottom: 2,
        width: '60%',
        textTransform: 'none',
      }} variant="contained">Login</Button>
      <Typography variant="body1" sx={{ fontFamily: 'Oranienbaum, serif', }}>Don't have any acount?<span className="incitingText">Sign Up</span></Typography>
    </>
  );
};

export default LoginPage;