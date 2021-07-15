import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";

test("reset button when out of lives", () => {
  render(<App />);
  fireEvent.keyDown(document, { key: "Q" });
  fireEvent.keyDown(document, { key: "W" });
  fireEvent.keyDown(document, { key: "E" });
  fireEvent.keyDown(document, { key: "R" });
  fireEvent.keyDown(document, { key: "Y" });
  fireEvent.keyDown(document, { key: "U" });
  expect(screen.getByRole("button")).toHaveTextContent("Try again");
});
