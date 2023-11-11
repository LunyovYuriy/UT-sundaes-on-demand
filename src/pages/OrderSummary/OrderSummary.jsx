import React from 'react';
import OrderSummaryForm from './components/OrderSummaryForm';
import { useOrderDetailsCtx } from '../../contexts/OrderDetailsCtx';
import { formatCurrency } from '../../utils';

function OrderSummary() {
  const { totals, optionCounts } = useOrderDetailsCtx();
  const scoopArray = Object.entries(optionCounts.scoops);
  const toppingsArray = Object.keys(optionCounts.toppings);

  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
      <ul>
        {scoopArray.map(([key, value]) => (
          <li key={key}>
            {value} {key}
          </li>
        ))}
      </ul>
      <h2>Toppings: {formatCurrency(totals.toppings)}</h2>
      <ul>
        {toppingsArray.map((key) => (
          <li key={key}>{key}</li>
        ))}
      </ul>
      <OrderSummaryForm />
    </div>
  );
}

export default OrderSummary;
