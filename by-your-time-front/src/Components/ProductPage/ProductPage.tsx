import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import { useStore } from "react-redux";
import { useStoreContext } from "../../app/context/StoreContext";
import agent from "../../api/agent";
import { LoadingButton } from "@mui/lab";

interface IEvent {
  categoryId: number;
  createdAt: string;
  dateOfEvent: string;
  description: string;
  eventCrew: [];
  id: number;
  isItOutdoor: boolean;
  location: string;
  name: string;
  numberOfSeatsAvailable: number;
  price: number;
  pictureURL: string;
  currency: string;
}

export default function ProductDetails() {
  const { basket, setBasket, removeItem } = useStoreContext();
  const param = useParams<{ id: string }>();
  const [Event, SetEvent] = useState<IEvent>();
  console.log(Event);
  // const pathname = window.location.pathname;
  // let newPathName = pathname.replace("/event/", "");
  // console.log(newPathName);
  const [quantity, setQuantity] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const item = basket?.items.find((i) => i.eventId === Event?.id);

  useEffect(() => {
    if (item) setQuantity(item.quantity);
    fetch(`http://localhost:5286/${param.id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => SetEvent(response));
  }, [item]);

  function handleInputChange(event: any) {
    if (event.target.value >= 0) {
      setQuantity(parseInt(event.target.value));
    }
  }

  function handleUpdateBasket() {
    setSubmitting(true);
    if (!item || quantity > item.quantity) {
      const updatedQuantity = item ? quantity - item.quantity : quantity;
      agent.Basket.addItem(Event?.id!, updatedQuantity)
        .then((basket) => setBasket(basket))
        .catch((error) => console.log(error))
        .finally(() => setSubmitting(false));
    } else {
      const updatedQuantity = item.quantity - quantity;
      agent.Basket.removeItem(Event?.id!, updatedQuantity)
        .then(() => removeItem(Event?.id!, updatedQuantity))
        .catch((error) => console.log(error))
        .finally(() => setSubmitting(false));
    }
  }

  return (
    <Grid className="product" container spacing={10}>
      <>
        <Grid item xs={6}>
          <img
            src={Event?.pictureURL}
            alt={Event?.name}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography className="title" variant="h3">
            {Event?.name}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography className="price" variant="h4">
            {Event?.price} {Event?.currency}
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                {/* <TableRow>
                  <TableCell>Name:</TableCell>
                  <TableCell>{Event?.name}</TableCell>
                </TableRow> */}
                <TableRow>
                  <TableCell>Event date:</TableCell>
                  <TableCell>{Event?.dateOfEvent}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Location:</TableCell>
                  <TableCell>{Event?.location}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Description:</TableCell>
                  <TableCell>{Event?.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Seats available:</TableCell>
                  <TableCell>{Event?.numberOfSeatsAvailable}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <TextField
                onChange={handleInputChange}
                variant="outlined"
                type="number"
                label="Quantity in Cart"
                fullWidth
                value={quantity}
              />
            </Grid>
            <Grid item xs={6}>
              <LoadingButton
              disabled = {item?.quantity === quantity || !item && quantity === 0}
              loading = {submitting}
              onClick= {handleUpdateBasket}
                sx={{
                  height: "55px",
                  color: "black",
                  backgroundColor: "#2bbbad",
                  fontWeight: 800,
                  fontSize: 21,
                  ":hover": {
                    backgroundColor: "#b2dfdb",
                    color: "black",
                  },
                }}
                size="large"
                variant="contained"
                fullWidth
              >
                {item ? "Update Quantity" : "Add to cart"}
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
      </>
      ;
    </Grid>
  );
}
