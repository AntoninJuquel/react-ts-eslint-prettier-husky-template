import { App } from '@/views';
import { render, screen } from '@testing-library/react';

test('Hello world on screen', () => {
  render(<App />);

  expect(screen.getByText('Hello world !')).toBeDefined();
});

test('Two dropdowns on screen', () => {
  render(<App />);

  const lists = screen.getAllByRole('list');

  expect(lists.length).toBe(2);
});
