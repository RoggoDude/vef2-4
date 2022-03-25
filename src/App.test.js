import { render, screen } from '@testing-library/react';
import App from './App';

test('renders event page', () => {
  render(<App />);
  const linkElement = screen.getByText('Viðburðasíðan');
  expect(linkElement).toBeInTheDocument();
});