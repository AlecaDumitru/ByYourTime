import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Props } from "../../Pages/EventsAllCategories";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductCard({
  id,
  pictureUrl,
  productName,
  price,
  currency,
  description,
}: Props) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="150"
          image={pictureUrl}
          alt="event"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 1000 }}
          >
            {productName}
          </Typography>
          <Typography sx={{ fontWeight: 1000 }}>
            {price} {currency}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 800 }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions
        sx={{justifyContent: "space-between"}}>
          {/* <Link to={`/event/${id}`}> */}
          <Button
            href={`/event/${id}`}
            variant="contained"
            sx={{
              height: "37px",
              color: "black",
              backgroundColor: "#2bbbad",
              fontWeight: 800,
              fontSize: 15,
              ":hover": {
                backgroundColor: "#b2dfdb",
                color: "black",
              },
            }}
            size="small"
          >
            See event details
          </Button>
          {/* </Link> */}

          {/* <Button size="small">Learn More</Button> */}

          <Button
            variant="contained"
            aria-label="add to shopping cart"
            sx={{
              ml: 7,
              height: "37px",
              color: "black",
              backgroundColor: "#2bbbad",
              ":hover": {
                backgroundColor: "#b2dfdb",
                color: "black",
              },
            }}
          >
            <AddShoppingCartIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
