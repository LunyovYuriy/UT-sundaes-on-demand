import React from 'react';
import Options from './components/Options';
import { useOrderDetailsCtx } from '../../contexts/OrderDetailsCtx';
import { formatCurrency } from '../../utils';

function OrderEntry() {
  const { totals } = useOrderDetailsCtx();

  return (
    <div>
      <Options optionType="scoops"></Options>
      <Options optionType="toppings"></Options>
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
    </div>
  );
}

export default OrderEntry;
