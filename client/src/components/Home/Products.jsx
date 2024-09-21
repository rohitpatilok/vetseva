import React, {useState} from "react";

function Products(props){

  const [mouseOver, setMouseOver] = useState(false);

  function handleMouseOver(){
      setMouseOver(true);
  }

  function handleMouseOut(){
      setMouseOver(false);
  }

  return (
    <div className="product">
        <div className="product-details" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <a href="">
                <img src={props.image} alt={props.type} />
                <hr style={{color: "#908e8e"}} />
                <h6 className="weight">{props.weight}</h6>
                <a className="product-desc" href=""><p>{props.description}</p></a>
                <div style={{display: "flex" , gap: "10px"}}>
                    <h4 style={{color: "black"}}>{props.price}</h4>
                    <p style={{color: "#CCCCCC", fontSize: "15px", paddingTop: "5px"}}>only</p>
                </div>
                <p className="mrp">MRP {props.mrp}</p>
            </a>
        </div>
    </div>
  );
}

export default Products;
