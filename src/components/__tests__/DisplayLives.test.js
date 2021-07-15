import { render, screen } from "@testing-library/react";
import DisplayLives from "../DisplayLives/DisplayLives";

test("updates lives if incorrect guess", () => {
  const word = "init";
  const guessedLetters = ["q"];
  render(<DisplayLives word={word} guessedLetters={guessedLetters} />);
  const lives = screen.getByText("5");
  expect(lives).toBeInTheDocument();
});

test("displays 6 lives with correct guesses", () => {
  const word = "init";
  const guessedLetters = ["n", "i"];
  render(<DisplayLives word={word} guessedLetters={guessedLetters} />);
  const lives = screen.getByText("6");
  expect(lives).toBeInTheDocument();
});

test("displays 6 lives with no guesses", () => {
  const word = "init";
  const guessedLetters = [];
  render(<DisplayLives word={word} guessedLetters={guessedLetters} />);
  const lives = screen.getByText("6");
  expect(lives).toBeInTheDocument();
});
