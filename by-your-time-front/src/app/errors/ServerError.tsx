import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { history } from "../../App";
import "./ServerError.css";

export default function ServerError() {
  const { state } = useLocation();

  return (
    <Container component={Paper} sx={{ height: 300 }}>
      {state?.error ? (
        <>
          <Typography variant="h5" gutterBottom className="center">
            Server Error
          </Typography>
          <Divider />
          <Typography>
            {state?.error?.detail || "Internal Server Error"}
          </Typography>
        </>
      ) : (
        <Typography variant="h4" gutterBottom className="center">
          {state?.error?.detail || "Internal Server Error"}
        </Typography>
      )}
      <Button onClick={() => history.push("/")} fullWidth>
        Go back to homepage
      </Button>
    </Container>
  );
}
