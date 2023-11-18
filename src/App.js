import OrderEntry from './pages/OrderEntry/OrderEntry';
import { Container } from 'react-bootstrap';
import { OrderDetailsCtxProvider } from './contexts/OrderDetailsCtx';
import { useState } from 'react';
import { orderPhases } from './constants';
import OrderSummary from './pages/OrderSummary/OrderSummary';
import OrderConfirmation from './pages/OrderConfirmation/OrderConfirmation';

function App() {
  const [orderPhase, setOrderPhase] = useState(orderPhases.inProgress);

  const componentByPhase = {
    [orderPhases.inProgress]: OrderEntry,
    [orderPhases.review]: OrderSummary,
    [orderPhases.completed]: OrderConfirmation
  };

  const OrderPhase = componentByPhase[orderPhase];

  return (
    <Container>
      <OrderDetailsCtxProvider>
        <OrderPhase setOrderPhase={setOrderPhase} />
      </OrderDetailsCtxProvider>
    </Container>
  );
}

export default App;
