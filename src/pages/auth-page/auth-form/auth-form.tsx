import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import "./auth-form.css";

export const AuthForm: React.FC = () => {
  return (
    <div className="auth-form">
      <Typography className="auth-form__heading" variant="h4" component="div">
        Login
      </Typography>
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Button>Login</Button>
    </div>
  );
};
