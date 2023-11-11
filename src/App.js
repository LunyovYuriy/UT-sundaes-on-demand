import OrderEntry from './pages/OrderEntry/OrderEntry';
import { Container } from 'react-bootstrap';
import { OrderDetailsCtxProvider } from './contexts/OrderDetailsCtx';

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
