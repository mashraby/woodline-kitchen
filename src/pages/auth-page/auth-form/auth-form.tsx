import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import styled from "styled-components";

const AuthWrapper = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 350px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.46);
  background-color: #fff;
`;

const Title = styled.h4`
  text-align: center;
`;

export const AuthForm: React.FC = () => {
  return (
    <AuthWrapper>
      <Typography className="auth-form__heading" variant="h4" component="div">
        <Title>Login</Title>
      </Typography>
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Button variant="contained" aria-label="primary">
        Login
      </Button>
    </AuthWrapper>
  );
};
