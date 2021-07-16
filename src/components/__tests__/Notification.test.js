import { fireEvent, render, screen } from "@testing-library/react";

// const header = require('../Header/.jsx');
import Notification from "../Notification/Notification";
import Game from "../Game/Game";

test("checks if letter has been repeated on a correct letter", () => {
  render(<Game />);

  const lives = screen.getByText("6");
  expect(lives).toBeInTheDocument();
  fireEvent.keyDown(document, { key: "i" });
  const letters = screen.getAllByText("_");
  const correctLetters = screen.getAllByText("i");
  expect(letters.length).toBe(2);
  expect(correctLetters.length).toBe(2);
  fireEvent.keyDown(document, { key: "i" });
  const myNotification = screen.getByText(
    /You have already entered this letter/i
  );
  expect(myNotification).toBeInTheDocument();
});

test("checks if letter has been repeated on an incorrect letter", () => {
  render(<Game />);

  const lives = screen.getByText("6");
  expect(lives).toBeInTheDocument();
  fireEvent.keyDown(document, { key: "a" });
  expect(lives).toBeInTheDocument("5");
  fireEvent.keyDown(document, { key: "a" });
  const myNotification = screen.getByText(
    /You have already entered this letter/i
  );
  expect(myNotification).toBeInTheDocument();
});
