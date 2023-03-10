import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Alert,
  AlertTitle,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useAppDispatch } from "../../app/store/configureStore";
import { useForm } from "react-hook-form";
import agent from "../../api/agent";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { toast } from "react-toastify";

const theme = createTheme();

export default function Register() {
  const navigate = useNavigate();
  const [validationErrors, setValidationErrors] = useState([]);
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: "all",
  });
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  function handleApiErrors(errors: any) {
    if (errors) {
      errors.forEach((error: string) => {
        if (error.includes("Password")) {
          setError("password", { message: error });
        } else if (error.includes("Email")) {
          setError("email", { message: error });
        } else if (error.includes("Username")) {
          setError("username", { message: error });
        }
      });
    }
  }

  return (
    <ThemeProvider theme={theme}>
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
        <Avatar
          sx={{ m: 1, bgcolor: "#2bbbad", width: 60, height: 60 }}
        ></Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit((data) =>
            agent.Account.register(data)
              .then(() => {
                toast.success("Registration successful - you can nou login");
                navigate("/login");
              })
              .catch((error) => handleApiErrors(error))
          )}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="Username"
            label="User Name"
            type="Username"
            autoComplete="Username"
            autoFocus
            {...register("username", { required: "Username is required" })}
            error={!!errors.username}
            helperText={errors?.username?.message as string}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
                message: "Not a valid message address",
              },
            })}
            error={!!errors.email}
            helperText={errors?.email?.message as string}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
                message:
                  "Password must be at least 12 characters long (uppercase letters, lowercase letters, numbers, and symbols)",
              },
            })}
            error={!!errors.password}
            helperText={errors?.password?.message as string}
          />

          <LoadingButton
            disabled={!isValid}
            loading={isSubmitting}
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
            Register
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              <Link to="/">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/login">{"Already have an account? Sign in"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
