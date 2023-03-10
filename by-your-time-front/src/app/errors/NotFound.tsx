import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./ServerError.css";

export default function NotFound() {
  return (
    <Container component={Paper} sx={{ height: 300 }}>
      <Typography gutterBottom variant="h4" className="center">
        Ooops...there is nothing here
      </Typography>
      <Divider />
      <Button fullWidth component={Link} to="/">
        Go back to shop
      </Button>
    </Container>
  );
}
