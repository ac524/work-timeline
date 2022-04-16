/** Global Helpers */
import { useState } from 'react';
import { useMutation } from '@apollo/client';

/** MUI Components */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

/** Utility */
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import useInputChange from '../hooks/useInputChange';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const { email, password } = formState;

  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = useInputChange(formState, setFormState);

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
    <Box sx={{display:"grid", gap:"20px"}}>
      <h1>Login</h1>
      <Box component="form" sx={{display:"grid", gap:"20px"}} onSubmit={handleFormSubmit}>
        <TextField fullWidth id="login-email" label="Your email" variant="outlined" value={email} name="email" onChange={handleChange} />
        <TextField fullWidth id="login-password" label="Password" variant="outlined" value={password} name="password" onChange={handleChange} />
        <Button type="submit" color="primary" variant="contained">Login</Button>
      </Box>
    </Box>
    </>
  );
};

export default Login;
