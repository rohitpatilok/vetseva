import React from "react";

function CategoryCard(props){
    return(
        <div className="flex min-w-96 min-h-20 laptop:m-0 mobile:flex-col laptop:flex-row mobile:items-center">
            <div className="transition-all duration-300 hover:scale-105 cursor-pointer">
                <a className="no-underline hover:underline" href= {props.parameter}>
                    <img src={props.image} alt={props.type} className="laptop:h-48 laptop:w-96 object-fill mobile:h-42 mobile:w-80" />
                    <p className="mt-3">{props.type}</p>
                </a>
            </div> 
        </div>
    )
}

export default CategoryCard;