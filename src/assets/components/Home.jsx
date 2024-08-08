import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import Register from "./Register";
import Login from "./Login";

function Home() {
let ingrediente1 = ["mozzarella", "tomates", "jamón", "orégano"];
let precio1 = 5950;
let ingrediente2 = ["mozzarella", "gorgonzola", "parmesano", "provolone"];
let precio2 = 6950;
let ingrediente3 = ["mozzarella", "pepperoni", "orégano"];
let precio3 = 6950;
  return (
    <div>
      <Register/>
      {/* <Login/> */}
      {/* <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CardPizza name="Napolitana" price={precio1} ingredientes={ingrediente1} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9
080-784dcc87ec2c"
/>
          </div>
          <div className="col-md-4">
            <CardPizza name="Española" price={precio2} ingredientes={ingrediente2} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab"
/>
          </div>
          <div className="col-md-4">
            <CardPizza name="Pepperoni" price={precio3} ingredientes={ingrediente3} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3"
/>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
