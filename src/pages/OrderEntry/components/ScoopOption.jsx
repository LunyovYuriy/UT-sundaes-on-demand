import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useOrderDetailsCtx } from '../../../contexts/OrderDetailsCtx';

function ScoopOption({ name, imagePath }) {
  const { updateItemCount, optionCounts } = useOrderDetailsCtx();
  const handleChange = (e) =>
    updateItemCount(name, parseInt(e.target.value), 'scoops');

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
        style={{ width: '75%' }}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: '10px' }}>
        <Form.Label
          column
          xs={6}
          style={{
            textAlign: 'right',
            color: optionCounts.scoops?.[name] < 0 ? 'red' : 'white'
          }}>
          {name}
        </Form.Label>
        <Col xs={5} style={{ textAlign: 'left' }}>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={handleChange}></Form.Control>
        </Col>
      </Form.Group>
    </Col>
  );
}

export default ScoopOption;
