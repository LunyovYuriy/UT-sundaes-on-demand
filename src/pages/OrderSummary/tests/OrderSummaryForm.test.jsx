import { render, screen } from '../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import Summary from '../OrderSummary';

describe('<OrderSummaryForm />', () => {
  test('Checkbox and button initial conditions', () => {
    render(<Summary />);

    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i
    });
    const button = screen.getByRole('button', {
      name: /confirm/i
    });

    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  test('Checkbox enables button on checking and disabled on unchecking', async () => {
    const user = userEvent.setup();

    render(<Summary />);

    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i
    });
    const button = screen.getByRole('button', {
      name: /confirm/i
    });

    await user.click(checkbox);
    expect(button).toBeEnabled();

    await user.click(checkbox);
    expect(button).toBeDisabled();
  });

  test('Popover responds to hover', async () => {
    const user = userEvent.setup();

    render(<Summary />);
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);
    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    await user.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
  });
});
