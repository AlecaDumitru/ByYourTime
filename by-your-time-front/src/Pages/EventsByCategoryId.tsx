import { List, ListItem } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard/ProductCard";

export default function EventsByCategoryId() {
  const pathname = window.location.pathname;
  let newPathName = pathname.replace("/events/category/", "");
  console.log(newPathName);

  let [Events, SetEvents] = useState([
    { id: 0, name: "", description: "", price: 0, pictureURL: "", currency: "" },
  ]);
  console.log(Events);
  useEffect(() => {
    fetch(`http://localhost:5286/events/category/${newPathName}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => SetEvents(response.events));
  }, []);

  return (
    <div>
      <List>
        <List className="grid">
          {Events.map((event, index) => (
            <div className="element">
              <ListItem key={index} />
              <ProductCard
                id={event.id}
                pictureUrl={event.pictureURL}
                productName={event.name}
                price={event.price}
                currency = {event.currency}
                description={event.description}
              />
            </div>
          ))}
        </List>
      </List>
    </div>
  );
}
