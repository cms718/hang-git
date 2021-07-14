
import { render, screen } from '@testing-library/react';
import App from '../../App';
// const header = require('../Header/.jsx');
import Header from "../Header/Header";

test('renders Header', () => {
  render(<App />);
  const myHeader = screen.getByText(/HANG-GIT/i);
  expect(myHeader).toBeInTheDocument();
});
