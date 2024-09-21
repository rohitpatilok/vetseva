import React, { useState } from "react";
import Navbar from "./Navbar";
import Banners from "./Carousel.jsx";
import { colors } from "@mui/material";
import Card from "./Card.jsx";
import cardPedia from "../card.js";
import category from "../category.js";
import CategoryCard from "./CategoryCard.jsx";
import Products from "./Products.jsx";
import products from "../products.js";
import Footer from "./Footer.jsx";

function Home() {
  function createServicesCard(cardItem) {
    return (
      <Card
        key={cardItem.id}
        link={cardItem.link}
        image={cardItem.image}
        heading={cardItem.heading}
        content={cardItem.content}
      />
    );
  }

  function createCategoryCard(cardItem) {
    return (
      <CategoryCard
        key={cardItem.id}
        image={cardItem.image}
        type={cardItem.type}
        parameter={cardItem.parameter}
      />
    );
  }

  function createProductsCard(cardItem) {
    return (
      <Products
        key={cardItem.id}
        image={cardItem.image}
        weight={cardItem.weight}
        description={cardItem.description}
        price={cardItem.price}
        mrp={cardItem.mrp}
      /> 
    );
  }

  return (
    <div className="font-sans">
      <Navbar />
      <Banners />
      <hr />
      <div className="laptop:m-10 mobile:m-5">
        <h3 className="font-bold">Services we provide:</h3>
        <div className="services flex gap-5 justify-between laptop:flex-row mobile:m-20px mobile:w-full mobile:flex-col mobile:items-center">{cardPedia.map(createServicesCard)}</div>
      </div>
      <div className="m-10">
        <h3 >Shop by category:</h3>
        <div className="flex gap-5 justify-between flex-wrap laptop:flex-row mobile:m-20px mobile:w-full mobile:flex-col mobile:items-center">{category.map(createCategoryCard)}</div>
      </div>
      <div className="m-10">
        <h3>Trending Today</h3>
        <div className="flex gap-5 justify-between laptop:flex-row mobile:m-20px mobile:w-full mobile:flex-col mobile:items-center">{products.map(createProductsCard)}</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
