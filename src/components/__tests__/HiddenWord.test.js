import { render, screen } from "@testing-library/react";
import HiddenWord from "../HiddenWord/HiddenWord";

test("renders all underscores if no guessed letter", () => {
  const word = "init";
  const guessedLetters = [];
  render(
    <HiddenWord word={word} guessedLetters={guessedLetters} inProgress={true} />
  );
  const letters = screen.getAllByText("_");
  expect(letters.length).toBe(4);
});

test("renders an _ for each unknown letter", () => {
  const word = "init";
  const guessedLetters = ["i"];
  render(
    <HiddenWord word={word} guessedLetters={guessedLetters} inProgress={true} />
  );
  const letters = screen.getAllByText("_");
  const letters2 = screen.getAllByText("i");
  expect(letters.length).toBe(2);
  expect(letters2.length).toBe(2);
});
