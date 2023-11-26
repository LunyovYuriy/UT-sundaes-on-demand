import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

test('order phases for happy path', async () => {
  const user = userEvent.setup();

  const { unmount } = render(<App />);

  /* In Progress phase */
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla'
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, '1');

  const chocolateInput = screen.getByRole('spinbutton', { name: 'Chocolate' });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, '2');

  const cherriesCheckbox = await screen.findByRole('checkbox', {
    name: 'Cherries'
  });
  await user.click(cherriesCheckbox);

  const nextButton = screen.getByRole('button', {
    name: /next/i
  });
  await user.click(nextButton);

  /* Review Phase */
  const summaryHeading = screen.getByRole('heading', { name: 'Scoops: $6.00' });
  expect(summaryHeading).toBeInTheDocument();

  const toppingsHeading = screen.getByRole('heading', {
    name: 'Toppings: $1.50'
  });
  expect(toppingsHeading).toBeInTheDocument();

  expect(screen.getByText('1 Vanilla')).toBeInTheDocument();
  expect(screen.getByText('2 Chocolate')).toBeInTheDocument();
  expect(screen.getByText('Cherries')).toBeInTheDocument();

  const termsCheckbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i
  });
  await user.click(termsCheckbox);

  const confirmButton = screen.getByRole('button', {
    name: /confirm/i
  });
  await user.click(confirmButton);

  /* Completed Phase */
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();

  const thankYouHeader = await screen.findByRole('heading', {
    name: /thank you!/i
  });
  expect(thankYouHeader).toBeInTheDocument();

  const notLoading = screen.queryByText('loading');
  expect(notLoading).not.toBeInTheDocument();

  const orderNumber = await screen.findByText(/your order number is/i);
  expect(orderNumber).toBeInTheDocument();

  const newOrderButton = screen.getByRole('button', {
    name: /create new order/i
  });
  await user.click(newOrderButton);

  const scoopsTotal = await screen.findByText('Scoops total: $0.00');
  expect(scoopsTotal).toBeInTheDocument();
  const toppingsTotal = screen.getByText('Toppings total: $0.00');
  expect(toppingsTotal).toBeInTheDocument();

  unmount();
});

test('toppings header is not displayed on summary page if there is no toppings ordered', async () => {
  const user = userEvent.setup();
  const { unmount } = render(<App />);

  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla'
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, '1');

  const chocolateInput = screen.getByRole('spinbutton', {
    name: 'Chocolate'
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, '2');

  const nextButton = screen.getByRole('button', {
    name: /next/i
  });
  await user.click(nextButton);

  const summaryHeading = screen.getByRole('heading', { name: 'Scoops: $6.00' });
  expect(summaryHeading).toBeInTheDocument();

  const toppingsHeading = screen.queryByRole('heading', {
    name: /toppings/i
  });
  expect(toppingsHeading).not.toBeInTheDocument();

  unmount();
});
