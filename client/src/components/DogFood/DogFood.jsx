import React from "react";
import "./DogFood.css";
import Navbar from "../Home/Navbar.jsx";
import TuneIcon from '@mui/icons-material/Tune';
import DogCategory from "./DogCategory.jsx";
import brands from "../brandsCheckbox.js";
import BrandsCheckBox from "./Brands.jsx";
import LifeStages from "./LifeStages.jsx";
import DogDiets from "./DogDiets.jsx";
import diet from "../diet.js";
import dogProducts from "../dogProducts.js";
import DogProductsFull from "./DogProductsFull.jsx";
import DogProductsFUll from "./DogProductsFull.jsx";
import Footer from "../Home/Footer.jsx";
import Prices from "./Prices.jsx";
import price from "../price.js";
import lifeStyle from "../lifeStyle.js";

function DogFood() {

  function createBrandsCheckbox(boxItem){
    return <BrandsCheckBox
        key={boxItem.id}
        title={boxItem.title}
    />
  }

  function createLifeStagesCheckBox(boxItem){
    return <LifeStages
        key={boxItem.id}
        title={boxItem.title}
    />
  }

  function createDogDietsCheckBox(boxItem){
    return <DogDiets 
        key={boxItem.id}
        title={boxItem.title}
    />
  }

  function createPriceCheckBox(boxItem){
    return <Prices 
        key={boxItem.id}
        title={boxItem.title}    
    />
  }

  function createDogProductsCard(cardItem){
    return <DogProductsFUll 
        key={cardItem.id}
        image={cardItem.image}
        weight={cardItem.weight}
        description={cardItem.description}
        price={cardItem.price}
        mrp={cardItem.mrp}
    />
}

  return (
    <div>
        <Navbar />
        <div className="dog-food">
            <DogCategory />
            <hr style={{color: "black", marginTop: "30px"}} />
            <div className="filterss">
                <div className="filter-child">
                    <div className="filter-icon">
                        <TuneIcon style={{fill: "black"}} />
                        <h5 style={{color: "black"}}>Filters</h5>
                    </div>
                    <div>
                        <h5 className="filter-headings">Brands</h5>
                        {brands.map(createBrandsCheckbox)}
                        <hr className="filter-hr" />
                    </div>
                    <div>
                        <h5 className="filter-headings">Life Stages</h5>
                        {lifeStyle.map(createLifeStagesCheckBox)}
                        <hr className="filter-hr" />
                    </div>
                    <div>
                        <h5 className="filter-headings">Diets</h5>
                        {diet.map(createDogDietsCheckBox)}
                        <hr className="filter-hr" />
                    </div>
                    <div>
                        <h5 className="filter-headings">Price</h5>
                        {price.map(createPriceCheckBox)}
                        <hr className="filter-hr" />
                    </div>
                </div>
                <div style={{marginLeft: "50px"}}>
                    <div className="products-container">
                        <div className="products">
                            {dogProducts.map(createDogProductsCard)}
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <Footer />
    </div>
    
  );
}

export default DogFood;
