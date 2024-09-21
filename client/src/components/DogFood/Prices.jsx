import React from "react";
import "../../../index.css"

function Prices(props) {
  return (
    <div>
        <input type="checkbox" name="vehicle1" value="Bike" />
        <label for="vehicle1" style={{color: "black", marginLeft: "15px", padding: "2px 0px"}}>{props.title}</label><br></br>
    </div>
  )
}

export default Prices;