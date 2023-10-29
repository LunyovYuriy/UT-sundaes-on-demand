import { render, screen } from '@testing-library/react';
import OrderSummary from '../OrderSummary';

describe('<OrderSummary />', () => {
  test('OrderSummary page rendered', () => {
    render(<OrderSummary />);

    const summaryHeading = screen.getByRole('heading', {
      name: 'Order Summary',
    });

    expect(summaryHeading).toBeInTheDocument();
  });
});
