import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Galaxy S21+",
        src: "https://images.samsung.com/is/image/samsung/assets/ar/home/376x376-S21.png?$376_376_PNG$",
        description: "Celular Galaxy S21+ 5G Violeta",
        content:
          "Creado para esos momentos ¡oh no!, Corning® Gorilla® Glass Victus™ ofrece resistencia a los rayones y los daños, lo que lo hace el más duro en teléfonos inteligentes.",
        price: 149000,
        count: 1,
      },
      {
        _id: "2",
        title: "Lavarropas 7kg",
        src: "https://images.samsung.com/is/image/samsung/ar-ww65m0nhuu-ww65m0nhuu-xbg-kg-149287375?$684_547_PNG$",
        description: "Carga Frontal 7 Kg Inverter Silver",
        content:
          "El motor Digital Inverter de Samsung, combinado con la exclusiva tecnología Ecobubble, permiten un ahorro del 65% en el consumo de energía, sin comprometer la calidad del lavado. Consumiendo menos energía, podes gastar menos en tus cuentas de electricidad.",
        price: 88900,
        count: 1,
      },
      {
        _id: "3",
        title: "Galaxy Buds Pro",
        src: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-buds-pro-r190-sm-r190nzkaaro-363167877?$684_547_PNG$",
        description: "Galaxy Buds Pro Black",
        content:
          "Estos son verdaderos auriculares inalámbricos, con tecnología de última generación para un sonido envolvente sin precedentes. La cancelación de ruido activa inteligente te permite intercambiar sin problemas entre la cancelación de ruido y el sonido ambiente completamente ajustable. Dejá que entren o eliminalos. Es tu mundo. Los Galaxy Buds Pro te permiten escuchar lo mejor de él",
        price: 27999,
        count: 1,
      },
      {
        _id: "4",
        title: "Galaxy Watch4(40mm)",
        src: "https://images.samsung.com/is/image/samsung/p6pim/ar/2108/gallery/ar-galaxy-watch4-sm-r860nzdaaro-481110913?$2160_1728_PNG$",
        description: "Galaxy Watch4 Bluetooth (40mm) Pink Gold",
        content:
          "La mayoría queremos saber más sobre nosotros mismos, para poder ser nuestra mejor versión. Por eso diseñamos el nuevo Galaxy Watch4 para que sea tu compañero de viaje hacia una vida más saludable.",
        price: 32000,
        count: 1,
      },
      {
        _id: "5",
        title: "Galaxy Z Fold3",
        src: "https://images.samsung.com/is/image/samsung/assets/ar/home/foldables376x376.png?$376_376_PNG$",
        description: "Galaxy Z Fold3 Black",
        content:
          "Conocé el smartphone que está cambiando la forma del futuro. El número uno del mundo en plegables, este smartphone de última generación pone en la palma de tu mano un potente rendimiento, cristal plegable y una batería para todo el día.",
        price: 239999,
        count: 1,
      },
      {
        _id: "6",
        title: "Galaxy Watch4 Classic(42mm)",
        src: "https://images.samsung.com/is/image/samsung/p6pim/ar/2108/gallery/ar-galaxy-watch4-classic-sm-r880nzsaaro-481201903?$2052_1641_PNG$",
        description: "Galaxy Watch4 Classic Bluetooth (42mm) Silver",
        content:
          "Hay características que no pasan de moda, como el bisel giratorio y la pantalla nítida del Galaxy Watch4 Classic. Su diseño refinado le brinda a tu muñeca un toque sofisticado, además de tener una potencia y una funcionalidad intuitiva gracias a sus materiales de acero inoxidable de alta gama.",
        price: 53999,
        count: 1,
      },
    ],
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("El producto ha sido añadido.");
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("¿Deseas eliminar este producto?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
