import { render, screen } from '../../../test-utils/testing-library-utils';
import Options from '../components/Options';
import userEvent from '@testing-library/user-event';
import { getRoles } from '@testing-library/react';

describe('<Options />', () => {
  test('Displays image of each scoop from the server', async () => {
    render(<Options optionType="scoops" />);

    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
  });

  test('Displays image of each toppings from the server', async () => {
    render(<Options optionType="toppings" />);

    const toppingImages = await screen.findAllByRole('img', {
      name: /topping$/i
    });
    expect(toppingImages).toHaveLength(3);

    const altText = toppingImages.map((element) => element.alt);
    expect(altText).toEqual([
      'Cherries topping',
      'M&Ms topping',
      'Hot fudge topping'
    ]);
  });

  test('scoops option label becomes red if value is invalid', async () => {
    const user = userEvent.setup();
    render(<Options optionType="scoops" />);

    const vanillaInput = await screen.findByRole('spinbutton', {
      name: /vanilla/i
    });
    await user.clear(vanillaInput);
    await user.type(vanillaInput, '-1');

    const [vanillaLabel] = await screen.findAllByText(/vanilla/i);

    expect(vanillaLabel).toHaveStyle({ color: 'red' });

    await user.clear(vanillaInput);
    await user.type(vanillaInput, '1');

    expect(vanillaLabel).toHaveStyle({ color: 'white' });
  });

  test('scoops total is not changing if scoops has invalid value', async () => {
    const user = userEvent.setup();
    render(<Options optionType="scoops" />);

    const vanillaInput = await screen.findByRole('spinbutton', {
      name: /vanilla/i
    });
    await user.clear(vanillaInput);
    await user.type(vanillaInput, '-1');

    const scoopsTotal = await screen.findByText(/scoops total:/i);

    expect(scoopsTotal).toHaveTextContent('Scoops total: $0.00');

    await user.clear(vanillaInput);
    await user.type(vanillaInput, '1');

    expect(scoopsTotal).toHaveTextContent('Scoops total: $2.00');
  });
});
