import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";

test("renders hint text", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Start Game"));
  const title = screen.getByText("HANG-GIT");
  expect(title).toBeInTheDocument();
});
