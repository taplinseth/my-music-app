import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Login() {
  return (
    <div class='login'>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="user-name" label="Username" variant="standard" />
        <TextField id="password" label="Password" variant="standard" />
      </Box>

      <Button id='login-button' variant="contained" disableElevation>Login</Button>
    </div>
  );
}
