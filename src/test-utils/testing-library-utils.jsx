import { render } from '@testing-library/react';
import { OrderDetailsCtxProvider } from '../contexts/OrderDetailsCtx';

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsCtxProvider, ...options });

export * from '@testing-library/react';
export { renderWithContext as render };
