import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import ProductCard from "../../src/Components/ProductCard/ProductCard";
import "../Components/ProductCard/ProductCard.css";
import "./Categories.css";
import { IEvents } from "./event";

export interface Props {
  id?: number;
  productName?: string;
  price?: number;
  currency?: string;
  description?: string;
  pictureUrl: string;
}

const Categories = () => {
  const [events, setEvents] = React.useState<any | undefined>();
  console.log(events);

  async function getEvents() {
    fetch(`http://localhost:5286/Event`, {
      method: "GET",
    })
    .then((response) => 
    { 
      console.log(response);
      const data = response.json();
      setEvents(data);
    });
    await getEvents();
  }

  React.useEffect(() => {
    getEvents();
  }, []);

  const products = [
    {
      productName: "Theatre",
      price: 50,
      currency: "lei",
      description: "What's The Rush? Buy Your Time And Gain An Advantage",
      pictureUrl: "/images/theatre.jpg",
    },
    
  ];
  return (
    <div>

      <List>
        <List className="grid">
          {products.map((product, index) => (
            <div className="element">
              <ListItem key={index} />
              <ProductCard
                pictureUrl={product.pictureUrl}
                productName={product.productName}
                price={product.price}
                currency={product.currency}
                description={product.description}
              />
            </div>
          ))}
        </List>
      </List>
    </div>
  );
};

export default Categories;
