import React from 'react';
import Options from './components/Options';

function OrderEntry() {
  return (
    <div>
      <Options optionType="scoops"></Options>
      <Options optionType="toppings"></Options>
    </div>
  );
}

export default OrderEntry;
