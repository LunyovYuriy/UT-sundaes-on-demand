import { fireEvent, render, screen } from '@testing-library/react';
import Summary from '../OrderSummary';

describe('<OrderSummaryForm />', () => {
  test('Checkbox and button initial conditions', () => {
    render(<Summary />);

    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole('button', {
      name: /confirm/i,
    });

    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  test('Checkbox enables button on checking and disabled on unchecking', () => {
    render(<Summary />);

    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole('button', {
      name: /confirm/i,
    });

    fireEvent.click(checkbox);
    expect(button).toBeEnabled();

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});
