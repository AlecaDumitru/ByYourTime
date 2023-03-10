import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Props } from "../../Pages/Categories";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import agent from "../../api/agent";
import LoadingButton from "@mui/lab/LoadingButton";
import { useStoreContext } from "../../app/context/StoreContext";

export default function ProductCard({
  id,
  pictureUrl,
  productName,
  price,
  currency,
  description,
}: Props) {

  const [loading, setLoading] = useState(false);

  const {setBasket} = useStoreContext();
  
  function handleAddItem(productId:number){
    setLoading(true);
    agent.Basket.addItem(productId)
    .then(basket => setBasket(basket))
    .catch(error => console.log(error))
    .finally(()=> setLoading(false));
  }
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
        <CardActions sx={{ justifyContent: "space-between" }}>
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

          <LoadingButton loading = {loading} 
          onClick = {() => handleAddItem(id)}
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
          </LoadingButton>
        </CardActions>
      </Card>
    </>
  );
}
