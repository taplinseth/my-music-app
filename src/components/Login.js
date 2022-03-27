import React, { useState } from "react";
import { Button, TextField, Box } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Dashboard from "./Dashboard";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const Login = () => {
  const [isLoggedIn, toggleLogin] = useState(false);
  if (!isLoggedIn) {
    return (
      <div>
        <Box
          component="span"
          m={30}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <div display="flex">
            <AccountCircle />
            <TextField placeholder="Username" style={{ width: 220 }} />
            <br />
            <br />
            <LockOpenIcon />
            <TextField
              placeholder="Password"
              type="password"
              style={{ width: 220 }}
            />
          </div>
          <br />
          <Button
            variant="contained"
            onClick={() => toggleLogin(isLoggedIn ? false : true)}
            color="secondary"
            size="medium"
            style={{ width: 240 }}
          >
            Login
          </Button>
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
};

export default Login;
