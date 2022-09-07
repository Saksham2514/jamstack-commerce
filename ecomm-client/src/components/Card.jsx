import React from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../pages/Helpers";

const Card = ({ id, name, price, description, image }) => {
  return (
    <Link  className="pcard" to={`/product/${id}`}>
      <div className="card" >
        <div className="card-image ">
          <img src={`${BACKEND_URL}${image}`} alt="" className="card-img"/>
        </div>
        <div className="card-content black-text">
          <span className="card-title truncate">{name}</span>
          <p className="truncate">{description}</p>
          <h6 className="green-text">${price}</h6>
        </div>
      </div>
    </Link>
    
  );
};

export default Card;
