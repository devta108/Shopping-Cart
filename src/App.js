import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css"
import './App.css';

import { toast } from 'react-toastify';
import { Container, Row, Col } from 'reactstrap';
import { ToastContainer } from 'react-toastify';

import BuyPage from './components/BuyPage';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addInCart = item => {
    const isPresent = cartItems.findIndex(function (array) {
      return array.id === item.id
    })
    if (isPresent !== -1) {
      toast("Already added in cart", {
        type: "error"
      })
    }

    else setCartItems([...cartItems, item]);
  }

  const buyNow = () => {
    setCartItems([]);
    toast("Purchase Complete", {
      type: "success"
    })
  }
  const removeItem = (item) => {
    setCartItems(cartItems.filter(singleItem => singleItem.id !== item.id))
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md="4">
          <Cart
            cartItems={cartItems}
            removeItem={removeItem}
            buyNow={buyNow}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
