import { render, screen } from '@testing-library/react';
import App from './App';

test('header renders', () => {
  render(<App />);
  const headerElement = screen.getByText(/watch list/i);
  expect(headerElement).toBeInTheDocument();
});
