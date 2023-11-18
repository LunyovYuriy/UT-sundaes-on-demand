import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { useOrderDetailsCtx } from '../../../contexts/OrderDetailsCtx';

function ToppingOption({ name, imagePath }) {
  const { updateItemCount, optionCounts } = useOrderDetailsCtx();
  const handleCheck = () => {
    updateItemCount(name, optionCounts.toppings?.[name] ? 0 : 1, 'toppings');
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
        style={{ width: '75%' }}
      />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check
          type="checkbox"
          onChange={handleCheck}
          name={name}
          label={name}
        />
      </Form.Group>
    </Col>
  );
}

export default ToppingOption;
