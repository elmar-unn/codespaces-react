import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the expense title', () => {
  render(<App />);
  const titleElement = screen.getByText(/new book/i);
  expect(titleElement).toBeDefined();
});
