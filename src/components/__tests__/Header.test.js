import { render, screen } from "@testing-library/react";
import App from "../../App";
import Game from "../Game/Game";

test("renders Header", () => {
  render(<Game />);
  const myHeader = screen.getByText(/HANG-GIT/i);
  expect(myHeader).toBeInTheDocument();
});
