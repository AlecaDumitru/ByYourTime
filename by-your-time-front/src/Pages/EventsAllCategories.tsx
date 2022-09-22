import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import React from "react";
import ProductCard from "../../src/Components/ProductCard/ProductCard";
import '../Components/ProductCard/ProductCard.css'
import './Categories.css'


export interface Props {

    productName? : string
    price? : number
    currency? : string
    description? : string
    pictureUrl : string

}

const Categories = () => {

    const products = [
        {productName: 'Theatre', price: 50, currency: 'lei', description: "What's The Rush? Buy Your Time And Gain An Advantage", pictureUrl : "/images/theatre.jpg"},
        {productName: 'Concerts', price: 50, currency: 'lei', description: "What's The Rush? Buy Your Time And Gain An Advantage", pictureUrl :  "/images/concerts.jpg"},
        {productName: 'Workshops', price: 50, currency: 'lei', description: "What's The Rush? Buy Your Time And Gain An Advantage", pictureUrl :  "/images/workshops.png"},
        {productName: 'Charity Events', price: 50, currency: 'lei', description: "What's The Rush? Buy Your Time And Gain An Advantage", pictureUrl :  "/images/charity.jpg"},
        {productName: 'Fairs', price: 50, currency: 'lei', description: "What's The Rush? Buy Your Time And Gain An Advantage", pictureUrl :  "/images/fairs.jpg"},
        {productName: 'Courses', price: 50, currency: 'lei', description: "What's The Rush? Buy Your Time And Gain An Advantage", pictureUrl :  "/images/courses.jpg"},
        {productName: 'Kids Concept', price: 50, currency: 'lei', description: "What's The Rush? Buy Your Time And Gain An Advantage", pictureUrl :  "/images/kids.jpg"},
    ];
    return(
        <div>
            {/* <h1 className="eventsheader">Events</h1> */}
            <List>
            <List className="grid">

                {products.map((product, index) => (
                    // <ListItem key={index}>
                    //     <ListItemAvatar>
                    //         <Avatar src={product.pictureUrl}/>
                    //         <ListItemText>{product.productName} - {product.price} {product.currency} - {product.description} <br></br><button>Add to cart</button></ListItemText>
                    //     </ListItemAvatar>
                    // </ListItem>
                    <div className="element">
                        <ListItem key={index} />
                        <ProductCard pictureUrl = {product.pictureUrl} productName = {product.productName}
                                     price = {product.price} currency = {product.currency} description = {product.description}/>
                    </div>
                ))}
            </List>
            </List>
        </div>
    )
}

export default Categories