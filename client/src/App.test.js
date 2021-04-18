import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Goto text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Goto/i);
  expect(linkElement).toBeInTheDocument();
});
