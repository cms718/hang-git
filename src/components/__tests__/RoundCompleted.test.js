import {
  fireEvent,
  getAllByRole,
  render,
  screen,
} from "@testing-library/react";
import Game from "../Game/Game";
test("reset button when out of lives", () => {
  render(<Game />);
  fireEvent.keyDown(document, { key: "Q" });
  fireEvent.keyDown(document, { key: "W" });
  fireEvent.keyDown(document, { key: "E" });
  fireEvent.keyDown(document, { key: "R" });
  fireEvent.keyDown(document, { key: "Y" });
  fireEvent.keyDown(document, { key: "U" });
  const buttons = screen.getAllByRole("button");
  expect(buttons[0]).toHaveTextContent("Try again");
});
