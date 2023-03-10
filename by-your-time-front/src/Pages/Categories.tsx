import { List, ListItem } from "@mui/material";
import React from "react";
import ProductCard from "../Components/ProductCard/ProductCard";
import "../Components/ProductCard/ProductCard.css";
import "./Categories.css";

export interface Props {
  id: number;
  productName?: string;
  price?: number;
  currency?: string;
  description?: string;
  pictureUrl: string;
}

const Categories = () => {
  const [events, setEvents] = React.useState<any | undefined>();

  async function getEvents() {
    fetch(`http://localhost:5286/Event`, {
      method: "GET",
    }).then((response) => {
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
      id: 0,
      productName: "Theatre",
      price: 50,
      currency: "lei",
      description: "What's The Rush? Buy Your Time And Gain An Advantage",
      pictureUrl: "/images/theatre.jpg",
    },
  ];
  return (
    <div>
      <List className="grid-parent">
        <List className="grid">
          {products.map((product, index) => (
            <div className="element">
              <ListItem key={index} />
              <ProductCard
                id={product.id}
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
