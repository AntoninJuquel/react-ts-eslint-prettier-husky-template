import { render, screen, act } from '@testing-library/react';

import { App } from '~/views';

test('Renders main page correctly', async () => {
  // Setup
  render(<App />);
  const buttonCount = screen.getByRole('button', {
    name: /count is: 0/i,
  });
  const codeCount = screen.queryByText(/The count is now:/);

  // Pre Expectations
  expect(buttonCount.innerHTML).toBe('count is: 0');
  expect(codeCount).not.toBeInTheDocument();

  // Init
  act(() => {
    buttonCount.click();
    buttonCount.click();
  });

  // Post Expectations
  expect(buttonCount.innerHTML).toBe('count is: 2');
  expect(screen.queryByText(/The count is now:/)).toBeInTheDocument();
});