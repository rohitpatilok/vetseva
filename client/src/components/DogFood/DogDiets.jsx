import React from "react";

function DogDiets(props) {
  return (
    <div >   
        <input type="checkbox" name="vehicle1" value="Bike" />
        <label for="vehicle1" style={{color: "black", marginLeft: "15px", padding: "2px 0px"}}>{props.title}</label><br />
    </div>
  )
}

export default DogDiets;
