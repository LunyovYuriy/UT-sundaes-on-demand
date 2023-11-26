import {
  render,
  screen,
  waitFor
} from '../../../test-utils/testing-library-utils';
import { rest } from 'msw';
import { server } from '../../../mocks/server';
import OrderEntry from '../OrderEntry';
import userEvent from '@testing-library/user-event';

describe('<OrderEntry />', () => {
  test('Handles error for scoops and toppings routes', async () => {
    server.resetHandlers(
      rest.get('http://localhost:3030/scoops', (req, res, ctx) =>
        res(ctx.status(500))
      ),
      rest.get('http://localhost:3030/toppings', (req, res, ctx) =>
        res(ctx.status(500))
      )
    );

    render(<OrderEntry />);

    await waitFor(async () => {
      const alerts = await screen.findAllByRole('alert');

      expect(alerts).toHaveLength(2);
    });
  });

  test('Grand total is not changing if scoops has invalid value', async () => {
    const user = userEvent.setup();
    const { unmount } = render(<OrderEntry />);

    const vanillaInput = await screen.findByRole('spinbutton', {
      name: /vanilla/i
    });
    await user.clear(vanillaInput);
    await user.type(vanillaInput, '-1');

    const grandTotal = screen.getByText(/grand total/i);

    expect(grandTotal).toHaveTextContent(`Grand total: $0.00`);

    await user.clear(vanillaInput);
    await user.type(vanillaInput, '1');
    expect(grandTotal).toHaveTextContent(`Grand total: $2.00`);

    unmount();
  });
});
