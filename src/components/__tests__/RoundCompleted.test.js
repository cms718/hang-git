import { fireEvent, render, screen } from "@testing-library/react";
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

test("clicking next question advances player to next question", () => {
  render(<Game />);
  fireEvent.keyDown(document, { key: "i" });
  fireEvent.keyDown(document, { key: "n" });
  fireEvent.keyDown(document, { key: "t" });
  fireEvent.click(screen.getByText("Next Question"));
  const letters = screen.getAllByText("_");

  const message = screen.queryByText("Next Question");
  expect(message).not.toBeInTheDocument();

  expect(letters.length).toBe(6);
});
