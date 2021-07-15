import { render, screen } from "@testing-library/react";
import Hint from "../Hint/Hint";

test('renders hint text', () => {
  render(<Hint hint="a test hint"/>);
  const hint = screen.getByText(/a test hint/i);
  expect(hint).toBeInTheDocument();
});
