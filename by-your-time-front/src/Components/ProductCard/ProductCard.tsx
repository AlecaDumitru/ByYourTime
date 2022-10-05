import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Props } from "../../Pages/EventsAllCategories";


export default function ProductCard({
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
          <Typography gutterBottom variant="h5" component="div">
            {productName}
          </Typography>
          {/* <Typography>
                        {price} {currency}
                    </Typography> */}
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/events/product">See event</Link>

          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </>
  );
}
