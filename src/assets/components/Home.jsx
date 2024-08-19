import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import Register from "./Register";
import Login from "./Login";
function Home({productos}) {

  return (
    <div>
      <Header />
      <Register/>
      <Login/> 
      <div className="container">
        <div className="row">
          {productos.map((productos)=>(
            <div className="col-md-4" key={productos.id}>
            <CardPizza productos={productos}/>
            </div> 
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
