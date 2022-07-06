import React, { Component } from "react";
import { DataContext } from "../Context";
import { Link } from "react-router-dom";
import "../css/Payments.css";
import WarningLogo from "../svg/warning.svg"


export class Payment extends Component {
  static contextType = DataContext;

  componentDidMount() {
    this.context.getTotal();
  }

  render() {
    const { cart, total } = this.context;
    if (cart.length === 0) {
      return <h2 style={{ textAlign: "center" }}>Tu carrito está vacío</h2>;
    } else {
      return (
        <>
          {cart.map((item) => (
            <div key={item._id}>
            </div>
          ))}
          <div className="center"> 
          <img src={WarningLogo}  alt="Warning icon"/>
          <h1>¿Confima su compra?</h1><br></br>
          <h2>Total: ${total}</h2><br></br>
          <Link to="/login"><button>Pagar</button></Link>
          <Link to="/"><button>Agregar</button></Link>
          </div>
        </>
      );
    }
  }
}

export default Payment;