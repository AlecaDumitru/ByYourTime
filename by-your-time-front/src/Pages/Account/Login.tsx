import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { cachedDataVersionTag } from "v8";
import agent from "../../api/agent";
import { FieldValues, useForm } from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import { sizeHeight } from "@mui/system";

// const theme = createTheme();

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: "all",
  });

  async function submitForm(data: FieldValues) {
    try {
      await agent.Account.login(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // <ThemeProvider theme={theme}>
    <Container
      component={Paper}
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "#2bbbad", width: 60, height: 60 }}></Avatar>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(submitForm)}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          // required
          fullWidth
          // id="email"
          label="Username"
          type="email"
          autoComplete="username"
          autoFocus
          {...register("username", { required: "Username is required" })}
          error={!!errors.username}
          //@ts-ignore
          helperText={errors?.username?.message}
        />
        <TextField
          margin="normal"
          // required
          fullWidth
          label="Password"
          type="password"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          //@ts-ignore
          helperText={errors?.password?.message}
          // id="password"
          // autoComplete="current-password"
        />
        {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
        <LoadingButton
          disabled={!isValid}
          loading={isSubmitting}
          className="login-button"
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            backgroundColor: "#2bbbad",
            ":hover": {
              backgroundColor: "#b2dfdb",
              color: "black",
            },
          }}
        >
          Login
        </LoadingButton>
        <Grid container>
          {/* <Grid item xs>
              <Link to="/">Forgot password?</Link>
            </Grid> */}
          <Grid item>
            <Link to="/register">{"Don't have an account? Sign Up"}</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
    // </ThemeProvider>
  );
}
