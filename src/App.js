import OrderEntry from './pages/OrderEntry/OrderEntry';
import { Container } from 'react-bootstrap';
import { OrderDetailsCtxProvider } from './contexts/OrderDetailsCtx';
import OrderSummary from './pages/OrderSummary/OrderSummary';

function App() {
  return (
    <Container>
      <OrderDetailsCtxProvider>
        <OrderEntry />
      </OrderDetailsCtxProvider>
    </Container>
  );
}

export default App;
