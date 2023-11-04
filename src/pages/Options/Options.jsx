import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScoopOption from './components/ScoopOption';
import ToppingOption from './components/ToppingOption';
import { Row } from 'react-bootstrap';

function Options({ optionType }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {});
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

  return (
    <Row>
      {items.map((item) => (
        <ItemComponent
          key={item.name}
          name={item.name}
          imagePath={item.imagePath}
        />
      ))}
    </Row>
  );
}

export default Options;
