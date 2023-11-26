import React, { useEffect, useState } from 'react';
import { useOrderDetailsCtx } from '../../contexts/OrderDetailsCtx';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function OrderConfirmation({ setOrderPhase }) {
  const { resetOrder } = useOrderDetailsCtx();
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .post('http://localhost:3030/order', {}, { signal: controller.signal })
      .then((response) => setOrderNumber(response.data.orderNumber))
      .catch((error) => {});
  }, []);

  const handleClick = () => {
    resetOrder();
    setOrderPhase('inProgress');
  };

  return orderNumber ? (
    <div style={{ textAlign: 'center' }}>
      <h1>Thank You!</h1>
      <p>Your order number is {orderNumber}</p>
      <Button onClick={handleClick}>Create new order</Button>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default OrderConfirmation;
