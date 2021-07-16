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
