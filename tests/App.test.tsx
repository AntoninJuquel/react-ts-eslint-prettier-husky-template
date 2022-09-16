import { App } from '@/views';
import { render, screen } from '@testing-library/react';

test('Hello world on screen', () => {
  render(<App />);

  expect(screen.getByText('Hello world !')).toBeDefined();
});
