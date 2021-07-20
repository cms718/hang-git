import { render, screen } from "@testing-library/react";
import Header from "../Header/Header";

test("renders Header", () => {
  render(<Header />);
  const myHeader = screen.getByText(/HANG-GIT/i);
  expect(myHeader).toBeInTheDocument();
});
