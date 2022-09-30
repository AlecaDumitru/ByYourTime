import React from "react";
import {
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import "./ProductPage.css";

const ProductDetails = () => {
  const product = [
    {
      productName: "Cats",
      category: "Theatre / Musical",
      music: "Andrew Lloyd Webber",
      price: 50,
      currency: "lei",
      description: "What's The Rush? Buy Your Time And Gain An Advantage",
      pictureUrl: "/images/cats-logo.jpg",
    },
  ];
  return (
    <Grid className="product" container spacing={10}>
      {product.map((product, index) => (
        <>
          <Grid item xs={6}>
            <img
              src={product.pictureUrl}
              alt={product.productName}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography className="title" variant="h3">
              {product.productName}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography className="price" variant="h4">
              {product.price} {product.currency}
            </Typography>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Name:</TableCell>
                    <TableCell>{product.productName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Music:</TableCell>
                    <TableCell>{product.music}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Category:</TableCell>
                    <TableCell>{product.category}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Description:</TableCell>
                    <TableCell>{product.description}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Price:</TableCell>
                    <TableCell>
                      {product.price} {product.currency}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </>
      ))}
      ;
    </Grid>
  );
};

export default ProductDetails;
