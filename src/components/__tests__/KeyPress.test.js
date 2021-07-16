import { fireEvent, render, screen } from "@testing-library/react";
import Game from "../Game/Game";

test("renders all underscores if guess incorrect", () => {
  render(<Game />);
  fireEvent.keyDown(document, { key: "A" });
  const letters = screen.getAllByText("_");
  expect(letters.length).toBe(4);
});
test("renders letters if guess correct", () => {
  render(<Game />);
  fireEvent.keyDown(document, { key: "i" });
  const letters = screen.getAllByText("_");
  const correctLetters = screen.getAllByText("i");
  expect(letters.length).toBe(2);
  expect(correctLetters.length).toBe(2);
});
test("prevents keypress when user wins", () => {
  render(<Game />);
  fireEvent.keyDown(document, { key: "i" });
  fireEvent.keyDown(document, { key: "n" });
  fireEvent.keyDown(document, { key: "t" });
  fireEvent.keyDown(document, { key: "y" });
  const invalidGuess = screen.queryByText("y");
  expect(invalidGuess).toBeNull();
});
test("prevents keypress when user loses", () => {
  render(<Game />);
  fireEvent.keyDown(document, { key: "q" });
  fireEvent.keyDown(document, { key: "w" });
  fireEvent.keyDown(document, { key: "e" });
  fireEvent.keyDown(document, { key: "r" });
  fireEvent.keyDown(document, { key: "y" });
  fireEvent.keyDown(document, { key: "u" });
  fireEvent.keyDown(document, { key: "m" });
  const invalidGuess = screen.queryByText("m");
  expect(invalidGuess).toBeNull();
});
