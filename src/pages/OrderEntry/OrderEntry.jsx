import React from 'react';
import Options from './components/Options';
import { useOrderDetailsCtx } from '../../contexts/OrderDetailsCtx';
import { formatCurrency } from '../../utils';
import { Button } from 'react-bootstrap';
import { orderPhases } from '../../constants';

function OrderEntry({ setOrderPhase }) {
  const { totals } = useOrderDetailsCtx();

  return (
    <div>
      <Options optionType="scoops"></Options>
      <Options optionType="toppings"></Options>
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
      <Button
        onClick={() => setOrderPhase(orderPhases.review)}
        disabled={!(totals.scoops + totals.toppings)}>
        Next
      </Button>
    </div>
  );
}

export default OrderEntry;
