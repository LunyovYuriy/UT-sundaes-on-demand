import { render, screen } from '../../../test-utils/testing-library-utils';
import OrderSummary from '../OrderSummary';

describe('<OrderSummary />', () => {
  test('OrderSummary page rendered', () => {
    render(<OrderSummary />);

    const summaryHeading = screen.getByRole('heading', {
      name: 'Order Summary'
    });

    expect(summaryHeading).toBeInTheDocument();
  });
});
