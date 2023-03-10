import { List, ListItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../api/agent";
import NotFound from "../app/errors/NotFound";
import ProductCard from "../Components/ProductCard/ProductCard";
import "./Categories.css";

export default function EventsByCategoryId() {
  const param = useParams<{ id: string }>();
  // const pathname = window.location.pathname;
  // let newPathName = pathname.replace("/events/category/", "");
  // console.log(newPathName);

  let [Events, SetEvents] = useState([
    {
      id: 0,
      name: "",
      description: "",
      price: 0,
      pictureURL: "",
      currency: "",
    },
  ]);

  // useEffect(() => {
  //   agent.Events.details(parseInt(param.id))
  //   .then(response => SetEvents(response))
  //   .catch(error => console.log(error))
  //   .finally(() => 'ok');
  // }, [param])

  useEffect(() => {
    fetch(`http://localhost:5286/events/category/${param.id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => SetEvents(response.events))
      .catch((error) => console.log(error));
  }, []);

  if (!Events) return <NotFound />;

  return (
    <div>
      <List>
        <List className="grid">
          {Events.map((event, index) => (
            <div className="element" key={event.id}>
              <ListItem />
              <ProductCard
                id={event.id}
                pictureUrl={event.pictureURL}
                productName={event.name}
                price={event.price}
                currency={event.currency}
                description={event.description}
              />
            </div>
          ))}
        </List>
      </List>
    </div>
  );
}
