import { App } from '@/views';
import { fireEvent, render, screen } from '@testing-library/react';

test('count is 0 at first', () => {
  render(<App />);

  expect(screen.getByText('count is: 0')).toBeDefined();
});

test('increments count', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'count is: 0' }));

  expect(screen.getByText('count is: 1')).toBeDefined();
});
