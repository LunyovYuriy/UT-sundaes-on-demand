import { createContext, useContext, useState } from 'react';
import { pricePerItem } from '../constants';

const OrderDetailsCtx = createContext();

export function useOrderDetailsCtx() {
  const context = useContext(OrderDetailsCtx);

  if (!context) {
    throw new Error(
      'useOrderDetailsCtx must be called from within an OrderDetailsProvider'
    );
  }

  return context;
}

export function OrderDetailsCtxProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {},
    toppings: {}
  });

  const updateItemCount = (itemName, newItemCount, optionType) =>
    setOptionCounts((prevState) => ({
      ...prevState,
      [optionType]: {
        ...prevState[optionType],
        [itemName]: newItemCount
      }
    }));

  const resetOrder = () => {
    setOptionCounts({ scoops: {}, toppings: {} });
  };

  const calculateTotal = (optionType) => {
    const countsArray = Object.values(optionCounts[optionType]);

    const totalCount = countsArray.reduce(
      (accumulator, value) => accumulator + value,
      0
    );

    return totalCount * pricePerItem[optionType];
  };

  const totals = {
    scoops: calculateTotal('scoops'),
    toppings: calculateTotal('toppings')
  };

  const value = { optionCounts, totals, updateItemCount, resetOrder };

  return <OrderDetailsCtx.Provider value={value} {...props} />;
}
