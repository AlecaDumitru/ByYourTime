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
import { EventEmitter } from "stream";

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
  currency: string,
}

export default function ProductDetails() {
  const pathname = window.location.pathname;
  let newPathName = pathname.replace("/event/", "");
  console.log(newPathName);

  let [Event, SetEvent] = useState<IEvent>();
  console.log(Event);

  useEffect(() => {
    fetch(`http://localhost:5286/${newPathName}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => SetEvent(response));
  }, []);

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
                    <TableCell>
                      {Event?.numberOfSeatsAvailable}
                    </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                type="number"
                label="Quantity in Cart"
                fullWidth
                // value = {quantity}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                sx={{
                  height: "55px",
                  color: "black",
                  backgroundColor: "#2bbbad",
                  fontWeight: 800,
                  fontSize: 21,
                }}
                size="large"
                variant="contained"
                fullWidth
              >
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </>
      ;
    </Grid>
  );
}
