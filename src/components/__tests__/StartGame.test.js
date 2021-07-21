import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";

test("renders hint text", () => {
  render(<App />);
  fireEvent.click(screen.getByText("easy"));
  const title = screen.getByText("Hang-Git");
  expect(title).toBeInTheDocument();
});
