import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function CardPizza(props) {
  return (
    <div>
      <br></br>
      <div className="card">
        <img src={props.img} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <p>Ingredientes:</p>
          <div className="lista">
          {props.ingredientes.map((ingredientes, i)=>{
            return <li key={i}>{ingredientes}</li>
          }
        )}
          </div>
          <li className="list-group-item"></li>
          <li className="costo list-group-item">Precio: ${props.price}</li>
        </ul>
        <div className="card-body">
        <button type="button" className="btn btn-outline-secondary me-md-5">Ver más <FontAwesomeIcon icon={faCircleInfo} /></button>
        <button type="button" className="btn btn-outline-dark">Añadir <FontAwesomeIcon icon={faCartShopping}/> </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
