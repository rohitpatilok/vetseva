import React from "react";
import "./Card.css";

function Card(props){
    return(
        <div className="card font-maven">
            <a href={props.link} style={{textDecoration: "none"}}>
            <div className="image-card">
                <img src={props.image} alt="Image" />
            </div>
            <div className="content-card">
                <h5 className="font-normal">{props.heading}</h5>
                <p className="pt-2">{props.content}</p>
            </div>
            </a>
        </div>

    );
}

export default Card;